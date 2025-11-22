export class HomePage {
  constructor(page) {
    this.page = page;

    // Stable locators based on visible text (Radix friendly)
    this.tab = (name) => this.page.getByRole('tab', { name });
  }

  async open() {
    await this.page.goto('https://gauravkhurana.in/test-automation-play/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async clickTab(name) {
    const tab = this.tab(name);

    // Ensure tab exists
    await tab.waitFor({ state: 'visible' });

    // Click it
    await tab.click();

    // Ensure tab is selected
    await this.page.getByRole('tabpanel').waitFor({ state: 'visible' });
  }
}
