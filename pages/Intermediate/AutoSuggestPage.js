export class IntermediateAutoSuggestPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByTestId('autocomplete-input');
  }

  async typeAndSelect(text, optionName) {
    // type text
    await this.input.fill(text);

    // wait for suggestions to appear
    await this.page.waitForTimeout(500);

    // select via visible text
    const option = this.page.getByText(optionName, { exact: true });

    // wait for option to be visible
    await option.waitFor({ state: 'visible' });

    // click option
    await option.click();
  }
}
