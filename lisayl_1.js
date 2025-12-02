const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://practice.expandtesting.com/add-remove-elements');

        const btn = await driver.findElement(By.className('btn btn-primary mt-3'));
        await driver.wait(until.elementIsVisible(btn), 10000);

        await btn.click();
        for(let i=0; i<4; i++) {
            await driver.sleep(250);
            await btn.click();
        }

        const btns = await driver.findElements(By.className('added-manually'));
        for(let i=0; i<btns.length; i++) {
            await driver.wait(until.elementIsVisible(btns[i]), 10000);
            await btns[i].click();
        }
    } finally {
        // Close the browser
        //await driver.quit();
    }
}

basicSearch();
