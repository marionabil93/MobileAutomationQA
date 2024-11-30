// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page'

const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboardPage');
import { expect } from 'chai'
const users = {
    STANDARD: { username: 'bob@example.com', password: '10203040' },
    LOCKED: { username: 'alice@example.com', password: '10203040' },
    NO_MATCH: { username: '1@2.com', password: 'f-o-o' },
    NO_USER_DETAILS: { username: '', password: '' },
    NO_PASSWORD: { username: 'bob@example.com', password: '' }
};

describe('My Login application', () => {

    it('should login with LOCKED user', async () => {
        await LoginPage.enterLoginPage();
        await LoginPage.enterUsername(users.LOCKED.username);
        await LoginPage.enterPassword(users.LOCKED.password);
        await LoginPage.clickLogin();
        const errorMessage = await $('~generic-error-message');
        expect(await errorMessage.isDisplayed()).to.be.true;
    })

    it('should login with NO_MATCH user', async () => {
        await LoginPage.enterUsername(users.NO_MATCH.username);
        await LoginPage.enterPassword(users.NO_MATCH.password);
        await LoginPage.clickLogin();
        const errorMessage = await $('~generic-error-message');
        expect(await errorMessage.isDisplayed()).to.be.true;
    })

    it('should login with NO_USER_DETAILS user', async () => {
        await LoginPage.enterUsername(users.NO_USER_DETAILS.username);
        await LoginPage.enterPassword(users.NO_USER_DETAILS.password);
        await LoginPage.clickLogin();
        const errorMessage = await $('~generic-error-message');
        expect(await errorMessage.isDisplayed()).to.be.true;
    })


    it('should login with NO_PASSWORD user', async () => {
        await LoginPage.enterUsername(users.NO_PASSWORD.username);
        await LoginPage.enterPassword(users.NO_PASSWORD.password);
        await LoginPage.clickLogin();
        const errorMessage = await $('~generic-error-message');
        expect(await errorMessage.isDisplayed()).to.be.true;
    })

    it('should login with STANDARD user', async () => {
        await LoginPage.enterUsername(users.STANDARD.username);
        await LoginPage.enterPassword(users.STANDARD.password);
        await LoginPage.clickLogin();
        expect(await dashboardPage.isWelcomeMessageVisible()).to.be.true;
    })
})

