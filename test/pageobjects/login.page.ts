import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get burgerButton() { return $('~open menu'); }
    get loginTab() { return $('~menu item log in'); }
    get inputUsername() { return $('~Username input field'); }
    get inputPassword() { return $('~Password input field'); }
    get btnSubmit() { return $('~Login button'); }


    public async enterLoginPage() {
        await this.burgerButton.click();
        await this.loginTab.click();
    }
    public async enterUsername(username: string) {
        await this.inputUsername.setValue(username);
    }
    public async enterPassword(password: string) {
        await this.inputPassword.setValue(password);
    }
    public async clickLogin() {
        await this.btnSubmit.click();
    }
    // async enterUsername(username) {
    //     await this.usernameField.setValue(username);
    // }
    // async enterPassword(password) {
    //     await this.passwordField.setValue(password);
    // }
    // async clickLogin() {
    //     await this.loginButton.click();
    // }
    /**
     * define selectors using getter methods
     */

    // public get burgerButton() {
    //     return $('~open menu');
    // }

    // public get loginTab() {
    //     return $('~menu item log in');
    // }

    // public get inputUsername() {
    //     return $('~Username input field');
    // }

    // public get inputPassword() {
    //     return $('~Password input field');
    // }

    // public get btnSubmit() {
    //     return $('~Login button');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // public async login(username: string, password: string) {
    //     await this.burgerButton.click();
    //     await this.loginTab.click();
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    //     await this.welcomeMessage
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    // public open () {
    //     return super.open('login');
    // }
}
module.exports = new LoginPage();

