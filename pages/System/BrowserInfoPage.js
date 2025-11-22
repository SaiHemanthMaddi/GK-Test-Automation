export class BrowserInfoPage {
  constructor(page) {
    this.page = page;
    this.userAgent = page.locator('[data-testid="user-agent"]');
    this.geolocationSupport = page.locator('[data-testid="geolocation-support"]');
    this.notificationSupport = page.locator('[data-testid="notification-support"]');
    this.storageSupport = page.locator('[data-testid="storage-support"]');
    this.serviceWorkerSupport = page.locator('[data-testid="serviceworker-support"]');

    this.screenResolution = page.locator('[data-testid="screen-resolution"]');
    this.availableScreen = page.locator('[data-testid="available-screen"]');
    this.viewportSize = page.locator('[data-testid="viewport-size"]');
    this.colorDepth = page.locator('[data-testid="color-depth"]');
  }

  async getUserAgent() {
    return (await this.userAgent.innerText()).trim();
  }

  async getFeatureText(locator) {
    return (await locator.innerText()).trim();
  }

  async getScreenResolution() {
    return (await this.screenResolution.innerText()).trim();
  }
  async getViewportSize() {
    return (await this.viewportSize.innerText()).trim();
  }
  async getAvailableScreen() {
    return (await this.availableScreen.innerText()).trim();
  }
  async getColorDepth() {
    return (await this.colorDepth.innerText()).trim();
  }
}
