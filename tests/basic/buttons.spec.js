import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { BasicButtonsPage } from '../../pages/basic/ButtonsPage.js';

test.describe('@basic Buttons', () => {
  test('Click all enabled buttons', async ({ page }) => {
    const home = new HomePage(page);
    const btn = new BasicButtonsPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Click buttons except disabled', async () => {
      await btn.enabled.click();
      await btn.secondary.click();
      await btn.outline.click();
      await btn.destructive.click();
      await btn.ghost?.click(); // optional if exists
      await btn.dynamic.click();
    });

    await test.step('Validate disabled button', async () => {
      await expect(btn.disabled).toBeDisabled();
    });
  });
});
