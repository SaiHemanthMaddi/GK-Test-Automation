export class IntermediateFileOpsPage {
  constructor(page) {
    this.page = page;
    this.fileInput = page.getByTestId('file-input');
    this.uploadButton = page.getByTestId('upload-button');
    this.downloadButton = page.getByTestId('download-button');
  }

  // Upload via setInputFiles
  async uploadFile(pathToFile) {
    // reveal hidden input then set files (it's hidden in UI)
    await this.page.setInputFiles('[data-testid="file-input"]', pathToFile);
  }

  async triggerUploadButton() {
    await this.uploadButton.click();
  }

  async triggerDownloadAndWait() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadButton.click();
    const download = await downloadPromise;
    const path = await download.path();
    return { download, path };
  }
}
