import { test, expect } from '../../fixtures/customFixtures.js';
import { users, generateRandomUser, waits } from '../../fixtures/testData.js';

test.describe('Business - User Authentication', () => {
  test('Validate login and registration flows', async ({ homePage, userAuthPage }) => {
    await homePage.open();
    await homePage.clickTab('Business');

    await test.step('Login with valid creds', async () => {
      await userAuthPage.login(users.admin.username, users.admin.password);
      const welcome = userAuthPage.loginWelcomeMessage;
      const email = userAuthPage.loginEmailMessage;
      await welcome.waitFor({ state: 'visible', timeout: waits.afterLogin });
      await expect(welcome).toBeVisible();
      await expect(email).toBeVisible();
      console.log('✔ Login successful');
      await userAuthPage.loginLogoutBtn.click();
    });

    await test.step('Register a new user', async () => {
      const newUser = generateRandomUser();

      await userAuthPage.page.waitForTimeout(waits.afterRegistration);

      await userAuthPage.register({
        first: newUser.firstName,
        last: newUser.lastName,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      });
      const welcomeText = await userAuthPage.regWelcomeMessage.innerText();
      const emailText = await userAuthPage.regEmailMessage.innerText();
      console.log(`REGISTRATION SUCCESSFUL with ${welcomeText} and ${emailText}`);
      await userAuthPage.regLogoutBtn.click();
    });
  });
});
