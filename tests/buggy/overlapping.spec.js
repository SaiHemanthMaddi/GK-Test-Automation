import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { OverlappingElementsPage } from '../../pages/Buggy/OverlappingElementsPage';

test.describe('Buggy Feature - Overlapping Elements', () => {
  test('Handle overlay blocking element click', async ({ page }) => {
    const home = new HomePage(page);
    const overlay = new OverlappingElementsPage(page);

    await home.open();
    await home.clickTab('Buggy');

    await overlay.clickOverlayButton();
    await overlay.validateOverlayGone();
    await overlay.validateSuccessAlert();

    console.log('✔ Overlapping Element scenario handled successfully');
  });
});
