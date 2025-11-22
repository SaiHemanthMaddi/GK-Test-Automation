export class RetryLogicPage {
  constructor(page) {
    this.page = page;
    this.button = page.locator('[data-testid="retry-button"]');
    this.status = page.locator('[data-testid="retry-status"]');
    this.count = page.locator('[data-testid="retry-count"]');
  }

  async clickRetry() {
    await this.button.click();
  }

  async getStatus() {
    return (await this.status.innerText()).trim();
  }

  async getCount() {
    const txt = await this.count.innerText();
    return parseInt(txt.replace('Attempts:', '').trim());
  }
}
