import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { RealTimepollPage } from '../../pages/Complex/RealTimeUpdatesPage.js';

test('Complex - Validate rotating WebSocket messages', async ({ page }) => {
  const home = new HomePage(page);
  const ws = new RealTimepollPage(page);

  await home.open();
  await home.clickTab('Complex');

  // Wait for WS messages to populate (5s interval)
  await page.waitForFunction(
    () => {
      const el = document.querySelector('[data-testid="ws-messages"]');
      return el && el.children.length >= 5;
    },
    { timeout: 15000 }
  );

  const initialMsgs = await ws.getWsMessages();
  console.log('Initial WS messages:', initialMsgs);

  expect(initialMsgs.length).toBeGreaterThan(0);

  // Validate known messages exist
  const allowedTypes = ['Data synced', 'New notification', 'User joined', 'Status changed'];

  for (const msg of initialMsgs) {
    expect(msg).toMatch(/Real-time update:/);
    const foundType = allowedTypes.some((t) => msg.includes(t));
    expect(foundType).toBeTruthy();
  }

  const afterMsgs = await ws.getWsMessages();
  expect(afterMsgs.length).toBeGreaterThan(0);

  console.log('After rotation:', afterMsgs);
});
