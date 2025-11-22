export class HiddenElementsPage {
  constructor(page) {
    this.page = page;
    this.displayNone = page.locator('[data-testid="display-none-element"]');
    this.visibilityHidden = page.locator('[data-testid="visibility-hidden-element"]');
    this.opacityHidden = page.locator('[data-testid="opacity-hidden-element"]');
    this.offScreen = page.locator('[data-testid="offscreen-element"]');
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }
}
