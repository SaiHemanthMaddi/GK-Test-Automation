import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { HiddenInputPage } from '../../pages/Buggy/HiddenInputFieldPage';

test('Buggy - Should type into hidden input using force', async ({ page, homePage }) => {
  
  const hidden = new HiddenInputPage(page);

  await homePage.open();
  await homePage.clickTab('Buggy');

  const text = 'Hello Automation';
  await hidden.typeIntoHiddenInput(text);

  await expect(hidden.displayText).toBeVisible();
  console.log(`Hidden input exists in DOM: "${text}"`);
});
