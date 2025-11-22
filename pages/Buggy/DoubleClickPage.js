export class DoubleClickPage {
  constructor(page) {
    this.page = page;
    this.button = page.locator('[data-testid="double-click-button"]');
  }

  async btn() {
    return this.button;
  }

  async beforeClickCount() {
    const text = await this.button.innerText();
    // Example: "Click Twice (Count: 2)"
    const match = text.match(/Count:\s*(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  async afterClickCount() {
    const text = await this.button.innerText();
    // Example: "Click Twice (Count: 2)"
    const match = text.match(/Count:\s*(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  async clikTwiceBtn() {
    await this.button.click(); // real double click
  }
}
