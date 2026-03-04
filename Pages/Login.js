const { expect } = require('@playwright/test');

class Login {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page= page;
    this.pickuptype= page.locator('.r-m9c94c').nth(0);
    this.loginCTA=page.getByText('Log In');
    this.username=page.locator('#signInName');
    this.password=page.locator('#password');
    this.submit=page.locator('#next');


  }

  async goto() {
    await this.page.goto('https://test1-cdn.olivegarden.com/menu');
    // Accept cookies if present
    
      //await this.cookieAccept.waitFor({ state: 'visible', timeout: 1500 });
      await this.cookieAccept.click();
    } 
   

   
async login(){
await this.pickuptype.click();
  await   this.loginCTA.click();
   await  this.username.fill('qweryu@gmail.com');
   await  this.password.fill('Sharad@1234');
  await   this.submit.click();
}
}
module.exports= {Login};