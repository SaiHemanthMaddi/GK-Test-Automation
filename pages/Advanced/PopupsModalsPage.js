export class PopupsModalsPage {
  constructor(page) {
    this.page = page;
    this.alertBtn = page.locator('[data-testid="show-alert"]');
    this.confirmBtn = page.locator('[data-testid="show-confirm"]');
    this.promptBtn = page.locator('[data-testid="show-prompt"]');
    this.customModalBtn = page.locator('[data-testid="show-custom-modal"]');
  }

  async triggerAlert() {
    this.page.once('dialog', (d) => d.accept());
    await this.alertBtn.click();
  }

  async triggerConfirm(accept = true) {
    this.page.once('dialog', (d) => (accept ? d.accept() : d.dismiss()));
    await this.confirmBtn.click();
  }

  async triggerPrompt(text = 'Playwright') {
    this.page.once('dialog', (d) => d.accept(text));
    await this.promptBtn.click();
  }

  async openCustomModal() {
    await this.customModalBtn.click();
  }
}
