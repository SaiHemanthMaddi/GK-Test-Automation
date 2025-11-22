export class IFramesPage {
  constructor(page) {
    this.page = page;
    this.singleIframe = page.frameLocator('[data-testid="single-iframe"]');
    this.nestedIframeOuter = page.frameLocator('[data-testid="nested-iframe"]');
  }

  async clickButtonInsideSingleIframe() {
    await this.singleIframe.locator('#iframe-button').click();
  }

  async getSingleIframeText() {
    return await this.singleIframe.locator('p').innerText();
  }

  async getNestedIframeText() {
    const inner = this.nestedIframeOuter.frameLocator('iframe');
    return await inner.locator('p').innerText();
  }
}
