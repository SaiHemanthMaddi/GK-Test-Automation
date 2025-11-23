# Fixtures Documentation

This directory contains reusable fixtures and test utilities for the Playwright test suite.

## 📁 Files Overview

### `testData.js`
Centralized test data repository containing:
- **User credentials** (`users.admin`, `users.validUser`)
- **Random user generator** (`generateRandomUser()`)
- **Form data** (contact forms, text inputs)
- **Product data** and test values
- **URLs** and configuration

### `customFixtures.js`
Custom Playwright fixtures that extend the base test with:
- **Page Object fixtures** - Auto-instantiated POMs (homePage, userAuthPage, contactPage, etc.)
- **Authenticated context** - Pre-logged-in browser state
- **Reusable test utilities**

### `globalSetup.js`
Global setup script that runs once before all tests:
- Clears `allure-results` directory
- Clears `allure-report` directory
- Ensures clean test reporting

---

## 🚀 Usage Examples

### Using Test Data

```javascript
import { users, formData, generateRandomUser } from '../fixtures/testData.js';

// Use predefined admin credentials
await authPage.login(users.admin.username, users.admin.password);

// Use form data
await contactPage.submitForm(formData.contact);

// Generate random user for registration
const newUser = generateRandomUser();
await authPage.register(newUser);
```

### Using Custom Fixtures

```javascript
import { test, expect } from '../fixtures/customFixtures.js';

test('Example with auto-instantiated page objects', async ({ homePage, userAuthPage }) => {
  // No need to create new instances - they're already available!
  await homePage.open();
  await homePage.clickTab('Business');
  await userAuthPage.login(users.admin.username, users.admin.password);
});
```

### Using Authenticated Context

```javascript
import { test, expect } from '../fixtures/customFixtures.js';
import { users } from '../fixtures/testData.js';

test('Test with pre-authenticated user', async ({ authenticatedPage, cartPage }) => {
  // User is already logged in - start testing immediately!
  const cartText = await cartPage.isCartEmpty();
  expect(cartText).toContain('Your cart is empty');
});
```

---

## ✅ Benefits

1. **No hardcoded data** - All test data centralized in one place
2. **Less boilerplate** - Page objects auto-instantiated via fixtures
3. **Reusable auth** - Skip login steps with `authenticatedPage` fixture
4. **Clean reports** - Global setup clears old Allure data
5. **Easy maintenance** - Update credentials/data in one location

---

## 🔧 Adding New Fixtures

To add a new page object fixture:

1. Import the page class in `customFixtures.js`
2. Add a new fixture:
```javascript
myNewPage: async ({ page }, use) => {
  const myNewPage = new MyNewPage(page);
  await use(myNewPage);
},
```

3. Use in tests:
```javascript
test('My test', async ({ myNewPage }) => {
  // Use myNewPage directly
});
```
