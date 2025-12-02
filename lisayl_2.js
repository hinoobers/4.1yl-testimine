const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.saucedemo.com/');

        const usernameInput = await driver.findElement(By.id('user-name'));
        await driver.wait(until.elementIsVisible(usernameInput), 10000);

        await usernameInput.clear();
        await usernameInput.sendKeys('standard_user');

        const passwordInput = await driver.findElement(By.id('password'));
        await driver.wait(until.elementIsVisible(passwordInput), 10000);
        await passwordInput.clear();
        await passwordInput.sendKeys('secret_sauce', Key.ENTER);
        
        const products = await driver.findElements(By.className('inventory_item'));
        console.log("Leitud tooted: " + products.length);
        for(let i=0; i<products.length; i++) {
            let title = await products[i].findElement(By.className('inventory_item_name'));
            console.log("Toode " + (i+1) + ": " + await title.getText());
        }
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
