export class MultipleWindowsPage {
  constructor(page) {
    this.page = page;
    this.newWindow = page.locator('[data-testid="open-new-window"]');
    this.newTab = page.locator('[data-testid="open-new-tab"]');
    this.tabWithInput = page.locator('[data-testid="open-tab-with-input"]');
    this.placeHolder = page.locator('#tab-input'); // cleaner selector
  }

  async openNewWindow() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.newWindow.click();
    return await popupPromise;
  }

  async openNewTab() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.newTab.click();
    return await popupPromise;
  }

  async openTabWithInput(inputText) {
    const popupPromise = this.page.waitForEvent('popup');
    await this.tabWithInput.click();
    const popup = await popupPromise;
    await popup.waitForLoadState('domcontentloaded');
    const popupInput = popup.locator('#tab-input');
    await popupInput.waitFor({ state: 'visible' });
    await popupInput.fill(inputText);
    return popup;
  }
}
