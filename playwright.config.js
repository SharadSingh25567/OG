// playwright.config.js
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Where your tests live
  testDir: './tests',

  // Make matching explicit to avoid any glob surprises
  testMatch: ['**/*.spec.js'],
  //reporter: "html",

  // Timeouts
  timeout: 100 * 1000,
  expect: {
    timeout: 50 * 1000,
  },

  // Run test files in parallel
  fullyParallel: true,
  workers: 1,
  reporter:'html',
             

  // Choose default browser & other context options for all projects/runs
  use: {
    browserName: 'firefox',   // or 'firefox' / 'webkit'
    headless: false, 
    colorScheme: 'dark',
    //screenshot: 'only-on-failure',
    //video: 'on',
  
    
    permissions: ['geolocation'],
  geolocation: { latitude: 40.7128, longitude: -74.0060 },
          // set true for CI/headless
    viewport: { width: 1280, height: 720 },
    ...devices['Iphone 15'],
    // baseURL: 'https://your-app.example',
     trace: 'retain-on-failure',
  },

  // (Optional) Define multiple projects (browsers)

};

module.exports = config;