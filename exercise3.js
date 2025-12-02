const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.w3schools.com/html/html_forms.asp');

        const firstNameInput = await driver.findElement(By.id('fname'));
        await driver.wait(until.elementIsVisible(firstNameInput), 10000);

        await firstNameInput.clear();
        await firstNameInput.sendKeys('Reio');

        const lastNameInput = await driver.findElement(By.id('lname'));
        await driver.wait(until.elementIsVisible(lastNameInput), 10000);

        await lastNameInput.clear();
        await lastNameInput.sendKeys('Põldmaa', Key.ENTER);

        console.log("Form on esitatud.");
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
