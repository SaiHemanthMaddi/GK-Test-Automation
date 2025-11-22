export class BasicButtonsPage {
  constructor(page) {
    this.page = page;

    this.enabled = page.getByTestId('enabled-button');
    this.secondary = page.getByTestId('secondary-button');
    this.outline = page.getByTestId('outline-button');
    this.destructive = page.getByTestId('destructive-button');
    this.disabled = page.getByTestId('disabled-button');
    this.dynamic = page.getByTestId('dynamic-button');
  }
}
