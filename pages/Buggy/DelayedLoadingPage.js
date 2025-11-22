import { expect } from '@playwright/test';

export class DelayedLoadingPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.delayedElement = page.locator("[data-testid='delayed-element']");
    this.infoText = page.locator('text=Wait for element visibility before interacting');
  }

  async waitForDelayedElement() {
    // Element appears after 3 seconds — wait smartly
    await this.delayedElement.waitFor({ state: 'visible', timeout: 5000 });
  }

  async validateDelayedElementLoaded() {
    await expect(this.delayedElement).toBeVisible();
  }

  async validateInfoText() {
    await expect(this.infoText).toBeVisible();
  }
}
