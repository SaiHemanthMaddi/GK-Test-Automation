import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { HiddenElementsPage } from '../../pages/Complex/HiddenElementsPage';

test('Complex - Hidden Elements should toggle correctly', async ({ page }) => {
  const home = new HomePage(page);
  const hidden = new HiddenElementsPage(page);

  await home.open();
  await home.clickTab('Complex');

  // Before clicking - hidden elements should NOT exist
  expect(await hidden.countHiddenElements()).toBeFalsy();

  // Toggle ON
  await hidden.toggle();

  // Wait for any hidden items to appear
  await page.waitForSelector('[data-testid^="hidden-"]');

  expect(await hidden.countHiddenElements()).toBeTruthy();

  // Validate text of each element
  const texts = await hidden.getHiddenTexts();
  for (let t of texts) {
    expect(t).toContain('Hidden Element');
  }

  // Toggle OFF
  await hidden.toggle();
  await page.waitForTimeout(300);

  // No hidden elements should remain
  expect(await hidden.countHiddenElements()).toBeFalsy();
});
