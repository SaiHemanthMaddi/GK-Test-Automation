export class PitfallsPage {
  constructor(page) {
    this.page = page;
    this.card = page.locator('div[data-slot="card"]', {
      has: page.locator('[data-slot="card-title"]', { hasText: 'Common Automation Pitfalls' }),
    });
    this.title = this.card.locator('[data-slot="card-title"]');
    this.doListItems = this.card.locator('ul >> nth=1').locator('li');
    this.dontListItems = this.card.locator('ul >> nth=0').locator('li');
  }

  async getContent() {
    await this.card.waitFor({ state: 'visible', timeout: 5000 });
    const title = (await this.title.innerText()).trim();

    const doCount = await this.doListItems.count();
    const doItems = [];
    for (let i = 0; i < doCount; i++) {
      doItems.push((await this.doListItems.nth(i).innerText()).trim());
    }

    const dontCount = await this.dontListItems.count();
    const dontItems = [];
    for (let i = 0; i < dontCount; i++) {
      dontItems.push((await this.dontListItems.nth(i).innerText()).trim());
    }

    return {
      title,
      doItems,
      dontItems,
    };
  }

  async isVisible() {
    return await this.card.isVisible();
  }
}
