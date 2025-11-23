import { test, expect } from '../../fixtures/customFixtures.js';
import { dropdowns } from '../../fixtures/testData.js';

test.describe('@basic Dropdowns', () => {
  test('Select country & framework', async ({ homePage, dropdownPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Select dropdowns', async () => {
      await dropdownPage.selectCountry(dropdowns.countries[0]); // 'India'
      await dropdownPage.selectFramework(dropdowns.frameworks[0]); // 'Playwright'
    });

    await test.step('Validate selections', async () => {
      await expect(dropdownPage.countrySelect).toContainText(dropdowns.countries[0]);
      await expect(dropdownPage.searchableSelect).toContainText(dropdowns.frameworks[0]);
    });
  });
});
