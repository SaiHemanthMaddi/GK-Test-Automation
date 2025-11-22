export class HiddenElementsPage {
  constructor(page) {
    this.page = page;
    this.toggleButton = page.locator('[data-testid="toggle-hidden-elements"]');
    this.hiddenItems = page.locator('[data-testid^="hidden-"]'); // update if exact testids exist
  }

  async toggle() {
    await this.toggleButton.click();
  }

  async countHiddenElements() {
    return await this.hiddenItems.first().isVisible();
  }

  async getHiddenTexts() {
    return await this.hiddenItems.allTextContents();
  }
}
