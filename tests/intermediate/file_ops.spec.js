import { test, expect } from '../../fixtures/customFixtures.js';
import path from 'path';
import fs from 'fs';

// Save download to the Playwright test output folder (works on CI and locally)
async function saveDownloadToTestOutput(download, testInfo) {
  const fileName = await download.suggestedFilename();
  const finalPath = testInfo.outputPath(fileName);
  await download.saveAs(finalPath);
  return finalPath;
}

test.describe('Intermediate - File Operations', () => {
  test('Upload and download behaviors', async ({ page, homePage, fileOpsPage }, testInfo) => {

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

      const savedFilePath = await saveDownloadToTestOutput(download, testInfo);

      console.log('Saved to:', savedFilePath);

      expect(fs.existsSync(savedFilePath)).toBe(true);
    });
  });
});
