const {test} = require('@playwright/test')


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
await page.getByText('Log In').click();
await page.locator('#signInName').fill('qweryu@gmail.com');
await page.locator('#password').fill('Sharad@1234');
await page.locator('#next').click();
//await page.context().storageState({path: 'auth.json'});
await page.waitForTimeout(4000);
 




});