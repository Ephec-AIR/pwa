const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://air.ephec-ti.org/');

    await page.type('.air-login-form-username--input', 'toto');
    await page.type('input[name=password]', 'test123');
    await page.click('.air-login-form--button-login');

    await page.waitForSelector('.air-graph-controls__container');
    //await page.screenshot({path: 'test/connectedToHomePage.png'});

    await page.click('a[href="/parameters"]');
    //await page.screenshot({path: 'test/parameters.png'});

    await page.click('a[href="https://air.ephec-ti.org/forum/"]');
    //await page.screenshot({path: 'test/forum.png'});

    await browser.close();
    console.log('SUCCESS !');
  } catch (err) {
    console.error('LOGIN FAILED !');
    console.error(err);
  }
})();
