export class BasicTextInputsPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.getByTestId('first-name-input');
    this.lastName = page.getByTestId('last-name-input');
    this.email = page.getByTestId('email-input');
    this.bio = page.getByTestId('bio-textarea');
  }

  async fillAllFields(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.bio.fill(data.bio);
  }

  async fillEmailField(data) {
    await this.email.fill(data.email);
  }
}
