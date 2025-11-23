import { test, expect } from '../../fixtures/customFixtures.js';

test.describe('Advanced - Hidden Elements', () => {
    test('Validate hidden & off-screen elements', async ({ page, homePage, advancedHiddenElementsPage }) => {

        await homePage.open();
        await homePage.clickTab('Advanced');

        await test.step('Validate display:none element', async () => {
            await expect(advancedHiddenElementsPage.displayNone).toBeHidden();
            console.log("display:none validated");
        });

        await test.step('Validate visibility:hidden element', async () => {
            await expect(advancedHiddenElementsPage.visibilityHidden).toBeHidden();
            console.log("visibility:hidden validated");
        });

        await test.step('Validate opacity:0 element', async () => {
            await expect(advancedHiddenElementsPage.opacityHidden).toBeVisible();
            console.log("opacity:0 validated (element exists but is transparent)");
        });

        await test.step('Validate off-screen element', async () => {
            await expect(advancedHiddenElementsPage.offScreen).toBeVisible();
            console.log("off-screen element validated (element rendered outside viewport)");
        });
    });
});
