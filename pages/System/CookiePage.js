export class CookiePage {
  constructor(page) {
    this.page = page;
    this.setSessionCookieBtn = page.locator('[data-testid="set-session-cookie"]');
    this.setPersistentCookieBtn = page.locator('[data-testid="set-persistent-cookie"]');
    this.setSecureCookieBtn = page.locator('[data-testid="set-secure-cookie"]');
    this.setHttpOnlyBtn = page.locator('[data-testid="set-httponly-cookie"]');
    this.allCookies = page.locator('[data-testid="all-cookies"]');
  }

  async safeClick(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  async setSessionCookie() {
    await this.safeClick(this.setSessionCookieBtn);
  }

  async setPersistentCookie() {
    await this.safeClick(this.setPersistentCookieBtn);
  }

  async setSecureCookie() {
    await this.safeClick(this.setSecureCookieBtn);
  }

  async setHttpOnlySimulation() {
    await this.safeClick(this.setHttpOnlyBtn);
  }

  getExpectedCookieString() {
    return [
      'secure-cookie=secure-value',
      'httponly-sim=httponly-value',
      'persistent-cookie=persistent-value',
    ];
  }
}
