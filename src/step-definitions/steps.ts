import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pages/login.page';
import elementUtil from './utils/elementUtil';


Given(/^I click element (text|button) "(.+)"$/, async(
    type: 'text'|'button',
    element: any,
) => {
    await elementUtil.clickElement(element)
})
Given(/^I am on the page$/, async () => {
    await browser.url('https://katalon-demo-cura.herokuapp.com/profile.php#login')
});

When(/^I login (valid|invalid) curahealth$/, async (
    method: 'valid'|'invalid',
) => {
    if(method === 'valid') {
        await loginPage.login()
    } else {
        await loginPage.invalidLogin()
    }
});

When(/^I verify element (text|button) "(.+)" is (exist|not exist)$/, async(
    type: 'text'|'button',
    selector: any,
    method: 'exist'|'not exist',

) => {
    await elementUtil.verifyElement(type, selector, method)
})

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });

