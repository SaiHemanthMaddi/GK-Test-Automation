import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { UserAuthPage } from '../../pages/Business/UserAuthPage';

test.describe('Business - User Authentication', () => {
  test('Validate login and registration flows', async ({ page }) => {
    const home = new HomePage(page);
    const auth = new UserAuthPage(page);

    await home.open();
    await home.clickTab('Business');

    await test.step('Login with valid creds', async () => {
      await auth.login('admin', 'password');
      const welcome = auth.loginWelcomeMessage;
      const email = auth.loginEmailMessage;
      await page.waitForTimeout(5000);
      await expect(welcome).toBeVisible();
      await expect(email).toBeVisible();
      console.log('✔ Login successful');
      await auth.loginLogoutBtn.click();
    });

    await test.step('Register a new user', async () => {
      const random = Math.floor(Math.random() * 99999);

      await page.waitForTimeout(500);

      await auth.register({
        first: 'Sai',
        last: 'Tester',
        username: `user${random}`,
        email: `email${random}@test.com`,
        password: 'Password123',
      });
      const welcomeText = await auth.regWelcomeMessage.innerText();
      const emailText = await auth.regEmailMessage.innerText();
      console.log(`REGISTRATION SUCCESSFUL with ${welcomeText} and ${emailText}`);
      await auth.regLogoutBtn.click();
    });
  });
});
