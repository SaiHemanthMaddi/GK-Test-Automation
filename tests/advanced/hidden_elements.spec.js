import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { HiddenElementsPage } from '../../pages/Advanced/HiddenElementsPage';

test.describe('Advanced - Hidden Elements', () => {
    test('Validate hidden & off-screen elements', async ({ page }) => {
        const home = new HomePage(page);
        const hidden = new HiddenElementsPage(page);

        await home.open();
        await home.clickTab('Advanced');

        await test.step('Validate display:none element', async () => {
            await expect(hidden).toBeHidden(, );
            console.log("display:none validated");
        });

        await test.step('Validate visibility:hidden element', async () => {
            await expect(hidden).toBeHidden(, );
            console.log("visibility:hidden validated");
        });

        await test.step('Validate opacity:0 element', async () => {
            await expect(hidden).toBeVisible(, );
            console.log("opacity:0 validated (element exists but is transparent)");
        });

        await test.step('Validate off-screen element', async () => {
            await expect(hidden).toBeVisible(, );
            console.log("off-screen element validated (element rendered outside viewport)");
        });
    });
});
