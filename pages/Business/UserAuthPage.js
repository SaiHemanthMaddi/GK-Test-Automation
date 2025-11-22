export class UserAuthPage {
  constructor(page) {
    this.page = page;

    // Login
    this.loginUsername = page.locator('[data-testid="login-username"]');
    this.loginPassword = page.locator('[data-testid="login-password"]');
    this.loginBtn = page.locator('[data-testid="login-button"]');
    this.loginWelcomeMessage = page.locator("//p[@data-testid='user-welcome']");
    this.loginEmailMessage = page.locator("//p[@class='text-xs text-green-600']");
    this.loginLogoutBtn = page.locator("//button[@data-testid='logout-button']");
    this.userAuthCard = page.locator('div[data-slot="card"]:has-text("User Authentication")');

    // Register
    this.regFirst = page.locator('[data-testid="register-firstname"]');
    this.regLast = page.locator('[data-testid="register-lastname"]');
    this.regUser = page.locator('[data-testid="register-username"]');
    this.regEmail = page.locator('[data-testid="register-email"]');
    this.regPass = page.locator('[data-testid="register-password"]');
    this.regConf = page.locator('[data-testid="register-confirm-password"]');
    this.regBtn = page.locator('[data-testid="register-button"]');
    this.regWelcomeMessage = page.locator("//p[@data-testid='user-welcome']");
    this.regEmailMessage = page.locator("//p[@class='text-xs text-green-600']");
    this.regLogoutBtn = page.locator("//button[@data-testid='logout-button']");
  }

  async login(username, password) {
    await this.loginUsername.fill(username);
    await this.loginPassword.fill(password);
    await this.loginBtn.click();
    await this.page.waitForTimeout(5000);
  }

  async register(data) {
    await this.regFirst.fill(data.first);
    await this.regLast.fill(data.last);
    await this.regUser.fill(data.username);
    await this.regEmail.fill(data.email);
    await this.regPass.fill(data.password);
    await this.regConf.fill(data.password);
    await this.regBtn.click();
    await this.page.waitForTimeout(600);
  }
}
