export class InfiniteScrollPage {
  constructor(page) {
    this.page = page;
    this.container = page.locator('[data-testid="infinite-scroll-container"]');
    this.visibleCounter = page.getByText(/Visible items: /);
  }

  async getVisibleCount() {
    const txt = await this.visibleCounter.innerText();
    return parseInt(txt.match(/\d+/)[0]);
  }

  async scrollInside(times = 5) {
    for (let i = 0; i < times; i++) {
      await this.container.evaluate((el) => {
        el.scrollTop += el.clientHeight * 0.9;
      });
      await this.page.waitForTimeout(500);
    }
  }
}
