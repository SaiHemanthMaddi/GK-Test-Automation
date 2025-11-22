import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateSlidersPage } from '../../pages/Intermediate/SlidersPage';

test.describe('Intermediate - Sliders', () => {
  test('Adjust sliders and validate display', async ({ page }) => {
    const home = new HomePage(page);
    const sliders = new IntermediateSlidersPage(page);

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
    });

    await test.step('Set percentage slider to 70 via JS', async () => {
      await sliders.setSliderValueViaJS('percentage-slider', 70);
      await expect(sliders.sliderDisplay).toContainText('70%');
    });

    await test.step('Set range slider bounds and validate', async () => {
      await sliders.setSliderValueViaJS('range-slider', 60);
      await expect(sliders.sliderDisplay).toContainText('60%');
    });
  });
});
