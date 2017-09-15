'use strict';

let mixin = require('xmultiple');
let Page = require('./page');
let NavigationBar = require('./navigationBar');


class HomePage extends mixin(Page, NavigationBar) {
    open() {
        super.open('');
    }

    clickHamburgerMenu(){
        browser.element('span.icon-bar').click()
    }
}
        
module.exports = new HomePage();