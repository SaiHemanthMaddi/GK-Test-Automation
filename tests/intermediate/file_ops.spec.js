import { test, expect } from '../../fixtures/customFixtures.js';
import path from 'path';
import fs from 'fs';

// ⭐ Save download to real Windows Downloads folder
async function saveDownloadToWindowsDownloads(download) {
  const home = process.env.USERPROFILE; // C:\Users\Admin
  const downloadsFolder = path.join(home, 'Downloads');

  if (!fs.existsSync(downloadsFolder)) {
    fs.mkdirSync(downloadsFolder, { recursive: true });
  }

  const finalPath = path.join(downloadsFolder, await download.suggestedFilename());
  await download.saveAs(finalPath);
  return finalPath;
}

test.describe('Intermediate - File Operations', () => {
  test('Upload and download behaviors', async ({ page, homePage, fileOpsPage, browserName }) => {

    await test.step('Open Intermediate tab', async () => {
      await homePage.open();
      await homePage.clickTab('Intermediate');
    });

    await test.step('Upload sample file', async () => {
      const filePath = path.resolve(__dirname, '../../utils/sample-upload.txt');
      await fileOpsPage.uploadFile(filePath);
    });

    await test.step('Trigger download and validate', async () => {
      const { download } = await fileOpsPage.triggerDownloadAndWait();

      const savedFilePath = await saveDownloadToWindowsDownloads(download);

      console.log('Saved to:', savedFilePath);

      expect(fs.existsSync(savedFilePath)).toBe(true);
    });
  });
});
