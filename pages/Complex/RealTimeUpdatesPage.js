export class realtimeUpdatesPage {
  constructor(page) {
    this.page = page;
    this.wsStatus = page.locator('[data-testid="ws-status"]');
    this.wsMessages = page.locator('[data-testid="ws-messages"] ');
    this.pollStart = page.locator('[data-testid="start-polling"]');
    this.pollStop = page.locator('[data-testid="stop-polling"]');
    this.pollCount = page.locator('[data-testid="polling-count"]');
  }

  async getWsStatus() {
    return this.wsStatus.innerText();
  }

  async getWsMessages() {
    return this.wsMessages.locator('div').allInnerTexts();
  }

  async waitForMessages(count = 1) {
    await this.wsMessages.locator('div').first().waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForFunction(
      (expectedCount) => {
        const messages = document.querySelectorAll('[data-testid="ws-messages"] div');
        return messages.length >= expectedCount;
      },
      count,
      { timeout: 15000 }
    );
  }

  async start() {
    await this.pollStart.click();
  }

  async stop() {
    await this.pollStop.click();
  }

  async getCount() {
    const text = await this.pollCount.innerText();
    return Number(text.replace(/[^0-9]/g, ''));
  }
}
