import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DelayedLoadingPage } from '../../pages/Complex/DelayedLoadingPage.js';

test.describe('Complex - Delayed Loading', () => {
  test('should wait and verify delayed elements load', async ({ page }) => {
    const home = new HomePage(page);
    const DelayedLoading = new DelayedLoadingPage(page);
    await home.open();
    await home.clickTab('Complex');

    await DelayedLoading.waitForAllElements(9000);
    const texts = await DelayedLoading.getTexts();

    expect(texts.length).toBe(3);
    expect(texts[0]).toContain('Element loaded after 2s');
    expect(texts[1]).toContain('Element loaded after 4s');
    expect(texts[2]).toContain('Element loaded after 6s');

    const loadedIndicator = await page
      .locator('text=Loaded:')
      .innerText()
      .catch(() => null);
    if (loadedIndicator) expect(loadedIndicator).toContain('3/3');
  });
});
