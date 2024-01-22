class LoginScreen {

  get inputUsername() {
    return $('//*[@content-desc="Username input field"]');
  }

  get inputPassword() {
    return $('//android.widget.EditText[@content-desc="Password input field"]');
  }

  get btnLogin() {
    return $(
      '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
    );
  }

  get errorMessageText() {
    return $(
      '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
    );
  }

  /**
   * Method to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}

module.exports = new LoginScreen();
