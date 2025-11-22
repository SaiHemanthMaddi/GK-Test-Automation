export class CanvasPage {
  constructor(page) {
    this.page = page;
    this.canvas = page.locator('[data-testid="drawing-canvas"]');
    this.clearBtn = page.locator('[data-testid="clear-canvas"]');
  }

  async drawPoints() {
    const box = await this.canvas.boundingBox();
    await this.page.mouse.move(box.x + 20, box.y + 20);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + 100, box.y + 50);
    await this.page.mouse.up();
  }

  async clearCanvas() {
    await this.clearBtn.click();
  }
}
