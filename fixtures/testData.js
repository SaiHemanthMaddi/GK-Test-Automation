/**
 * Centralized Test Data for all test scenarios
 * This file contains reusable test data to avoid hardcoding values in test files
 */

// ==================== USER DATA ====================
export const users = {
  admin: {
    username: 'admin',
    password: 'password',
  },
  validUser: {
    firstName: 'Sai',
    lastName: 'Tester',
    username: 'testuser',
    email: 'sai@test.com',
    password: 'Password123',
  },
};

// Generate random user for registration tests
export const generateRandomUser = () => {
  const random = Math.floor(Math.random() * 99999);
  return {
    firstName: 'Sai',
    lastName: 'Tester',
    username: `user${random}`,
    email: `email${random}@test.com`,
    password: 'Password123',
  };
};

// ==================== FORM DATA ====================
export const formData = {
  contact: {
    name: 'Sai Hemanth',
    email: 'sai@test.com',
    subject: 'Support',
    message: 'This is a test inquiry.',
  },
  textInputs: {
    firstName: 'Sai',
    lastName: 'Maddi',
    email: 'sai@test.com',
    bio: 'Automation tester',
  },
};

// ==================== DROPDOWN DATA ====================
export const dropdowns = {
  countries: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany'],
  frameworks: ['Playwright', 'Selenium', 'Cypress', 'Puppeteer', 'WebdriverIO'],
  subjects: ['Support', 'Sales', 'Feedback', 'General Inquiry'],
};

// ==================== PRODUCT DATA ====================
export const products = {
  totalProducts: 5,
  categories: ['Electronics', 'Clothing', 'Books', 'Home & Garden'],
  priceRanges: {
    low: { min: 0, max: 50 },
    medium: { min: 50, max: 200 },
    high: { min: 200, max: 1000 },
  },
};

// ==================== FILE PATHS ====================
export const files = {
  uploadSample: './utils/sample-upload.txt',
  csvFile: './utils/file.csv',
};

// ==================== TIMEOUT CONSTANTS ====================
// Use these instead of hardcoded page.waitForTimeout() values
export const timeouts = {
  short: 300,        // For quick UI updates
  medium: 1000,      // For moderate delays
  long: 5000,        // For login, API calls
  polling: 10000,    // For realtime updates, polling
  veryLong: 15000,   // For complex operations
};

// ==================== WAIT DURATIONS ====================
// Specific wait times for different scenarios
export const waits = {
  afterLogin: 5000,
  afterRegistration: 600,
  afterFormSubmit: 400,
  afterButtonClick: 500,
  afterStorageOperation: 250,
  afterNotification: 300,
  afterCookieSet: 500,
  afterRetry: 1500,
  afterPolling: 10000,
  afterApiCall: 5000,
  afterScroll: 800,
  afterPageTransition: 1200,
};

// ==================== TEXT VALUES ====================
export const textValues = {
  sampleText: 'This is a test text',
  longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  numbers: '1234567890',
  email: 'test@example.com',
  url: 'https://example.com',
};

// ==================== CHECKBOX/RADIO VALUES ====================
export const checkboxOptions = {
  newsletter: true,
  terms: true,
  notifications: true,
};

export const radioOptions = {
  gender: ['Male', 'Female', 'Other'],
  experience: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
};

// ==================== SLIDER VALUES ====================
export const sliderValues = {
  volume: 50,
  brightness: 75,
  temperature: 22,
  range: { min: 20, max: 80 },
};

// ==================== DATE VALUES ====================
export const dates = {
  today: new Date().toISOString().split('T')[0], // yyyy-mm-dd
  tomorrow: new Date(Date.now() + 86400000).toISOString().split('T')[0],
  yesterday: new Date(Date.now() - 86400000).toISOString().split('T')[0],
  futureDate: '2025-12-31',
  pastDate: '2020-01-01',
};

// ==================== URLS ====================
export const urls = {
  baseUrl: 'https://gauravkhurana.in/test-automation-play/',
  externalLink: 'https://example.com',
};

// ==================== VALIDATION MESSAGES ====================
export const messages = {
  success: {
    login: 'Welcome',
    registration: 'Registration successful',
    formSubmit: 'Form submitted successfully',
    cartEmpty: 'Your cart is empty',
  },
  error: {
    required: 'This field is required',
    invalidEmail: 'Invalid email format',
    passwordMismatch: 'Passwords do not match',
  },
};

// ==================== BROWSER/SYSTEM DATA ====================
export const browserData = {
  languages: ['en-US', 'en-GB', 'es-ES', 'fr-FR'],
  timezones: ['America/New_York', 'Europe/London', 'Asia/Tokyo'],
  geolocation: {
    latitude: 40.7128,
    longitude: -74.0060,
    accuracy: 100,
  },
};

// ==================== STORAGE DATA ====================
export const storageData = {
  localStorage: {
    key: 'testKey',
    value: 'testValue',
  },
  sessionStorage: {
    key: 'sessionKey',
    value: 'sessionValue',
  },
  cookie: {
    name: 'testCookie',
    value: 'cookieValue',
  },
};
