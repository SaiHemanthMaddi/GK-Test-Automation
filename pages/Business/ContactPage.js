export class ContactPage {
  constructor(page) {
    this.page = page;

    this.name = page.locator('[data-testid="contact-name"]');
    this.email = page.locator('[data-testid="contact-email"]');
    this.subject = page.locator('[data-testid="contact-subject"]');
    this.message = page.locator('[data-testid="contact-message"]');
    this.submitBtn = page.locator('[data-testid="submit-contact"]');
  }

  async submitForm(data) {
    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.subject.click();
    await this.page.getByRole('option', { name: data.subject }).click();
    await this.message.fill(data.message);
    await this.submitBtn.click();
  }
}
