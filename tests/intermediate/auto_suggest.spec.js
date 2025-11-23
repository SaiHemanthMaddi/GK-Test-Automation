import { test, expect } from '../../fixtures/customFixtures.js';

test('Auto suggest - select Playwright', async ({ page, homePage, autoSuggestPage }) => {

  await homePage.open();
  await homePage.clickTab('Intermediate');

  await autoSuggestPage.typeAndSelect('Play', 'Playwright');

  // assert input updated
  await expect(autoSuggestPage.input).toHaveValue('Playwright');
});
