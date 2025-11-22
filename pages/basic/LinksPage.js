export class BasicLinksPage {
  constructor(page) {
    this.page = page;

    this.internal1 = page.getByTestId('internal-link-1');
    this.internal2 = page.getByTestId('internal-link-2');
    this.scrollTop = page.getByTestId('scroll-to-top');

    this.selenium = page.getByTestId('external-link-selenium');
    this.playwright = page.getByTestId('external-link-playwright');
    this.cypress = page.getByTestId('external-link-cypress');

    this.dynamicCountry = page.getByTestId('dynamic-country-link');
    this.dynamicEmail = page.getByTestId('dynamic-email-link');
  }
}
