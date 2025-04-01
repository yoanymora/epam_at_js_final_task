import LoginPage from "../po/pages/login.page";
import userData from "./testData.js";

describe("sauce demo page test suite", () => {
    beforeEach( async () => {
        await LoginPage.open();
    });

    it("should open https://www.saucedemo.com page", async () => {
        await expect(browser).toHaveTitle("Swag Labs");
    });

    it("UC-1 Test Login form with empty credentials", async () => {
        await LoginPage.addInputValue("username", userData.userData.userEmail);
        await LoginPage.addInputValue("password", userData.userData.userPassword);
        await LoginPage.clearUsernameInput();
        await LoginPage.clickLogInButton();
        await expect(await LoginPage.getErrorMessage()).toContain("Username is required");
    });

    it("UC-2 Test Login form with credentials by passing Username", async () => {
        await LoginPage.addInputValue("username", userData.userData.userEmail);
        await LoginPage.addInputValue("password", userData.userData.userPassword);
        await LoginPage.clearPasswordInput();
        await LoginPage.clickLogInButton();
        await expect(await LoginPage.getErrorMessage()).toContain("Password is required");
    });

    it("UC-3 Test Login form with credentials by passing Username & Password", async () => {
        await LoginPage.addInputValue("username", userData.userData.userEmail);
        await LoginPage.addInputValue("password", userData.userData.userPassword);
        await LoginPage.clickLogInButton();
        await expect(await LoginPage.headerLabel).toHaveText("Swag Labs");
    });
});
