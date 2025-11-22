export class StoragePage {
  constructor(page) {
    this.page = page;
    this.setLocalStorageBtn = page.locator('[data-testid="set-local-storage"]');
    this.localStorageData = page.locator('[data-testid="local-storage-data"]');

    this.setSessionStorageBtn = page.locator('[data-testid="set-session-storage"]');
    this.sessionStorageData = page.locator('[data-testid="session-storage-data"]');

    this.setCookieBtn = page.locator('[data-testid="set-cookie"]');
    this.cookieData = page.locator('[data-testid="cookie-data"]');

    this.clearAllStorage = page.locator('[data-testid="clear-all-storage"]');
  }

  async safeClick(locator, opts = {}) {
    await this.page
      .waitForFunction(
        () => {
          const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
          return el && el !== document.documentElement;
        },
        { timeout: 5000 }
      )
      .catch(() => null);
    await locator.scrollIntoViewIfNeeded();
    await locator.click({ ...opts, timeout: opts.timeout ?? 5000 });
  }

  async setLocalStorage() {
    await this.safeClick(this.setLocalStorageBtn);
  }
  async getLocalStorageData() {
    return (await this.localStorageData.innerText()).trim();
  }

  async setSessionStorage() {
    await this.safeClick(this.setSessionStorageBtn);
  }
  async getSessionStorageData() {
    return (await this.sessionStorageData.innerText()).trim();
  }

  async setCookieData() {
    await this.safeClick(this.setCookieBtn);
  }
  async getCookieData() {
    return (await this.cookieData.innerText()).trim();
  }

  async clearAllStorageData() {
    await this.safeClick(this.clearAllStorage);
  }
}
