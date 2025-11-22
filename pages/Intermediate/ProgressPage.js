export class IntermediateProgressPage {
  constructor(page) {
    this.page = page;
    this.linear = page.getByTestId('linear-progress');
    this.dynamic = page.getByTestId('dynamic-progress');
    this.loadingButton = page.getByTestId('loading-button');
  }
}
