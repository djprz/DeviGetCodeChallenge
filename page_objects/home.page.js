'use strict';

let mixin = require('xmultiple');
let Page = require('./page');
let NavigationBar = require('./navigationBar');


class HomePage extends mixin(Page, NavigationBar) {
    open() {
        super.open('');
    }
}
        
module.exports = new HomePage();