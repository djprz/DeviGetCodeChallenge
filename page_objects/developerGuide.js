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
        return browser.getText('.apinav.guide h3 a')
    }

    clickMenuOption(option){
        browser.click('=' + option)
    }

    getMenuSubOptions(option){
        option = option.replace(/\s/g, '').toLowerCase();
        browser.pause(1000);
        return browser.getText(`//*[@class='commands ${option}']/a`)
    }
}

module.exports = new GuidePage();