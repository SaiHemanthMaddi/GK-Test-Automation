import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { CanvasPage } from '../../pages/Advanced/CanvasPage';

test.describe('Advanced - Canvas Drawing', () => {
  test('Draw & clear canvas', async ({ page, homePage }) => {
    
    const canvas = new CanvasPage(page);

    await homePage.open();
    await homePage.clickTab('Advanced');

    await test.step('Draw on canvas', async () => {
      await canvas.drawPoints();
      console.log('Canvas drawn');
    });

    await test.step('Clear canvas', async () => {
      await canvas.clearCanvas();
      console.log('Canvas cleared');
    });
  });
});
