import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('Complex - Real-time updates & Polling', () => {
  test('should show WS messages and polling count updates', async ({ page, homePage, realtimeUpdatesPage }) => {

    await homePage.open();
    await homePage.clickTab('Complex');

    const wsStatus = await realtimeUpdatesPage.getWsStatus();
    expect(wsStatus.toLowerCase()).toContain('connected');

    await realtimeUpdatesPage.waitForMessages(1);
    const messages = await realtimeUpdatesPage.getWsMessages();
    expect(messages.length).toBeGreaterThan(0);

    const initialCount = await realtimeUpdatesPage.getCount();
    await realtimeUpdatesPage.start();
    await page.waitForTimeout(10000);
    const afterCount = await realtimeUpdatesPage.getCount();
    expect(afterCount).toBeGreaterThanOrEqual(initialCount);
    console.log(afterCount);

    await realtimeUpdatesPage.stop();
    await page.waitForTimeout(300);
    const stoppedCount = await realtimeUpdatesPage.getCount();
    expect(stoppedCount).toBeGreaterThanOrEqual(initialCount);
  });
});
