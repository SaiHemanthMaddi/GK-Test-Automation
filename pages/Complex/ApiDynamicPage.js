export class ApiDynamicPage {
  constructor(page) {
    this.page = page;
    this.loadButton = page.locator('[data-testid="load-api-data"]');
    this.apiItems = page.locator('[data-testid^="api-item-api-"]');
  }

  async load() {
    await this.loadButton.click();
  }

  async countItems() {
    return this.apiItems.count();
  }

  async getItemsText() {
    const arr = [];
    const count = await this.apiItems.count();

    for (let i = 0; i < count; i++) {
      arr.push(await this.apiItems.nth(i).innerText());
    }

    return arr;
  }
}
