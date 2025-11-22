export class IntermediateMousePage {
  constructor(page) {
    this.page = page;
    this.hover1 = page.getByTestId('hover-item-1');
    this.hover2 = page.getByTestId('hover-item-2');
    this.hover3 = page.getByTestId('hover-item-3');
    this.context1 = page.getByTestId('context-item-1');
    this.context2 = page.getByTestId('context-item-2');
  }

  async hoverOn(item) {
    await item.hover();
  }

  async rightClickOn(locator) {
    await locator.click({ button: 'right' });
  }
}
