import { expect } from '@playwright/test';

export class outsideViewportPage {
  constructor(page) {
    this.page = page;
    this.scrollContainer = page
      .locator('[data-testid="scroll-to-button"]')
      .locator('..')
      .locator('..');
    this.hiddenButton = page.locator('[data-testid="scroll-to-button"]');
  }

  async scrollToButton() {
    await this.hiddenButton.scrollIntoViewIfNeeded();
  }

  async clickButton() {
    await this.hiddenButton.click();
  }

  async validateButtonVisible() {
    await expect(this.hiddenButton).toBeVisible();
  }
}
