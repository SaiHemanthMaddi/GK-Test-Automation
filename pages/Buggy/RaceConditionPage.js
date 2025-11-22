import { expect } from '@playwright/test';

export class RaceConditionPage {
  constructor(page) {
    this.page = page;
    this.raceButton = page.locator("[data-testid='disappearing-button']");
    this.infoText = page.locator('text=Text changes quickly - automation needs proper waits');
  }

  async clickRaceButton() {
    await this.page.waitForFunction(() => {
      const btn = document.querySelector("[data-testid='disappearing-button']");
      return btn && btn.innerText.trim().length > 0;
    });

    await this.raceButton.click();
  }

  async validateRaceConditionInfo() {
    await expect(this.infoText).toBeVisible();
  }
}
