import { expect } from '@playwright/test';

export class CaseSensitivityPage {
  constructor(page) {
    this.page = page;
    this.buttons = page.locator('[data-action]');
  }

  async getActions() {
    return await this.buttons.evaluateAll((nodes) =>
      nodes.map((n) => n.getAttribute('data-action').trim().toLowerCase())
    );
  }

  async validateActions(expected) {
    const actual = await this.getActions();
    expected = expected.map((x) => x.toLowerCase()).sort();
    const sortedActual = actual.sort();
    expect(sortedActual).toEqual(expected);
  }
}
