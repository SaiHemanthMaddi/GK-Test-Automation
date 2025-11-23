import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('@basic Password Fields', () => {
  test('Validate password input behavior', async ({ page, homePage, passwordPage }) => {
    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Fill password fields', async () => {
      await passwordPage.fillPasswords('mypassword', 'mypassword');
    });

    await test.step('Validate masking & strength', async () => {
      await expect(passwordPage.password).toHaveValue('mypassword');
      await expect(passwordPage.confirmPassword).toHaveValue('mypassword');
      await expect(page.getByText('Password strength: 🟢 Strong')).toBeVisible();
    });
  });
});
