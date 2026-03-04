const {test} = require('@playwright/test')
const {Login}= require('../Pages/Login');
const pip=require('../Pages/pip');
const {Additem}=require('../Pages/Additem');
const randomDataGenerator=require('../Utility files/randomdatagenerate');


test( 'Practice test', async({page, browser})=>
{
const Option=new pip(page);
await Option.goto();
await Option.locationSearch('nyc');
const quite=new Login(page);
await quite.login();
const add=new Additem(page);
await add.itemadded();
await page.waitForTimeout(6000);
});