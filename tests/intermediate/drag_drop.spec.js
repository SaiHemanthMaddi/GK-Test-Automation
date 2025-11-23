import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { IntermediateDragDropPage } from '../../pages/Intermediate/DragDropPage.js';

test.describe('Intermediate - Drag & Drop', () => {
  test('Drag items into drop zone', async ({ page, homePage }) => {
    
    const drag = new IntermediateDragDropPage(page);

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
    });

    await test.step('Drag Item 1 into drop zone', async () => {
      await drag.dragItemToDrop('drag-item-item-1');
      await expect(drag.dropZone).not.toContainText('Drop items here');
    });
  });
});
