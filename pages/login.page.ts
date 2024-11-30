import { $ } from '@wdio/globals'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    get burgerButton() { return $('~open menu'); }
    // get loginTab() { return $('~menu item log in'); }
    //get inputUsername() { return $('~Username input field'); }
    get inputPassword() { return $('~Password input field'); }
    get btnSubmit() { return $('~Login button'); }
    // get burgerButton() { return $('//*[@content-desc="open menu"]'); }
    get loginTab() { return $('//*[@content-desc="menu item log in"]'); }
    get inputUsername() { return $('//*[@content-desc="Username input field"]'); }
    // get inputPassword() { return $('//*[@content-desc="Password input field"]'); }
    // get btnSubmit() { return $('//*[@content-desc="Login button"]'); }


    public async open() {
        await this.burgerButton.click();
        await this.loginTab.waitForEnabled({ timeout: 2000 });
        await this.loginTab.click();
    }
    public async enterUsername(username: string) {
        await this.inputUsername.waitForEnabled({ timeout: 5000 });
        await this.inputUsername.setValue(username);
    }
    public async enterPassword(password: string) {
        await this.inputPassword.waitForEnabled({ timeout: 5000 });
        await this.inputPassword.setValue(password);
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
}
module.exports = new LoginPage();

