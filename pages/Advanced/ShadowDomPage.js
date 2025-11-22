export class ShadowDomPage {
  constructor(page) {
    this.page = page;
    this.createBtn = page.getByTestId('create-shadow-dom');
    this.shadowHost = page.getByTestId('shadow-host');
  }

  async createShadowDom() {
    await this.createBtn.click();

    // Wait for shadow root to attach
    await this.page.waitForFunction(
      (el) => el.shadowRoot !== null,
      await this.shadowHost.elementHandle()
    );
  }

  async getShadowText() {
    const host = await this.shadowHost.elementHandle();

    // Wait until shadow DOM content is ready
    await this.page.waitForFunction(
      (el) => el.shadowRoot && el.shadowRoot.textContent.trim().length > 0,
      host
    );

    // Return text inside shadow root
    return await this.page.evaluate((el) => el.shadowRoot.textContent, host);
  }
}
