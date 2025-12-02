const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.demoblaze.com/');

        const laptopsCategory = await driver.findElement(By.linkText('Laptops'));
        await driver.wait(until.elementIsVisible(laptopsCategory), 10000);
        await laptopsCategory.click();

        await driver.wait(until.elementsLocated(By.css('.card-title a')), 10000);

        let all = await driver.findElements(By.css('.card-title a'));
        let maxToPrint = Math.min(5, all.length);

        for (let i = 0; i < maxToPrint; i++) {
            let laptopElements = await driver.findElements(By.css('.card-title a'));
            if (i >= laptopElements.length) break; 
            let el = laptopElements[i];
            await driver.wait(until.elementIsVisible(el), 10000);
            console.log("Laptop " + (i + 1) + ": " + await el.getText());
        }
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('miniProject.png', image, 'base64', function(err) {
                    if(err) {
                        console.log(err);
                    }
                });
            }
        );
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
