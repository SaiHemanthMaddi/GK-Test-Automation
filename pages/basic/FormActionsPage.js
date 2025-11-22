export class BasicFormActionsPage {
  constructor(page) {
    this.page = page;

    this.submit = page.getByTestId('submit-form');
    this.reset = page.getByTestId('reset-form');
  }

  async resetForm() {
    await this.reset.click();
  }
}
