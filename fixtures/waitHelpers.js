import { expect } from '@playwright/test';

/**
 * Smart Wait Helpers
 * Use these instead of hardcoded page.waitForTimeout() for more reliable tests
 */

// ==================== ELEMENT STATE WAITS ====================

/**
 * Wait for element to reach a specific state
 * @param {Locator} locator - Playwright locator
 * @param {string} state - 'visible' | 'hidden' | 'attached' | 'detached'
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForElementState(locator, state = 'visible', timeout = 5000) {
    await locator.waitFor({ state, timeout });
}

/**
 * Wait for element to be visible and enabled
 * @param {Locator} locator - Playwright locator
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForElementReady(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await expect(locator).toBeEnabled({ timeout });
}

// ==================== NETWORK WAITS ====================

/**
 * Wait for network to be idle
 * @param {Page} page - Playwright page
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForNetworkIdle(page, timeout = 3000) {
    await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Wait for specific API response
 * @param {Page} page - Playwright page
 * @param {string} urlPattern - URL pattern to wait for
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForApiResponse(page, urlPattern, timeout = 10000) {
    return await page.waitForResponse(
        (response) => response.url().includes(urlPattern) && response.status() === 200,
        { timeout }
    );
}

// ==================== TEXT/CONTENT WAITS ====================

/**
 * Wait for specific text to appear in element
 * @param {Locator} locator - Playwright locator
 * @param {string} text - Text to wait for
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForText(locator, text, timeout = 5000) {
    await expect(locator).toContainText(text, { timeout });
}

/**
 * Wait for element to have specific value
 * @param {Locator} locator - Playwright locator
 * @param {string} value - Value to wait for
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForValue(locator, value, timeout = 5000) {
    await expect(locator).toHaveValue(value, { timeout });
}

// ==================== COUNT/COLLECTION WAITS ====================

/**
 * Wait for specific number of elements
 * @param {Locator} locator - Playwright locator
 * @param {number} count - Expected count
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForCount(locator, count, timeout = 5000) {
    await expect(locator).toHaveCount(count, { timeout });
}

/**
 * Wait for at least minimum number of elements
 * @param {Locator} locator - Playwright locator
 * @param {number} minCount - Minimum expected count
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForMinimumCount(locator, minCount, timeout = 5000) {
    await locator.first().waitFor({ state: 'visible', timeout });
    const count = await locator.count();
    if (count < minCount) {
        throw new Error(`Expected at least ${minCount} elements, but found ${count}`);
    }
}

// ==================== ATTRIBUTE WAITS ====================

/**
 * Wait for element to have specific attribute
 * @param {Locator} locator - Playwright locator
 * @param {string} attribute - Attribute name
 * @param {string} value - Expected value
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForAttribute(locator, attribute, value, timeout = 5000) {
    await expect(locator).toHaveAttribute(attribute, value, { timeout });
}

/**
 * Wait for element to have specific class
 * @param {Locator} locator - Playwright locator
 * @param {string} className - Class name
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForClass(locator, className, timeout = 5000) {
    await expect(locator).toHaveClass(new RegExp(className), { timeout });
}

// ==================== DYNAMIC CONTENT WAITS ====================

/**
 * Wait for element text to change from initial value
 * @param {Locator} locator - Playwright locator
 * @param {string} initialText - Initial text to wait to change from
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForTextChange(locator, initialText, timeout = 5000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        const currentText = await locator.textContent();
        if (currentText !== initialText) {
            return currentText;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error(`Text did not change from "${initialText}" within ${timeout}ms`);
}

/**
 * Wait for element count to change
 * @param {Locator} locator - Playwright locator
 * @param {number} initialCount - Initial count
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForCountChange(locator, initialCount, timeout = 5000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        const currentCount = await locator.count();
        if (currentCount !== initialCount) {
            return currentCount;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error(`Count did not change from ${initialCount} within ${timeout}ms`);
}

// ==================== POLLING WAITS ====================

/**
 * Poll until condition is met
 * @param {Function} condition - Async function that returns boolean
 * @param {number} timeout - Timeout in milliseconds
 * @param {number} interval - Polling interval in milliseconds
 */
export async function waitUntil(condition, timeout = 10000, interval = 500) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        if (await condition()) {
            return true;
        }
        await new Promise((resolve) => setTimeout(resolve, interval));
    }
    throw new Error(`Condition not met within ${timeout}ms`);
}

// ==================== ANIMATION WAITS ====================

/**
 * Wait for CSS animation to complete
 * @param {Locator} locator - Playwright locator
 * @param {number} additionalWait - Additional wait after animation (ms)
 */
export async function waitForAnimation(locator, additionalWait = 300) {
    await locator.waitFor({ state: 'visible' });
    // Wait for animations to settle
    await new Promise((resolve) => setTimeout(resolve, additionalWait));
}

// ==================== SCROLL WAITS ====================

/**
 * Wait after scrolling for content to load
 * @param {Page} page - Playwright page
 * @param {number} waitTime - Wait time in milliseconds
 */
export async function waitAfterScroll(page, waitTime = 500) {
    await page.waitForLoadState('domcontentloaded');
    await new Promise((resolve) => setTimeout(resolve, waitTime));
}

// ==================== CUSTOM TIMEOUTS ====================

/**
 * Smart timeout - only use when absolutely necessary
 * Prefer other wait methods over this
 * @param {number} ms - Milliseconds to wait
 */
export async function smartTimeout(ms) {
    console.warn(`⚠️ Using hardcoded timeout of ${ms}ms - consider using a smarter wait`);
    await new Promise((resolve) => setTimeout(resolve, ms));
}
