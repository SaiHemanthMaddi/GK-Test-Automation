import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { DisabledButtonPage } from '../../pages/Buggy/DisabledButtonPage';

test('Buggy - Should type into hidden input using force', async ({ page, homePage }) => {
  
  const disabled = new DisabledButtonPage(page);

  await homePage.open();
  await homePage.clickTab('Buggy');

  await expect(disabled.topDisplay).toBeVisible();
  const isDisabled = await disabled.verifyButtonIsDisabled();
  console.log('Is button disabled:', isDisabled);
  expect(isDisabled).toBeTruthy();
  await expect(disabled.downDisplay).toBeVisible();
});
