import { $ } from '@wdio/globals'
import { expect } from 'chai'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    // get burgerButton() { return $('~open menu'); }
    get loginTab() { return $('~menu item log in'); }
    get inputUsername() { return $('~Username input field'); }
    get inputPassword() { return $('~Password input field'); }
    get btnSubmit() { return $('~Login button'); }
    get burgerButton() {
        return driver.isAndroid
            ? $('~open menu')
            : $('~tab bar option menu');
    }
    // get loginTab() { return $('//*[@content-desc="menu item log in"]'); }
    // get inputUsername() { return $('//*[@content-desc="Username input field"]'); }
    // get inputPassword() { return $('//*[@content-desc="Password input field"]'); }
    // get btnSubmit() { return $('//*[@content-desc="Login button"]'); }


    public async open() {
        await (await this.burgerButton).click();
        await this.loginTab.waitForDisplayed({ timeout: 10000 });
        expect(await this.loginTab.isDisplayed()).to.be.true;
        await this.loginTab.click();
    }
    public async enterUsername(username: string) {
        await this.inputUsername.waitForEnabled({ timeout: 5000 });
        expect(await this.inputUsername.isDisplayed()).to.be.true;
        await this.inputUsername.setValue(username);
    }
    public async enterPassword(password: string) {
        await this.inputPassword.waitForEnabled({ timeout: 5000 });
        await this.inputPassword.setValue(password);
        const doneButton = await driver.$('~Return'); // Adjust selector if "Done" is named differently
        if (await doneButton.isDisplayed()) {
            await doneButton.click();
        }
    }
    public async clickLogin() {
        await this.btnSubmit.click();
    }
    public async clearUserField() {
        await this.inputUsername.clearValue();
    }

    public async clearPasswordField() {
        await this.inputPassword.clearValue();
    }

    public async logoutFromAccount() {

    }
}
module.exports = new LoginPage();

