const { assert } = require('chai');
const { HoversPage } = require('./pageObjects/HoversPage');

describe('Hovers Test', () => {
  it('should navigate to each user’s profile and verify the target URL', () => {
    // Navigate to the hovers page
    HoversPage.open();

    // Hover over each user and verify the target URL
    for (let i = 1; i <= 3; i++) {
      HoversPage.hoverOverUser(i);
      const targetURL = HoversPage.getTargetURL(i);
      assert.include(targetURL, 'not-found', `Target URL for user ${i} is incorrect`);
    }
  });
});
