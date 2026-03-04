const {test, expect} = require('@playwright/test')
const randomdatagenerate=require('../Utility files/randomdatagenerate')

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
await page.getByTestId('prod80389').click();
await page.locator('.r-1kfrs79').filter({hasText: 'Confirm and add to cart'}).click();
await page.locator('.r-1wbh5a2.r-tskmnb').nth(0).click();
await page.getByRole('radio',{name: 'Iced Sweet Tea'}).click();
await page.getByRole('button', {name: 'Add to cart'}).click();
//await page.locator('#Appetizers').click();
//await page.locator('.r-1iusvr4').filter({hasText: 'Stuffed Ziti Fritta'}).getByRole('button',{name: 'ADD'}).click();
//await page.locator('.r-1iusvr4').filter({hasText: 'Spinach-Artichoke Dip'}).getByRole('button',{name: 'ADD'}).click();
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
//await page.locator('.r-1kfrs79').filter({hasText: 'Confirm and add to cart'}).click();
//await page.getByText('Select a future date & time').click();
const cart=await page.locator('.r-1777fci[aria-label=cart]');
await expect(cart).toBeVisible({timeout: 6000});
await cart.click();
const checkout= page.locator('.r-lchren').filter({hasText: 'Checkout'});
await expect(checkout).toBeVisible();
await checkout.click();
//await page.locator('button.btn.btn.col-md-12.save-edited-delivery').click();
await page.locator('svg.r-jwli3a').click();
await page.locator('#complementary_yes').click();
await page.getByPlaceholder('Add any special instructions for this order').fill('Order level special instructions');
await page.locator('#nav-profile-tab').click();
//await page.locator('span.trackContent.nav-link').nth(1).click();
await page.locator('#id1252182617').pressSequentially('4111111111111111');
await page.locator('label[for=id73453039]').fill('1226');
await page.locator('label[for=id67139]').fill('201');
await page.locator('#id-1114379284').fill('Sharad');
await page.locator('label[for=id-540920442]').fill('Singh');
await page.locator('label[for=id-666400783]').fill('98039');





await page.locator('#id1773344315').fill('Lphakha');
await page.locator('#id-337012267').fill('Hillery');
await page.locator('#id67066748').fill('Hillery@darden.com');
await page.locator('#id-919371817').fill('7777777777');
await page.locator('button.btn.trackContent').filter({hasText: 'Place Order' }).click();


await page.waitForTimeout(10000);













});

