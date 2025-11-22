import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ElementOutsideViewportPage } from '../../pages/Buggy/OutsideViewportPage';

test('Buggy - Element outside viewport should be scrolled into view', async ({ page }) => {
  const home = new HomePage(page);
  const view = new ElementOutsideViewportPage(page);

  await home.open();
  await home.clickTab('Buggy');

  await view.scrollToButton();
  await view.validateButtonVisible();

  await view.clickButton();
});
