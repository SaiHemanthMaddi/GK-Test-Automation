export class DynamicIdsPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[placeholder="Try selecting by ID..."]');
    this.currentIdCode = page.locator('code');
  }

  async open() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async replaceUsername(newName) {
    await this.usernameInput.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.usernameInput.type(newName);
  }

  async getUsernameValue() {
    return await this.usernameInput.inputValue();
  }

  async getCurrentIdText() {
    return (await this.currentIdCode.textContent()).trim();
  }
}
