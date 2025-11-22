export class ToastPage {
  constructor(page) {
    this.page = page;
  }

  getButton(type) {
    return this.page.getByTestId(`toast-${type}`);
  }

  async triggerToast(type) {
    await this.getButton(type).click();
  }
}
