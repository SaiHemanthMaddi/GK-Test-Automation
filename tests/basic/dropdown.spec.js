import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { BasicDropdownsPage } from '../../pages/basic/DropdownPage.js';

test.describe('@basic Dropdowns', () => {
  test('Select country & framework', async ({ page }) => {
    const home = new HomePage(page);
    const dropdown = new BasicDropdownsPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Select dropdowns', async () => {
      await dropdown.selectCountry('India');
      await dropdown.selectFramework('Playwright');
    });

    await test.step('Validate selections', async () => {
      await expect(dropdown.countrySelect).toContainText('India');
      await expect(dropdown.searchableSelect).toContainText('Playwright');
    });
  });
});
