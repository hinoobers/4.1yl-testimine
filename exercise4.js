const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://www.duckduckgo.com');

        // Type 'WebDriver' into the search box and press Enter
        await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.ENTER);

        await driver.wait(until.elementsLocated(By.css('h2 a')), 10000);

        let elements = await driver.findElements(By.css('h2 a'));
        let maxToPrint = Math.min(4, elements.length);
        for(let i = 0; i < maxToPrint; i++) {
            console.log("Result " + (i + 1) + ": " + await elements[i].getText());
        }
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('exercise4.png', image, 'base64', function(err) {
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
