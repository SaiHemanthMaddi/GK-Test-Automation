export class BasicRadioPage {
  constructor(page) {
    this.page = page;

    this.male = page.getByTestId('radio-male');
    this.female = page.getByTestId('radio-female');
    this.other = page.getByTestId('radio-other');
    this.noAnswer = page.getByTestId('radio-no-answer');
  }

  async selectGender(value) {
    await this.page.getByTestId(`radio-${value}`).click();
  }
}
