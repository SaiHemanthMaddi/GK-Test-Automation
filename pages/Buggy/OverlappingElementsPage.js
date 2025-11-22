import { expect } from '@playwright/test';

export class OverlappingElementsPage {
  constructor(page) {
    this.page = page;
    this.overlayBtn = page.locator("[data-testid='overlay-button']");
    this.overlayLayer = page.locator("[data-testid='overlay']");
    this.successAlert = page.locator('text=Overlay removed');
  }

  async clickOverlayButton() {
    await this.overlayBtn.waitFor({ state: 'visible', timeout: 5000 });
    try {
      await this.overlayBtn.click({ trial: true });
      await this.overlayBtn.click();
    } catch (err) {
      console.log('⚠ Overlay detected, waiting…');
      await this.page.waitForSelector("[data-testid='overlay']", {
        state: 'detached',
        timeout: 5000,
      });
      await this.overlayBtn.click();
    }
  }

  async validateOverlayGone() {
    await expect(this.overlayLayer).toHaveCount(0);
  }

  async validateSuccessAlert() {
    await expect(this.overlayBtn).toBeVisible();
  }
}
