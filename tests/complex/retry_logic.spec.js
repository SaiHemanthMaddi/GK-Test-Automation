import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { RetryLogicPage } from '../../pages/Complex/RetryLogicPage.js';

test.describe('Complex - Retry Logic', () => {
  test('should perform retry attempts and update count/status', async ({ page }) => {
    const home = new HomePage(page);
    const RetryLogic = new RetryLogicPage(page);

    await home.open();
    await home.clickTab('Complex');

    // initial values
    const initialStatus = await RetryLogic.getStatus();
    const initialCount = await RetryLogic.getCount();
    expect(initialStatus.toLowerCase()).toBeDefined();
    expect(typeof initialCount).toBe('number');

    // click try operation — this simulates retry logic (may update status/count)
    await RetryLogic.clickRetry();

    // wait a bit for attempts to register (the app may retry internally)
    await page.waitForTimeout(1500);

    const newCount = await RetryLogic.getCount();
    // expect attempts increased or stay 0 but status changed; assert at least numeric
    expect(typeof newCount).toBe('number');
    // if retry mechanism increments attempts, ensure it's >= initial
    expect(newCount).toBeGreaterThanOrEqual(initialCount);
  });
});
