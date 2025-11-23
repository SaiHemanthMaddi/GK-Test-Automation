import { test as base } from '@playwright/test';
// HomePage
import { HomePage } from '../pages/HomePage.js';

// Basic Pages
import { BasicButtonsPage } from '../pages/basic/ButtonsPage.js';
import { BasicCheckboxPage } from '../pages/basic/CheckboxPage.js';
import { BasicDropdownsPage } from '../pages/basic/DropdownPage.js';
import { BasicTextInputsPage } from '../pages/basic/TextInputsPage.js';
import { BasicFormActionsPage } from '../pages/basic/FormActionsPage.js';
import { BasicLinksPage } from '../pages/basic/LinksPage.js';
import { BasicPasswordPage } from '../pages/basic/PasswordPage.js';
import { BasicRadioPage } from '../pages/basic/RadioPage.js';

// Business Pages
import { UserAuthPage } from '../pages/Business/UserAuthPage.js';
import { ContactPage } from '../pages/Business/ContactPage.js';
import { BusinessCartPage } from '../pages/Business/CartPage.js';
import { ProductsPage } from '../pages/Business/ProductsPage.js';

// Complex Pages
import { ApiDynamicPage } from '../pages/Complex/ApiDynamicPage.js';
import { DelayedLoadingPage as ComplexDelayedLoadingPage } from '../pages/Complex/DelayedLoadingPage.js';
import { DynamicTablePage } from '../pages/Complex/DynamicTablePage.js';
import { HiddenElementsPage as ComplexHiddenElementsPage } from '../pages/Complex/HiddenElementsPage.js';
import { realtimeUpdatesPage } from '../pages/Complex/RealTimeUpdatesPage.js';
import { RetryLogicPage } from '../pages/Complex/RetryLogicPage.js';

// Advanced Pages
import { CanvasPage } from '../pages/Advanced/CanvasPage.js';
import { ChartsPage } from '../pages/Advanced/ChartsPage.js';
import { DynamicIdsPage as AdvancedDynamicIdsPage } from '../pages/Advanced/DynamicIdsPage.js';
import { HiddenElementsPage as AdvancedHiddenElementsPage } from '../pages/Advanced/HiddenElementsPage.js';
import { InfiniteScrollPage } from '../pages/Advanced/InfiniteScrollPage.js';
import { MultipleWindowsPage } from '../pages/Advanced/MultipleWindowsPage.js';
import { PopupsModalsPage } from '../pages/Advanced/PopupsModalsPage.js';
import { ShadowDomPage } from '../pages/Advanced/ShadowDomPage.js';
import { ToastPage } from '../pages/Advanced/ToastPage.js';
import { iFramesPage } from '../pages/Advanced/iFramesPage.js';

// Intermediate Pages
import { IntermediateAutoSuggestPage } from '../pages/Intermediate/AutoSuggestPage.js';
import { IntermediateCopyPastePage } from '../pages/Intermediate/CopyPastePage.js';
import { DatePickersPage } from '../pages/Intermediate/DatePickersPage.js';
import { DragDropPage } from '../pages/Intermediate/DragDropPage.js';
import { IntermediateFileOpsPage } from '../pages/Intermediate/FileOpsPage.js';
import { MousePage } from '../pages/Intermediate/MousePage.js';
import { ProgressPage } from '../pages/Intermediate/ProgressPage.js';
import { SlidersPage } from '../pages/Intermediate/SlidersPage.js';

// System Pages
import { BrowserInfoPage } from '../pages/System/BrowserInfoPage.js';
import { CookiePage } from '../pages/System/CookiePage.js';
import { GeolocationPage } from '../pages/System/GeolocationPage.js';
import { LanguagePage } from '../pages/System/LanguagePage.js';
import { NotificationsPage } from '../pages/System/NotificationsPage.js';
import { StoragePage } from '../pages/System/StoragePage.js';

// Buggy Pages
import { CaseSensitivityPage } from '../pages/Buggy/CaseSensitivityPage.js';
import { PitfallsPage } from '../pages/Buggy/CommonAutomationPitfallsPage.js';
import { DelayedLoadingPage as BuggyDelayedLoadingPage } from '../pages/Buggy/DelayedLoadingPage.js';
import { DisabledButtonPage } from '../pages/Buggy/DisabledButtonPage.js';
import { DoubleClickPage } from '../pages/Buggy/DoubleClickPage.js';
import { DuplicateIdsPage } from '../pages/Buggy/DuplicateIdsPage.js';
import { DynamicIdsPage as BuggyDynamicIdsPage } from '../pages/Buggy/DynamicIdsPage.js';
import { HiddenInputFieldPage } from '../pages/Buggy/HiddenInputFieldPage.js';
import { outsideViewportPage } from '../pages/Buggy/OutsideViewportPage.js';
import { OverlappingElementsPage } from '../pages/Buggy/OverlappingElementsPage.js';
import { RaceConditionPage } from '../pages/Buggy/RaceConditionPage.js';
import { StaleReferencePage } from '../pages/Buggy/StaleReferencePage.js';
import { WhitespaceTextPage } from '../pages/Buggy/WhitespaceTextPage.js';

// Test Data
import { users } from './testData.js';

/**
 * Custom Playwright fixtures that extend the base test
 * All 56+ page objects are automatically available as fixtures
 */

export const test = base.extend({
    // ==================== CORE ====================
    homePage: async ({ page }, use) => await use(new HomePage(page)),

    // ==================== BASIC ====================
    buttonsPage: async ({ page }, use) => await use(new BasicButtonsPage(page)),
    checkboxPage: async ({ page }, use) => await use(new BasicCheckboxPage(page)),
    dropdownPage: async ({ page }, use) => await use(new BasicDropdownsPage(page)),
    textInputsPage: async ({ page }, use) => await use(new BasicTextInputsPage(page)),
    formActionsPage: async ({ page }, use) => await use(new BasicFormActionsPage(page)),
    linksPage: async ({ page }, use) => await use(new BasicLinksPage(page)),
    passwordPage: async ({ page }, use) => await use(new BasicPasswordPage(page)),
    radioPage: async ({ page }, use) => await use(new BasicRadioPage(page)),

    // ==================== BUSINESS ====================
    userAuthPage: async ({ page }, use) => await use(new UserAuthPage(page)),
    contactPage: async ({ page }, use) => await use(new ContactPage(page)),
    cartPage: async ({ page }, use) => await use(new BusinessCartPage(page)),
    productsPage: async ({ page }, use) => await use(new ProductsPage(page)),

    // ==================== COMPLEX ====================
    apiDynamicPage: async ({ page }, use) => await use(new ApiDynamicPage(page)),
    complexDelayedLoadingPage: async ({ page }, use) => await use(new ComplexDelayedLoadingPage(page)),
    dynamicTablePage: async ({ page }, use) => await use(new DynamicTablePage(page)),
    complexHiddenElementsPage: async ({ page }, use) => await use(new ComplexHiddenElementsPage(page)),
    realtimeUpdatesPage: async ({ page }, use) => await use(new realtimeUpdatesPage(page)),
    retryLogicPage: async ({ page }, use) => await use(new RetryLogicPage(page)),

    // ==================== ADVANCED ====================
    canvasPage: async ({ page }, use) => await use(new CanvasPage(page)),
    chartsPage: async ({ page }, use) => await use(new ChartsPage(page)),
    advancedDynamicIdsPage: async ({ page }, use) => await use(new AdvancedDynamicIdsPage(page)),
    advancedHiddenElementsPage: async ({ page }, use) => await use(new AdvancedHiddenElementsPage(page)),
    infiniteScrollPage: async ({ page }, use) => await use(new InfiniteScrollPage(page)),
    multipleWindowsPage: async ({ page }, use) => await use(new MultipleWindowsPage(page)),
    popupsModalsPage: async ({ page }, use) => await use(new PopupsModalsPage(page)),
    shadowDomPage: async ({ page }, use) => await use(new ShadowDomPage(page)),
    toastPage: async ({ page }, use) => await use(new ToastPage(page)),
    iframesPage: async ({ page }, use) => await use(new iFramesPage(page)),

    // ==================== INTERMEDIATE ====================
    autoSuggestPage: async ({ page }, use) => await use(new IntermediateAutoSuggestPage(page)),
    copyPastePage: async ({ page }, use) => await use(new IntermediateCopyPastePage(page)),
    datePickersPage: async ({ page }, use) => await use(new DatePickersPage(page)),
    dragDropPage: async ({ page }, use) => await use(new DragDropPage(page)),
    fileOpsPage: async ({ page }, use) => await use(new IntermediateFileOpsPage(page)),
    mousePage: async ({ page }, use) => await use(new MousePage(page)),
    progressPage: async ({ page }, use) => await use(new ProgressPage(page)),
    slidersPage: async ({ page }, use) => await use(new SlidersPage(page)),

    // ==================== SYSTEM ====================
    browserInfoPage: async ({ page }, use) => await use(new BrowserInfoPage(page)),
    cookiePage: async ({ page }, use) => await use(new CookiePage(page)),
    geolocationPage: async ({ page }, use) => await use(new GeolocationPage(page)),
    languagePage: async ({ page }, use) => await use(new LanguagePage(page)),
    notificationsPage: async ({ page }, use) => await use(new NotificationsPage(page)),
    storagePage: async ({ page }, use) => await use(new StoragePage(page)),

    // ==================== BUGGY ====================
    caseSensitivityPage: async ({ page }, use) => await use(new CaseSensitivityPage(page)),
    commonPitfallsPage: async ({ page }, use) => await use(new PitfallsPage(page)),
    buggyDelayedLoadingPage: async ({ page }, use) => await use(new BuggyDelayedLoadingPage(page)),
    disabledButtonPage: async ({ page }, use) => await use(new DisabledButtonPage(page)),
    doubleClickPage: async ({ page }, use) => await use(new DoubleClickPage(page)),
    duplicateIdsPage: async ({ page }, use) => await use(new DuplicateIdsPage(page)),
    buggyDynamicIdsPage: async ({ page }, use) => await use(new BuggyDynamicIdsPage(page)),
    hiddenInputFieldPage: async ({ page }, use) => await use(new HiddenInputFieldPage(page)),
    outsideViewportPage: async ({ page }, use) => await use(new outsideViewportPage(page)),
    overlappingElementsPage: async ({ page }, use) => await use(new OverlappingElementsPage(page)),
    raceConditionPage: async ({ page }, use) => await use(new RaceConditionPage(page)),
    staleReferencePage: async ({ page }, use) => await use(new StaleReferencePage(page)),
    whitespaceTextPage: async ({ page }, use) => await use(new WhitespaceTextPage(page)),

    // ==================== SPECIAL FIXTURES ====================
    // Authenticated context fixture - provides a logged-in state
    authenticatedPage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        const authPage = new UserAuthPage(page);

        // Navigate and login
        await homePage.open();
        await homePage.clickTab('Business');
        await authPage.login(users.admin.username, users.admin.password);

        // Wait for login to complete
        await authPage.loginWelcomeMessage.waitFor({ state: 'visible' });

        // Provide the authenticated page to the test
        await use(page);

        // Cleanup: logout after test (optional)
        // await authPage.loginLogoutBtn.click();
    },
});

export { expect } from '@playwright/test';
