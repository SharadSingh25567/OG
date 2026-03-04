const {test} = require('@playwright/test')
const {Login}= require('../Pages/Login');
const pip=require('../Pages/pip');


test( 'Practice test', async({page, browser})=>
{
    const Option=new pip(page);
await Option.goto();
await Option.locationSearch('nyc');
const quite=new Login(page);
await quite.login();
await page.waitForTimeout(10000);


});