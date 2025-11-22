import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DisabledButtonPage } from '../../pages/Buggy/DisabledButtonPage';

test('Buggy - Should type into hidden input using force', async ({ page }) => {
  const home = new HomePage(page);
  const disabled = new DisabledButtonPage(page);

  await home.open();
  await home.clickTab('Buggy');

  await expect(disabled.topDisplay).toBeVisible();
  const isDisabled = await disabled.verifyButtonIsDisabled();
  console.log('Is button disabled:', isDisabled);
  expect(isDisabled).toBeTruthy();
  await expect(disabled.downDisplay).toBeVisible();
});
