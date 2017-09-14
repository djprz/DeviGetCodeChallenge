let assert = require('assert');
let homePage = require('../../page_objects/home.page');
let guidePage = require('../../page_objects/developerGuide');
let {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then}) {

    Given('I maximize the browser window', () => {
        browser.windowHandleMaximize()
    });

    When('I go to the WebDriverIO home page', () => {
        homePage.open();
    });

    When('I go to the Developer Guide section', () => {
        guidePage.open();
    });

    When(/^I click on "([^"]*)" option in menu$/, (option) => {
        guidePage.clickMenuOption(option);
    });

    When('I search for {stringInDoubleQuotes}', (query) => {
        homePage.doSearch(query);
    });

    Then('I click on link {stringInDoubleQuotes}', (selector) => {
        browser.element('*=' + selector).click();
    });

    When('I select the first suggestion', () => {
       homePage.goToSearchResult();
    });

    Then('I should see the title of the page as {stringInDoubleQuotes}', (expectedTitle) => {
        assert.ok(browser.getTitle().includes(expectedTitle), "Title is not present on page.");
    });

    Then('A new tab is being opened', () => {
        browser.pause(1000);
        const openTabs = browser.getTabIds();
        assert.ok(openTabs.length > 1, "Second Tab was not opened.");
        browser.switchTab(openTabs[1]);
    });

    Then(/^I should see the(?: "(.*)")? menu guide with the following options$/, (option, table) => {
        let menuOptions;
        if (option == undefined)
            menuOptions = guidePage.getMenuOption();
        else
            menuOptions = guidePage.getMenuSubOptions(option);
        const dataRows = table.hashes();
        for (let i = 0, len = dataRows.length; i < len; i++) {
            assert.equal(dataRows[i]['Options'], menuOptions[i], "The element '" + dataRows[i]['Options'] + "' is not present in menu.")
        }
    });
});
