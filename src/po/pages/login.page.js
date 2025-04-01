import BasePage from './base.page';

class LoginPage extends BasePage {
    constructor() {
        super('https://www.saucedemo.com');
    }

    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get logInButton() {
        return $('#login-button');
    }

    get errorMessageContainer() {
        return $('.error-message-container h3');
    }

    get headerLabel() {
        return $('#header_container .header_label .app_logo');
    }

    async clickLogInButton() {
        await this.logInButton.click();
    }

    async clearUsernameInput(input) {
        await this.usernameInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async clearPasswordInput(input) {
        await this.passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async getErrorMessage() {
        return await this.errorMessageContainer.getText();
    }

}

export default new LoginPage();
