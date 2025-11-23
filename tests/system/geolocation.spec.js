import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { GeolocationPage } from '../../pages/System/GeolocationPage';

test('System - Geolocation (mock & request) - functional', async ({ page, homePage }) => {
  
  const geo = new GeolocationPage(page);

  await homePage.open();
  await homePage.clickTab('System');

  await geo.useMockLocationClick();
  const el = await page.locator('[data-testid="geolocation-support"]').innerText();
  expect(el.toLowerCase()).toContain('supported');

  await geo.requestRealLocationClick();
});
