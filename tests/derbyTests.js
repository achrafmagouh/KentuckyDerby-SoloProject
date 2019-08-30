var derby = {}

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

    'info Ticket': browser => {
        derby

        //Ticket

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click ('@ticket')
        .pause(500)

        //What to wear

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click ('@dressCode')
        .pause(1000)

        //Gates & post time

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@gates')
        .pause(500)
        .click('@mapsLink')
        .pause(500)
        .api.back()
        .pause(500)


        //Maps & directions
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@maps')
        .pause(1000)
        .click('@adressLink')
        .pause(3000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(10000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })

        //Transportation
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@transportation')
        .pause(1000)
        .click('@privateJetLink')
        .pause(3000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })
            .pause(5000)

        //What to Expect
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@expectation')
        .pause(1000)
        .click('@expectLink')
        .pause(3000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })
            .pause(5000)

        //Festival
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@festival')
        .pause(1000)
        .click('@festivalLink')
        .pause(3000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })
                
        //Parking & Shuttles

        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@parking')
        .pause(500)
        .click('@dateArrivalLink')
        .pause(1000)
        .api.back()
        .pause(1000)


        //Cash Your Tickets
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@cashTicket')
        .pause(1000) 

        //Prohibited Items

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@prohibitedItem')
        .pause(1000)     

        //Travel & lodging

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@travel')
        .pause(1000)
        .click("@travelLink")    
        .pause(3000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })

        // Visit Churchill Downs Website
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@churchilldownsLink')
        .pause(1000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })

        // Visit Derby Museum
        .waitForElementVisible('body', 5000)
        derby

        .moveToElement('@planVisit', 10, 10)
        .pause(500)
        .click('@derbyMuseumLink')
        .pause(1000)
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[1])
            })
            .waitForElementVisible('body', 5000)
            .pause(1000)
            .closeWindow();
        derby
            .api.windowHandles(function(result){
            derby.api.switchWindow(result.value[0])
                })
                           



    },


        
    }























            // .moveToElement(locator1, XOffset1, Yoffset1)
        // .pause(100) // if you want to give wait
        // .mouseButtonDown(0) // press click, down
        // .moveToElement(locator2, XOffset2, Yoffset2) // move to element
        // .mouseButtonUp(0); // press release , up