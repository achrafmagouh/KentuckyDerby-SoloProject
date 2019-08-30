var derby = {}
var test = require('../testAsset/test')

module.exports = {
    beforeEach: browser => {
        derby = browser.page.derbyPage()
        derby.navigate()
        .waitForElementVisible('body', 10000)
        .maximizeWindow()
    },
    after:browser => {
        browser.end()
    },

    'Derby Visitor Info': browser => {
        test(derby)
    },
}
