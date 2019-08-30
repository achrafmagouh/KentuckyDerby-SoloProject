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























            // .moveToElement(locator1, XOffset1, Yoffset1)
        // .pause(100) // if you want to give wait
        // .mouseButtonDown(0) // press click, down
        // .moveToElement(locator2, XOffset2, Yoffset2) // move to element
        // .mouseButtonUp(0); // press release , up