import { test, expect } from '../../fixtures/customFixtures.js';

test('Complex - Validate rotating WebSocket messages', async ({ page, homePage, realtimeUpdatesPage }) => {

  await homePage.open();
  await homePage.clickTab('Complex');

  // Wait for WS messages to populate (5s interval)
  await page.waitForFunction(
    () => {
      const el = document.querySelector('[data-testid="ws-messages"]');
      return el && el.children.length >= 5;
    },
    { timeout: 15000 }
  );

  const initialMsgs = await realtimeUpdatesPage.getWsMessages();
  console.log('Initial WS messages:', initialMsgs);

  expect(initialMsgs.length).toBeGreaterThan(0);

  // Validate known messages exist
  const allowedTypes = ['Data synced', 'New notification', 'User joined', 'Status changed'];

  for (const msg of initialMsgs) {
    expect(msg).toMatch(/Real-time update:/);
    const foundType = allowedTypes.some((t) => msg.includes(t));
    expect(foundType).toBeTruthy();
  }

  const afterMsgs = await realtimeUpdatesPage.getWsMessages();
  expect(afterMsgs.length).toBeGreaterThan(0);

  console.log('After rotation:', afterMsgs);
});
