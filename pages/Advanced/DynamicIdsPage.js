export class DynamicIdsPage {
  constructor(page) {
    this.page = page;
    this.regenBtn = page.locator('[data-testid="regenerate-id"]');
    this.dynamicIdElement = page.locator('[data-testid="dynamic-id-element"]');
    this.dynamicClassElement = page.locator('[data-testid="dynamic-class-element"]');
  }

  async getCurrentDynamicId() {
    const id = await this.dynamicIdElement.getAttribute('id');
    return id;
  }

  async regenerateId() {
    await this.regenBtn.click();
  }

  async getDynamicClassName() {
    return await this.dynamicClassElement.getAttribute('class');
  }
}
