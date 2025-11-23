import { test, expect } from '../../fixtures/customFixtures.js';
import { HomePage } from '../../pages/HomePage';
import { BrowserInfoPage } from '../../pages/System/BrowserInfoPage';

test('System - Browser info & feature badges', async ({ page, homePage }) => {
  
  const info = new BrowserInfoPage(page);

  await homePage.open();
  await homePage.clickTab('System');

  const ua = await info.getUserAgent();
  expect(ua.toLowerCase()).toContain('mozilla');

  expect(await info.getFeatureText(info.geolocationSupport)).toMatch(/supported/i);
  expect(await info.getFeatureText(info.notificationSupport)).toMatch(/supported/i);
  expect(await info.getFeatureText(info.storageSupport)).toMatch(/supported/i);
  expect(await info.getFeatureText(info.serviceWorkerSupport)).toMatch(/supported/i);

  const screenRes = await info.getScreenResolution();
  expect(screenRes).toContain('×');
  const viewport = await info.getViewportSize();
  expect(viewport).toContain('×');
});
