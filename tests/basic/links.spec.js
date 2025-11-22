import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { BasicLinksPage } from '../../pages/basic/LinksPage.js';
import { BasicTextInputsPage } from '../../pages/basic/TextInputsPage.js';
import { BasicDropdownsPage } from '../../pages/basic/DropdownPage.js';

async function verifyExternalLink(page, element, expectedUrlPart) {
  const popupPromise = page.waitForEvent('popup');
  await element.click();
  const popup = await popupPromise;

  await popup.waitForLoadState('domcontentloaded');
  await expect(popup).toHaveURL(new RegExp(expectedUrlPart));

  await popup.close();
}

test.describe('@basic Links', () => {
  test('Validate internal & external links', async ({ page }) => {
    const home = new HomePage(page);
    const link = new BasicLinksPage(page);
    const dropdown = new BasicDropdownsPage(page);
    const inputs = new BasicTextInputsPage(page);

    await test.step('Open Basic tab', async () => {
      await home.open();
      await home.clickTab('Basic');
    });

    await test.step('Click internal link: Go to Basic Elements', async () => {
      await link.internal1.click();
      await expect(page).toHaveURL(/#basic-elements/);
    });

    await test.step('Click internal link: Jump to Advanced Features', async () => {
      await link.internal2.click();
      await expect(page).toHaveURL(/#advanced-features/);
    });

    await test.step('Scroll down and click Scroll To Top', async () => {
      await page.evaluate(() => {
        const el = document.querySelector('[data-slot="tabs-content"]');
        el.scrollTo(0, el.scrollHeight);
      });

      await page.waitForTimeout(800);

      await link.scrollTop.click();

      await page.waitForTimeout(1200);

      const scrollTop = await page.evaluate(() => {
        const el = document.querySelector('[data-slot="tabs-content"]');
        return el.scrollTop;
      });

      expect(scrollTop).toBeLessThanOrEqual(5);
    });

    await verifyExternalLink(page, link.selenium, 'selenium.dev');
    await verifyExternalLink(page, link.playwright, 'playwright.dev');
    await verifyExternalLink(page, link.cypress, 'cypress.io');

    await test.step('Fill Email text field', async () => {
      await inputs.fillEmailField({
        email: 'sai@test.com',
      });
    });

    await test.step('Select dropdown', async () => {
      await dropdown.selectCountry('India');
    });

    await test.step('Validate link visibility', async () => {
      await expect(link.internal1).toBeVisible();
      await expect(link.selenium).toBeVisible();
      await expect(link.dynamicCountry).toHaveText('IN Info');
      await expect(link.dynamicEmail).toHaveText('Email sai@test.com');
    });
  });
});
