import LoginPage from "../po/pages/login.page";


describe("sauce demo page test suite", () => {
    beforeEach( async () => {
        await LoginPage.open();
    });

    it("should open https://www.saucedemo.com page", async () => {
        await expect(browser).toHaveTitle("Swag Labs");
    });

    it("UC-1 Test Login form with empty credentials", async () => {
        await LoginPage.usernameInput.addValue('test');
        await LoginPage.passwordInput.addValue('test');
        await LoginPage.clearUsernameInput();
        await LoginPage.logInButton.click();
        await expect(await LoginPage.getErrorMessage()).toContain("Username is required");
    });

    it("UC-2 Test Login form with credentials by passing Username", async () => {
        await LoginPage.usernameInput.addValue('test');
        await LoginPage.passwordInput.addValue('test');
        await LoginPage.clearPasswordInput();
        await LoginPage.logInButton.click();
        await expect(await LoginPage.getErrorMessage()).toContain("Password is required");
    });

    it("UC-3 Test Login form with credentials by passing Username & Password", async () => {
        await LoginPage.usernameInput.addValue('standard_user');
        await LoginPage.passwordInput.addValue('secret_sauce');
        await LoginPage.logInButton.click();
        await expect(await LoginPage.headerLabel).toHaveText("Swag Labs");
    });
});
