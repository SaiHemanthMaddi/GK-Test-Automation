export class IntermediateDragDropPage {
  constructor(page) {
    this.page = page;
    this.items = {
      item1: page.getByTestId('drag-item-item-1'),
      item2: page.getByTestId('drag-item-item-2'),
      item3: page.getByTestId('drag-item-item-3'),
      item4: page.getByTestId('drag-item-item-4'),
    };
    this.dropZone = page.getByTestId('drop-zone');
  }

  // Drag using Playwright dragTo (works with draggable elements)
  async dragItemToDrop(itemTestId) {
    const src = this.page.getByTestId(itemTestId);
    await src.scrollIntoViewIfNeeded();
    await src.dragTo(this.dropZone);
  }

  // alternative generic
  async dragElement(srcLocator, targetLocator) {
    await srcLocator.dragTo(targetLocator);
  }
}
