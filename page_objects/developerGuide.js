'use strict';

let mixin = require('xmultiple');
let Page = require('./page');
let NavigationBar = require('./navigationBar');


class GuidePage extends mixin(Page, NavigationBar) {

    get title() {
        return browser.element('//*[@id="Developer-Guide"]');
    }

    open() {
        browser.element('//a[contains(text(), "Developer Guide")]').click()
    }

    getTitle() {
        return this.title.getText();
    }

    getMenuOption() {
        let selector = '.apinav.guide h3 a';
        browser.waitForVisible(selector, 5000);
        return browser.getText(selector);
    }

    clickMenuOption(option){
        browser.click('=' + option);
    }

    getMenuSubOptions(option){
        option = option.replace(/\s/g, '').toLowerCase();
        let selector = `//*[@class='commands ${option}']/a`;
        browser.waitForVisible(selector, 5000)
        return browser.getText(selector)
    }
}

module.exports = new GuidePage();