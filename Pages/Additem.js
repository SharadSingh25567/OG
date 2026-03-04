const { expect } = require('@playwright/test');

class Additem {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page= page;
   //this.add= page.locator('div').filter({hasText:'NYC - Times Square'}).getByRole('button', {name : 'ORDER NOW'}).nth(0);
    this.addappetizer=page.locator('#Appetizers');
    this.Addeditem=page.locator('.r-1iusvr4').filter({hasText: 'Spinach-Artichoke Dip'}).getByRole('button',{name: 'ADD'});


  }

  async itemadded(){
   await this.addappetizer.click();
   await this.Addeditem.click();

  }

}
module.exports = {Additem};