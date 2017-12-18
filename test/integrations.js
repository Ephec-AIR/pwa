const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://air.ephec-ti.org/');

    await page.type('.air-login-form-username--input', 'toto');
    await page.type('input[name=password]', 'test123');
    await page.click('.air-login-form--button-login');

    // vérifie si le panneau de contrôle est présent
    // dans ce cas on a été redirigé vers la page home
    // et on est connecté
    await page.waitForSelector('.air-graph-controls__container');
    await browser.close();
    console.log('SUCCESS !');
  } catch (err) {
    console.error('LOGIN FAILED !');
    console.error(err);
  }
})();
