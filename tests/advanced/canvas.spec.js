import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CanvasPage } from '../../pages/Advanced/CanvasPage';

test.describe('Advanced - Canvas Drawing', () => {
  test('Draw & clear canvas', async ({ page }) => {
    const home = new HomePage(page);
    const canvas = new CanvasPage(page);

    await home.open();
    await home.clickTab('Advanced');

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
