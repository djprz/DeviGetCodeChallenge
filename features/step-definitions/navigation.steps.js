var assert = require('assert');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then}) {
    When('I go to the WebDriverIO page', () => {
        var url = 'http://webdriver.io';
        browser.url(url);
    });

    When(/^I click on "([^"]*)" option$/, (option) => {
        browser.click(option);
    });

    Then('I click on link {stringInDoubleQuotes}', (selector) => {
        browser.click(selector)
    });

    Then('I should see the title of the page be {stringInDoubleQuotes}', (expectedTitle) => {
        assert.equal(browser.getTitle(), expectedTitle)
    });
});
