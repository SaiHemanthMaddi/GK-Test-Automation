export class DisabledButtonPage {
  constructor(page) {
    this.page = page;
    this.topDisplay = page.getByText('Button appears clickable but is disabled');
    this.downDisplay = page.getByText('Always check if elements are enabled before clicking');
    this.disabledButton = page.locator("//button[@data-testid='disabled-button']");
  }

  async verifyButtonIsDisabled() {
    const disabled = await this.disabledButton.isDisabled();
    return disabled;
  }
}
