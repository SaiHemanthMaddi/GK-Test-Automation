import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ApiDynamicPage } from '../../pages/Complex/ApiDynamicPage';

test.describe('Complex - API Driven Dynamic Content', () => {
  test('should load API items and verify count and content', async ({ page }) => {
    const home = new HomePage(page);
    const Api = new ApiDynamicPage(page);

    await home.open();
    await home.clickTab('Complex');

    // ensure no api items initially (optional)
    const initialCount = await Api.countItems();
    // click load
    await Api.load();

    // wait for items to appear
    await page.waitForTimeout(5000);
    const count = await Api.countItems();
    expect(count).toBeGreaterThan(0); // expect at least 1

    const itemsText = await Api.getItemsText();
    // verify items have headers like "API Item 1", etc.
    for (const t of itemsText) {
      expect(t).toMatch(/API Item \d+/);
      expect(t).toContain('This is dynamically loaded content from API call');
    }
  });
});
