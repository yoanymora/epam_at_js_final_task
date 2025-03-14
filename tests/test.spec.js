describe("sauce demo page test suite", () => {
    it("should open https://www.saucedemo.com page", async () => {
        await browser.url("https://www.saucedemo.com");
        await expect(browser).toHaveTitle("Swag Labs");
    });
})