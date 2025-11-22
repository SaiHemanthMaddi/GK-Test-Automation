import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateAutoSuggestPage } from '../../pages/Intermediate/AutoSuggestPage';

test('Auto suggest - select Playwright', async ({ page }) => {
  const home = new HomePage(page);
  const auto = new IntermediateAutoSuggestPage(page);

  await home.open();
  await home.clickTab('Intermediate');

  await auto.typeAndSelect('Play', 'Playwright');

  // assert input updated
  await expect(auto.input).toHaveValue('Playwright');
});
