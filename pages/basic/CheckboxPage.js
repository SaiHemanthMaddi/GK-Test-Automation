export class BasicCheckboxPage {
  constructor(page) {
    this.page = page;

    this.newsletter = page.getByTestId('newsletter-checkbox');
    this.terms = page.getByTestId('terms-checkbox');
    this.notifications = page.getByTestId('notifications-switch');
  }

  async toggleNewsletter() {
    await this.newsletter.click();
  }

  async toggleTerms() {
    await this.terms.click();
  }

  async toggleNotifications() {
    await this.notifications.click();
  }
}
