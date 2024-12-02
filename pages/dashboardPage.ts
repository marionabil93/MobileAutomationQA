import { expect } from 'chai'
class DashboardPage {

    get dashboardTitle() {
        return driver.isAndroid
            ? $('//*[@text="Products"]')
            : $('//*[@label="Products"]');
    }
    get errorMessage() { return $('~generic-error-message'); }


    public async isWelcomeMessageVisible() {
        await this.dashboardTitle.waitForDisplayed({ timeout: 13000 });
        expect(await this.dashboardTitle.isDisplayed()).to.be.true;
        return this.dashboardTitle.isDisplayed();
    }

    public async isErrorMessageVisible() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        expect(await this.errorMessage.isDisplayed()).to.be.true;
        return this.errorMessage.isDisplayed();
    }
}
module.exports = new DashboardPage();