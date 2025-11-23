import { test, expect } from '../../fixtures/customFixtures.js';
import { waits, dropdowns, formData } from '../../fixtures/testData.js';

async function verifyExternalLink(page, element, expectedUrlPart) {
  const popupPromise = page.waitForEvent('popup');
  await element.click();
  const popup = await popupPromise;

  await popup.waitForLoadState('domcontentloaded');
  await expect(popup).toHaveURL(new RegExp(expectedUrlPart));

  await popup.close();
}

test.describe('@basic Links', () => {
  test('Validate internal & external links', async ({ page, homePage, linksPage, dropdownPage, textInputsPage }) => {

    await test.step('Open Basic tab', async () => {
      await homePage.open();
      await homePage.clickTab('Basic');
    });

    await test.step('Click internal link: Go to Basic Elements', async () => {
      await linksPage.internal1.click();
      await expect(page).toHaveURL(/#basic-elements/);
    });

    await test.step('Click internal link: Jump to Advanced Features', async () => {
      await linksPage.internal2.click();
      await expect(page).toHaveURL(/#advanced-features/);
    });

    await test.step('Scroll down and click Scroll To Top', async () => {
      await page.evaluate(() => {
        const el = document.querySelector('[data-slot="tabs-content"]');
        el.scrollTo(0, el.scrollHeight);
      });

      await page.waitForTimeout(waits.afterScroll);

      await linksPage.scrollTop.click();

      await page.waitForTimeout(waits.afterPageTransition);

      const scrollTop = await page.evaluate(() => {
        const el = document.querySelector('[data-slot="tabs-content"]');
        return el.scrollTop;
      });

      expect(scrollTop).toBeLessThanOrEqual(5);
    });

    await verifyExternalLink(page, linksPage.selenium, 'selenium.dev');
    await verifyExternalLink(page, linksPage.playwright, 'playwright.dev');
    await verifyExternalLink(page, linksPage.cypress, 'cypress.io');

    await test.step('Fill Email text field', async () => {
      await textInputsPage.fillEmailField({
        email: formData.textInputs.email,
      });
    });

    await test.step('Select dropdown', async () => {
      await dropdownPage.selectCountry(dropdowns.countries[0]);
    });

    await test.step('Validate link visibility', async () => {
      await expect(linksPage.internal1).toBeVisible();
      await expect(linksPage.selenium).toBeVisible();
      await expect(linksPage.dynamicCountry).toHaveText('IN Info');
      await expect(linksPage.dynamicEmail).toHaveText(`Email ${formData.textInputs.email}`);
    });
  });
});
