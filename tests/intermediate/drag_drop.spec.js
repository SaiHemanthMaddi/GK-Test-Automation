import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateDragDropPage } from '../../pages/Intermediate/DragDropPage.js';

test.describe('Intermediate - Drag & Drop', () => {
  test('Drag items into drop zone', async ({ page }) => {
    const home = new HomePage(page);
    const drag = new IntermediateDragDropPage(page);

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
    });

    await test.step('Drag Item 1 into drop zone', async () => {
      await drag.dragItemToDrop('drag-item-item-1');
      await expect(drag.dropZone).not.toContainText('Drop items here');
    });
  });
});
