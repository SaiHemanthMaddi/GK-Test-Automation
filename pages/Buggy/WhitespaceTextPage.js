import { expect } from '@playwright/test';

export class WhitespaceTextPage {
  constructor(page) {
    this.page = page;
    this.whitespaceText = page.locator('[data-testid="whitespace-text"]');
  }

  async getNormalizedText() {
    const raw = await this.whitespaceText.innerText();
    return raw.trim().replace(/\s+/g, ' ');
  }

  async validateNormalized(expected) {
    const actual = await this.getNormalizedText();
    expect(actual).toBe(expected);
  }
}
