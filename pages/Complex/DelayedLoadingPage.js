export class DelayedLoadingPage {
  constructor(page) {
    this.page = page;
    this.elements = [
      page.locator('[data-testid="delayed-element-1"]'),
      page.locator('[data-testid="delayed-element-2"]'),
      page.locator('[data-testid="delayed-element-3"]'),
    ];
    this.loadedText = page.locator('text=Loaded:');
  }

  async waitForAllElements(timeout = 9000) {
    for (const el of this.elements) {
      await el.waitFor({ state: 'visible', timeout });
    }
  }

  async getTexts() {
    const arr = [];
    for (const el of this.elements) {
      arr.push(await el.innerText());
    }
    return arr;
  }
}
