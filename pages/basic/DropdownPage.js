export class BasicDropdownsPage {
  constructor(page) {
    this.page = page;

    this.countrySelect = page.getByTestId('country-select');
    this.searchableSelect = page.getByTestId('searchable-select');

    this.dropdownOption = (value) => page.getByRole('option', { name: value });
  }

  async selectCountry(country) {
    await this.countrySelect.click();
    await this.dropdownOption(country).click();
  }

  async selectFramework(framework) {
    await this.searchableSelect.click();
    await this.dropdownOption(framework).click();
  }
}
