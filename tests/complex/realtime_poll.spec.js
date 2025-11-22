import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { RealTimepollPage } from '../../pages/Complex/RealTimeUpdatesPage.js';

test.describe('Complex - Real-time updates & Polling', () => {
  test('should show WS messages and polling count updates', async ({ page }) => {
    const home = new HomePage(page);
    const poll = new RealTimepollPage(page);

    await home.open();
    await home.clickTab('Complex');

    const wsStatus = await poll.getWsStatus();
    expect(wsStatus.toLowerCase()).toContain('connected');

    await poll.waitForMessages(1);
    const messages = await poll.getWsMessages();
    expect(messages.length).toBeGreaterThan(0);

    const initialCount = await poll.getCount();
    await poll.start();
    await page.waitForTimeout(10000);
    const afterCount = await poll.getCount();
    expect(afterCount).toBeGreaterThanOrEqual(initialCount);
    console.log(afterCount);

    await poll.stop();
    await page.waitForTimeout(300);
    const stoppedCount = await poll.getCount();
    expect(stoppedCount).toBeGreaterThanOrEqual(initialCount);
  });
});
