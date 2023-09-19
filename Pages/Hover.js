class HoversPage {
    get userAvatars() {
      return $$('.figure');
    }
  
    open() {
      browser.url('http://the-internet.herokuapp.com/hovers');
    }
  
    hoverOverUser(userIndex) {
      this.userAvatars[userIndex - 1].moveTo();
    }
  
    getTargetURL(userIndex) {
      const userLink = this.userAvatars[userIndex - 1].$('a');
      userLink.click();
  
      // Wait for the target page to load
      browser.waitUntil(() => {
        return browser.getUrl().includes('not-found');
      }, {
        timeout: 10000,
        timeoutMsg: 'Target page did not load within 10s'
      });
  
      const targetURL = browser.getUrl();
      browser.back(); // Navigate back to the hovers page
      return targetURL;
    }
  }
  
  module.exports = new HoversPage();
  