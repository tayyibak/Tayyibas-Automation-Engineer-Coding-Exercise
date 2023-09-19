const { remote } = require('webdriverio');

async function selectDropdownOption() {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  try {
    await browser.url('http://the-internet.herokuapp.com/dropdown');

    // Get all dropdown options
    const options = await browser.$$('#dropdown option');

    // Randomly select an option (excluding the first default option)
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    await options[randomIndex].click();

    // Get the selected option text
    const selectedOption = await options[randomIndex].getText();
    console.log('Selected option:', selectedOption);
  } finally {
    await browser.deleteSession();
  }
}

selectDropdownOption().catch(console.error);
