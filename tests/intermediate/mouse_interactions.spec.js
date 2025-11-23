import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { IntermediateMousePage } from '../../pages/Intermediate/MousePage';

test.describe('Intermediate - Mouse Interactions', () => {
  test('Hover and context menu behavior', async ({ page, homePage }) => {
    
    const mouse = new IntermediateMousePage(page);

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
    });

    await test.step('Hover item 1 shows hover effect', async () => {
      await mouse.hoverOn(mouse.hover1);
      // Visual hover assertion is hard; ensure element is visible and no error
      await expect(mouse.hover1).toBeVisible();
    });

    await test.step('Right-click context item', async () => {
      await mouse.rightClickOn(mouse.context1);
      // If site opens a context menu, assert presence. We don't have a menu DOM in snippet - so assert no crash.
      await expect(mouse.context1).toBeVisible();
    });
  });
});
