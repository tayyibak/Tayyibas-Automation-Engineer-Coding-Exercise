const { remote } = require('webdriverio');

async function clickCheckboxes() {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  try {
    await browser.url('http://the-internet.herokuapp.com/checkboxes');

    // Randomly generate the number of times to click each checkbox (between 1 and 10)
    const clickCountCheckbox1 = Math.floor(Math.random() * 10) + 1;
    const clickCountCheckbox2 = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < clickCountCheckbox1; i++) {
      const checkbox1 = await browser.$('#checkboxes input:nth-child(1)');
      await checkbox1.click();
    }

    for (let i = 0; i < clickCountCheckbox2; i++) {
      const checkbox2 = await browser.$('#checkboxes input:nth-child(3)');
      await checkbox2.click();
    }
  } finally {
    await browser.deleteSession();
  }
}

clickCheckboxes().catch(console.error);
