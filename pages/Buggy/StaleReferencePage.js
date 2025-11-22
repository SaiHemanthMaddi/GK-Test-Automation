import { expect } from '@playwright/test';

export class BuggyStaleElementPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByTestId('detached-input');
    this.submitBtn = page.getByTestId('detach-submit');
  }

  async typeInField(text) {
    await this.input.fill(text);
  }

  async submitAndHandleDetachment() {
    await this.submitBtn.click();
    await expect(this.input).toBeHidden();
  }
}
