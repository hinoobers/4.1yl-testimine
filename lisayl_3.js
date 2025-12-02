const { Builder, By, Key, until } = require('selenium-webdriver');

async function basicSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open DuckDuckGo
        await driver.get('https://parabank.parasoft.com/parabank/index.htm');

        const registerLink = await driver.findElement(By.linkText('Register'));
        await driver.wait(until.elementIsVisible(registerLink), 10000);
        await registerLink.click();

        const firstNameInput = await driver.findElement(By.id('customer.firstName'));
        await driver.wait(until.elementIsVisible(firstNameInput), 10000);

        await firstNameInput.clear();
        await firstNameInput.sendKeys('Selenium');

        const lastNameInput = await driver.findElement(By.id('customer.lastName'));
        await driver.wait(until.elementIsVisible(lastNameInput), 10000);

        await lastNameInput.clear();
        await lastNameInput.sendKeys('User');

        const addressInput = await driver.findElement(By.id('customer.address.street'));
        await driver.wait(until.elementIsVisible(addressInput), 10000);

        await addressInput.clear();
        await addressInput.sendKeys('123 Test Street');

        const cityInput = await driver.findElement(By.id('customer.address.city'));
        await driver.wait(until.elementIsVisible(cityInput), 10000);

        await cityInput.clear();
        await cityInput.sendKeys('Testville');

        const stateInput = await driver.findElement(By.id('customer.address.state'));
        await driver.wait(until.elementIsVisible(stateInput), 10000);

        await stateInput.clear();
        await stateInput.sendKeys('TestState');

        const zipCodeInput = await driver.findElement(By.id('customer.address.zipCode'));
        await driver.wait(until.elementIsVisible(zipCodeInput), 10000);

        await zipCodeInput.clear();
        await zipCodeInput.sendKeys('12345');

        const phoneInput = await driver.findElement(By.id('customer.phoneNumber'));
        await driver.wait(until.elementIsVisible(phoneInput), 10000);

        await phoneInput.clear();
        await phoneInput.sendKeys('123-456-7890');

        const ssnInput = await driver.findElement(By.id('customer.ssn'));
        await driver.wait(until.elementIsVisible(ssnInput), 10000);

        await ssnInput.clear();
        await ssnInput.sendKeys('123-45-6789');

        const usernameInput = await driver.findElement(By.id('customer.username'));
        await driver.wait(until.elementIsVisible(usernameInput), 10000);
        
        await usernameInput.clear();
        await usernameInput.sendKeys('seleniumuser48');

        const passwordInput = await driver.findElement(By.id('customer.password'));
        await driver.wait(until.elementIsVisible(passwordInput), 10000);

        await passwordInput.clear();
        await passwordInput.sendKeys('TestPassword123');

        const confirmPasswordInput = await driver.findElement(By.id('repeatedPassword'));
        await driver.wait(until.elementIsVisible(confirmPasswordInput), 10000);

        await confirmPasswordInput.clear();
        await confirmPasswordInput.sendKeys('TestPassword123', Key.ENTER);

        // Wait for Your account was created successfully. You are now logged in do not use xpath
        const dom = await driver.getPageSource();
        await driver.sleep(500);

        if(dom.includes('Your account was created successfully. You are now logged in.')) {
            const overviewLink = await driver.findElement(By.linkText('Accounts Overview'));
            await driver.wait(until.elementIsVisible(overviewLink), 10000);
            await overviewLink.click();

    
            driver.takeScreenshot().then(
                function(image, err) {
                    require('fs').writeFile('lisayl_3.png', image, 'base64', function(err) {
                        if(err) {
                            console.log(err);
                        }
                    });
                }
            );
        }
    } finally {
        // Close the browser
        await driver.quit();
    }
}

basicSearch();
