const {test} = require('@playwright/test');
const pip=require('../Pages/pip');


test( 'Practice test', async({page, browser})=>
{
const Location= new pip(page);
await Location.goto();
//await Location.cookieAccept;
await Location.locationSearch('nyc');


await page.locator('.r-m9c94c').nth(0).click();
await page.getByText('Log In').click();
await page.locator('#signInName').fill('qweryu@gmail.com');
await page.locator('#password').fill('Sharad@1234');
await page.locator('#next').click();
//await page.context().storageState({path: 'auth.json'});
await page.waitForTimeout(4000);
 




});