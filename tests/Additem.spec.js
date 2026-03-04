const {test, expect} = require('@playwright/test')


test.describe.configure({mode:'serial'});

test( 'Practice test', async({page, browser})=>
{
await page.goto(" https://test1-cdn.olivegarden.com/menu");
await page.locator('#onetrust-accept-btn-handler').click();
await page.on('dialog' , dialog=> dialog.accept());
await page.getByRole('search').pressSequentially('nyc');
await page.getByRole('search').press('Enter');
//await page.waitForLoadState('networkidle');

await page.locator('div').filter({hasText:'NYC - Times Square'}).getByRole('button', {name : 'ORDER NOW'}).nth(0).click();
await page.locator('.r-m9c94c').nth(0).click();
await page.locator('#Appetizers').click();
//await page.locator('.r-1iusvr4').filter({hasText: 'Stuffed Ziti Fritta'}).getByRole('button',{name: 'ADD'}).click();
await page.locator('.r-1iusvr4').filter({hasText: 'Spinach-Artichoke Dip'}).getByRole('button',{name: 'ADD'}).click();
//await page.locator('div[role=tab]').nth(1).click();
//await page.locator('#reactDatePicker-menu').click();
//const date= '20';
//const alldates=await page.locator('.react-datepicker__day ').all();
//for(const dt of alldates)
//{

  //  const datetext=await dt.innerText();
   // if (datetext===date)
    //{
      //    await dt.click();
        //  break;
    //}
//}    


//await page.getByLabel('Select Time').selectOption('2:10 PM');
await page.locator('.r-1kfrs79').filter({hasText: 'Confirm and add to cart'}).click();
//await page.getByText('Select a future date & time').click();
const cart=await page.locator('.r-1777fci[aria-label=cart]');
await expect(cart).toBeVisible({timeout: 6000});
await cart.click();
await page.waitForTimeout(5000);

});