import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('@basic Form Actions', () => {
  test('Reset form button', async ({ homePage, formActionsPage }) => {

    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Click Reset', async () => {
      await formActionsPage.resetForm();
    });

    await test.step('Validate Submit button disabled', async () => {
      await expect(formActionsPage.submit).toBeDisabled();
    });
  });
});
