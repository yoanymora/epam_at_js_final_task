describe("sauce demo page test suite", () => {
    it("should open https://www.saucedemo.com page", async () => {
        await browser.url("https://www.saucedemo.com");
        await expect(browser).toHaveTitle("Swag Labs");
    });

    it("test login form with empty credentials", async () => {
        await browser.url("https://www.saucedemo.com");
        const userNameInput = await $('#user-name');
        const passwordInput = await $('#password');
        const logInButton = await $('#login-button');
        const errorMessageContainer = await $('.error-message-container');
        // clearValue() method is not working at all
        // await userNameInput.addValue('test');
        // await passwordInput.addValue('test');
        // await userNameInput.clearValue();
        // await passwordInput.clearValue();
        await logInButton.click();
        await expect(errorMessageContainer.$('h3')).toHaveText(expect.stringContaining("Username is required"));
    });

    it("test login form with credentials by passing user name", async () => {
        await browser.url("https://www.saucedemo.com");
        const userNameInput = await $('#user-name');
        const passwordInput = await $('#password');
        const logInButton = await $('#login-button');
        const errorMessageContainer = await $('.error-message-container');
        await userNameInput.addValue('test');
        // await passwordInput.addValue('test');
        // await passwordInput.clearValue()
        await logInButton.click();
        await expect(errorMessageContainer.$('h3')).toHaveText(expect.stringContaining("Password is required"));
    });

    it("test login form with credentials by passing user name and password", async () => {
        await browser.url("https://www.saucedemo.com");
        const userNameInput = await $('#user-name');
        const passwordInput = await $('#password');
        const logInButton = await $('#login-button');
        await userNameInput.addValue('standard_user');
        await passwordInput.addValue('secret_sauce');
        await logInButton.click();
        const headerLabel = await $('#header_container').$('.header_label').$('.app_logo');
        await expect(headerLabel).toHaveText("Swag Labs");
    });
});
