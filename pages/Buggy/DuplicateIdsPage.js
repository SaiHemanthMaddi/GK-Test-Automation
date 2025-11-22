export class DuplicateIdsPage {
  constructor(page) {
    this.page = page;
    this.topDisplay = page.getByText('Multiple elements with the same ID');
    this.downDisplay = page.getByText('IDs should be unique - use data-testid or other selectors');
    this.firstInput = page.getByPlaceholder('First input with duplicate ID');
    this.secondInput = page.getByPlaceholder('Second input with duplicate ID');
  }

  async fillFirstInput(value) {
    await this.firstInput.fill(value);
  }

  async fillSecondInput(value) {
    await this.secondInput.fill(value);
  }

  async getFirstInputValue() {
    return await this.firstInput.inputValue();
  }

  async getSecondInputValue() {
    return await this.secondInput.inputValue();
  }
}
