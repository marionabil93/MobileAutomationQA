class DashboardPage {
    get welcomeMessage() { return $('//*[@text="Products"]'); }
    get errorMessage() { return $('~generic-error-message'); }

    public async isWelcomeMessageVisible() {
        await this.welcomeMessage.waitForDisplayed({ timeout: 5000 });
        return this.welcomeMessage.isDisplayed();
    }

    public async isErrorMessageVisible() {
        return this.errorMessage.isDisplayed();
    }
}
module.exports = new DashboardPage();