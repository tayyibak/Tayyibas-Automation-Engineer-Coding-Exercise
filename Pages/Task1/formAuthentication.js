const { assert } = require('chai');
const { LoginPage } = require('./pageObjects/LoginPage');

describe('Form Authentication Test', () => {
  it('should login, validate login, logout, and validate logout', () => {
    // Navigate to the login page
    LoginPage.open();

    // Login
    LoginPage.login('username', 'password');

    // Validate login
    assert.isTrue(LoginPage.isLoggedIn(), 'Login failed');

    // Logout
    LoginPage.logout();

    // Validate logout
    assert.isFalse(LoginPage.isLoggedIn(), 'Logout failed');
  });
});
