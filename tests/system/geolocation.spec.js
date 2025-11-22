import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { GeolocationPage } from '../../pages/System/GeolocationPage';

test('System - Geolocation (mock & request) - functional', async ({ page }) => {
  const home = new HomePage(page);
  const geo = new GeolocationPage(page);

  await home.open();
  await home.clickTab('System');

  await geo.useMockLocationClick();
  const el = await page.locator('[data-testid="geolocation-support"]').innerText();
  expect(el.toLowerCase()).toContain('supported');

  await geo.requestRealLocationClick();
});
