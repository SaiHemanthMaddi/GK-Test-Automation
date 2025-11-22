export class IntermediateSlidersPage {
  constructor(page) {
    this.page = page;
    this.percentageSlider = page.getByTestId('percentage-slider');
    this.volumeSlider = page.getByTestId('volume-slider');
    this.rangeSlider = page.getByTestId('range-slider');
    this.sliderDisplay = page.getByTestId('slider-display');
  }

  async setSliderValueByKeyboard(sliderContainer, value) {
    const thumb = sliderContainer.locator('[role="slider"]');
    await thumb.focus();
    const steps = Math.round(value / 5);
    for (let i = 0; i < steps; i++) {
      await thumb.press('ArrowRight');
    }
  }

  async setSliderValueViaJS(testId, value) {
    await this.page.evaluate(
      ({ testId, v }) => {
        const wrapper = document.querySelector(`[data-testid="${testId}"]`);
        if (!wrapper) return;
        const range = wrapper.querySelector('[data-slot="slider-range"]');
        if (range) {
          range.style.left = '0%';
          range.style.right = `${100 - v}%`;
        }
        const thumb = wrapper.querySelector('[role="slider"]');
        if (thumb) thumb.setAttribute('aria-valuenow', String(v));
        const display = document.querySelector('[data-testid="slider-display"]');
        if (display) display.textContent = `Current value: ${v}%`;
      },
      { testId, v: value }
    );
  }
}
