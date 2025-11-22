export class GeolocationPage {
  constructor(page) {
    this.page = page;
    this.requestRealLocation = page.locator('[data-testid="request-location"]');
    this.useMockLocation = page.locator('[data-testid="mock-location"]');
  }

  async safeClick(locator, opts = {}) {
    await this.page
      .waitForFunction(
        () => {
          const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
          return el && el !== document.documentElement;
        },
        { timeout: 5000 }
      )
      .catch(() => null);
    await locator.scrollIntoViewIfNeeded();
    await locator.click({ ...opts, timeout: opts.timeout ?? 5000 });
  }

  async requestRealLocationClick() {
    await this.safeClick(this.requestRealLocation);
  }

  async useMockLocationClick() {
    await this.safeClick(this.useMockLocation);
  }
}
