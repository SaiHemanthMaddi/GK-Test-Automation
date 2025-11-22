export class LanguagePage {
  constructor(page) {
    this.page = page;

    this.languageDropdown = page.locator('[data-testid="language-select"]');
    this.greetingText = page.locator('[data-testid="translated-greeting"]');
    this.currentLanguage = page.locator('[data-testid="current-language"]');
  }

  async selectLanguage(lang) {
    await this.languageDropdown.click();
    await this.page.waitForTimeout(150);

    await this.page.getByRole('option', { name: lang, exact: true }).click();
    await this.page.waitForTimeout(250);
  }
}
