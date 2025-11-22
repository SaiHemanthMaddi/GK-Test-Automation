import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { BasicFormActionsPage } from '../../pages/basic/FormActionsPage.js';

test.describe('@basic Form Actions', () => {
  test('Reset form button', async ({ page }) => {
    const home = new HomePage(page);
    const form = new BasicFormActionsPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Click Reset', async () => {
      await form.resetForm();
    });

    await test.step('Validate Submit button disabled', async () => {
      await expect(form.submit).toBeDisabled();
    });
  });
});
