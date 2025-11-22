import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { HiddenInputPage } from '../../pages/Buggy/HiddenInputFieldPage';

test('Buggy - Should type into hidden input using force', async ({ page }) => {
  const home = new HomePage(page);
  const hidden = new HiddenInputPage(page);

  await home.open();
  await home.clickTab('Buggy');

  const text = 'Hello Automation';
  await hidden.typeIntoHiddenInput(text);

  await expect(hidden.displayText).toBeVisible();
  console.log(`Hidden input exists in DOM: "${text}"`);
});
