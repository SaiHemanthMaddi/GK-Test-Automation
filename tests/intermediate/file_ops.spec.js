import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { IntermediateFileOpsPage } from '../../pages/Intermediate/FileOpsPage';
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
  test('Upload and download behaviors', async ({ page, browserName }) => {
    const home = new HomePage(page);
    const ops = new IntermediateFileOpsPage(page);

    await test.step('Open Intermediate tab', async () => {
      await home.open();
      await home.clickTab('Intermediate');
    });

    await test.step('Upload sample file', async () => {
      const filePath = path.resolve(__dirname, '../../utils/sample-upload.txt');
      await ops.uploadFile(filePath);
    });

    await test.step('Trigger download and validate', async () => {
      const { download } = await ops.triggerDownloadAndWait();

      const savedFilePath = await saveDownloadToWindowsDownloads(download);

      console.log('Saved to:', savedFilePath);

      expect(fs.existsSync(savedFilePath)).toBe(true);
    });
  });
});
