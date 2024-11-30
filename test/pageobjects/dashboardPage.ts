class DashboardPage {
    get welcomeMessage() { return $('//*[@text="Products"]'); }

    async isWelcomeMessageVisible() {
        return this.welcomeMessage.isDisplayed();
    }
}
module.exports = new DashboardPage();
