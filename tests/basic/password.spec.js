import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BasicPasswordPage } from '../../pages/basic/PasswordPage';

test.describe('@basic Password Fields', () => {
  test('Validate password input behavior', async ({ page }) => {
    const home = new HomePage(page);
    const pwd = new BasicPasswordPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Fill password fields', async () => {
      await pwd.fillPasswords('mypassword', 'mypassword');
    });

    await test.step('Validate masking & strength', async () => {
      await expect(pwd.password).toHaveValue('mypassword');
      await expect(pwd.confirmPassword).toHaveValue('mypassword');
      await expect(page.getByText('Password strength: 🟢 Strong')).toBeVisible();
    });
  });
});
