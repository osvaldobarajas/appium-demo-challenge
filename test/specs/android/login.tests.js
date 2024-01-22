const LoginScreen = require("../../screenObjects/android/Login.screen");
const CatalogScreen = require("../../screenObjects/android/Catalog.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen")

describe("My Demo App: Login tests", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
  });

  it("As a standard user, I should not login with invalid credentials", async () => {
    LoginScreen.login(process.env.INVALID_USERNAME, process.env.INVALID_PASSWORD);
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("As a standard user, I should be able to login with valid credentials", async () => {
    LoginScreen.login(process.env.USERNAME, process.env.PASSWORD);
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
});
