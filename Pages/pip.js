// CommonJS: Pages/location.js
const { expect } = require('@playwright/test');

class pip {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Cookie banner may be optional
    this.cookieAccept = page.locator('#onetrust-accept-btn-handler');

    // Prefer a real input: searchbox or placeholder (adjust if needed)
    this.searchInput = page.getByRole('search');

    // Example result for “NYC - Times Square” (adjust to your UI)
    this.resultNYC = page.locator('div').filter({hasText:'NYC - Times Square'}).getByRole('button', {name : 'ORDER NOW'}).nth(0);
  }

  async goto() {
    await this.page.goto('https://test1-cdn.olivegarden.com/menu');
    // Accept cookies if present
    
      //await this.cookieAccept.waitFor({ state: 'visible', timeout: 1500 });
      await this.cookieAccept.click();
    } 
  

  async locationSearch() {
    // Ensure input is actionable
    //await expect(this.searchInput).toBeVisible({ timeout: 10_000 });

    await this.searchInput.click();
    await this.searchInput.fill('nyc');
    await this.searchInput.press('Enter');

    // Wait for suggestion OR submit with Enter
    try {
      await this.resultNYC.waitFor({ state: 'visible', timeout: 3000 });
    } catch {
      await this.searchInput.press('Enter');
    }

    if (await this.resultNYC.isVisible()) {
      await this.resultNYC.click();
    }

    // Wait for the page state you expect after search
   // await this.page.waitForLoadState('networkidle').catch(() => {});
  }
}

module.exports = pip; // <-- default export (no braces)