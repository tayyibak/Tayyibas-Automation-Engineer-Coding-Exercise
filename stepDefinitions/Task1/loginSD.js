class LoginPage {
    get usernameInput() {
      return $('#username');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('button[type="submit"]');
    }
  
    get flashMessage() {
      return $('#flash');
    }
  
    open() {
      browser.url('http://the-internet.herokuapp.com/login');
    }
  
    login(tomsmith, SuperSecretPassword!) {
      this.usernameInput.setValue(tomsmith);
      this.passwordInput.setValue(SuperSecretPassword!);
      this.loginButton.click();
    }
  
    //isLoggedIn() {
      //return this.flashMessage.getText().includes('You logged into a secure area');
    //}
  
    logout() {
      const logoutLink = $('.icon-2x.icon-signout');
      logoutLink.click();
    }
  }
  
  module.exports = new LoginPage();
  