// import { expect } from '@wdio/globals'
import { Given, When, Then } from '@wdio/cucumber-framework';
const LoginPage = require('../../pages/login.page');
const dashboardPage = require('../../pages/dashboardPage');
import { expect } from 'chai'
const users = {
    LOCKED: { username: 'alice@example.com', password: '10203040' },
    NO_MATCH: { username: '1@2.com', password: 'f-o-o' },
    NO_USER_DETAILS: { username: '', password: '' },
    NO_PASSWORD: { username: 'bob@example.com', password: '' },
    STANDARD: { username: 'bob@example.com', password: '10203040' }
};
let isAppInitialized = false;

Given('I am on the login page', async () => {

    if (!isAppInitialized) {
        console.log('Initializing the application...');
        await LoginPage.open();

        isAppInitialized = true; // Ensure it won't run again
    } else {
        console.log('Application is already initialized.');
        await LoginPage.clearUserField();
        await LoginPage.clearPasswordField();
    }


});
When('the user enters the username and password for a {string} user', async (userType: string | number) => {
    const user = users[userType];
    if (!user) {
        throw new Error(`User type "${userType}" is not defined in the users object.`);
    }
    await LoginPage.enterUsername(user.username);
    await LoginPage.enterPassword(user.password);
});

When('clicks on the login button', async () => {
    await LoginPage.clickLogin();
});
Then('the user should be logged in successfully', async () => {
    expect(await dashboardPage.isWelcomeMessageVisible()).to.be.true;
});
Then('an error message should be displayed', async () => {
    expect(await dashboardPage.isErrorMessageVisible()).to.be.true;
});

