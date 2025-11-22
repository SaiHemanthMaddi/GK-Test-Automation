export class IntermediateDatePickersPage {
  constructor(page) {
    this.page = page;
    this.dateTrigger = page.getByTestId('date-picker-trigger');
    this.dateInput = page.getByTestId('date-input');
    this.dateTimeInput = page.getByTestId('datetime-input');
  }

  async openDatePicker() {
    await this.dateTrigger.click();
  }

  async setDateInput(value) {
    // value in yyyy-mm-dd
    await this.dateInput.fill(value);
    // blur to trigger any change handlers
    await this.dateInput.press('Tab');
  }

  async setDateTimeInput(value) {
    await this.dateTimeInput.fill(value);
    await this.dateTimeInput.press('Tab');
  }
}
