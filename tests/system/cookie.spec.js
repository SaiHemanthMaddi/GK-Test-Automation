import { test, expect } from '../../fixtures/customFixtures.js';

test('System - Validate cookies using hardcoded expected values + browser context', async ({
  page,
  homePage,
  cookiePage,
}) => {

  await homePage.open();
  await homePage.clickTab('System');

  // Set cookies
  await cookiePage.setSessionCookie();
  await cookiePage.setPersistentCookie();
  await cookiePage.setSecureCookie();
  await cookiePage.setHttpOnlySimulation();

  await page.waitForTimeout(500);

  // 1️⃣ Hard-coded expected cookie values
  const expectedCookies = cookiePage.getExpectedCookieString();

  // 2️⃣ Browser cookies
  const cookies = await page.context().cookies();
  console.log('Browser Cookies:', cookies);

  // Convert browser cookies → 'name=value' format
  const browserPairs = cookies.map((c) => `${c.name}=${c.value}`);

  console.log('Browser Converted Pairs:', browserPairs);

  // 3️⃣ Validate each expected cookie exists in browser cookies
  for (const expected of expectedCookies) {
    expect(browserPairs).toContain(expected);
  }

  // 4️⃣ Validate required cookies exist
  expect(browserPairs).toContain('secure-cookie=secure-value');
  expect(browserPairs).toContain('httponly-sim=httponly-value');
  expect(browserPairs).toContain('persistent-cookie=persistent-value');
});
