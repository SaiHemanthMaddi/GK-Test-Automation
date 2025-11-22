import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { PopupsModalsPage } from '../../pages/Advanced/PopupsModalsPage';

test.describe('Advanced - Popups & Modals', () => {
  test('Handle alert, confirm, prompt & custom modal', async ({ page }) => {
    const home = new HomePage(page);
    const modal = new PopupsModalsPage(page);

    await test.step('Open Advanced tab', async () => {
      await home.open();
      await home.clickTab('Advanced');
    });

    await test.step('Trigger and accept alert', async () => {
      await modal.triggerAlert();
      console.log('Alert accepted');
    });

    await test.step('Trigger confirm - dismiss', async () => {
      await modal.triggerConfirm(false);
      console.log('Confirm dismissed');
    });

    await test.step('Trigger prompt with input', async () => {
      await modal.triggerPrompt('Automation text');
      console.log('Prompt input accepted');
    });

    await test.step('Open custom modal', async () => {
      await modal.openCustomModal();
      console.log('Custom modal opened');
    });
  });
});
