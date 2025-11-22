export class HiddenInputPage {
  constructor(page) {
    this.page = page;
    this.input = page.locator('[data-testid="hidden-input"]');
    this.status = page.locator('[data-testid="hidden-status"]');
    this.displayText = page.getByText(
      "Check element visibility before asserting element doesn't exist"
    );
  }

  async typeIntoHiddenInput(text) {
    await this.input.fill(text, { force: true });
  }
}
