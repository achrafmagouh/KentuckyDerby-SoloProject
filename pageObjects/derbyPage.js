module.exports = {
    url:'https://www.kentuckyderby.com/',

    
    elements: {

        planVisit: {
            selector: '//a[@id="mainmenu-plan"]',
            locateStrategy: 'xpath'
        },
        ticket: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="tickets + Tickets"]',
            locateStrategy: 'xpath'
        },
        dressCode: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/what-to-wear + What to Wear"]',
            locateStrategy: 'xpath'
        },
        gates: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/gates-and-post-times + Gates & Post Times"]',
            locateStrategy: 'xpath'
        },
        mapsLink: {
            selector: '//p/a[@href="visit/maps-directions"]',
            locateStrategy: 'xpath'
        },
        maps: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/maps-directions + Maps & Directions"]',
            locateStrategy: 'xpath'
        },
        adressLink: {
            selector: '//a[@href="https://maps.google.com?daddr=700+Central+Ave+Louisville+KY+40208"]',
            locateStrategy: 'xpath'
        },
        privateJetLink: {
            selector: '//a[@href="http://www.sentient.com/kyderby"]',
            locateStrategy: 'xpath'
        },
        transportation: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/transportation + Transportation"]',
            locateStrategy: 'xpath'
        },
        expectation: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/what-to-expect + What to Expect"]',
            locateStrategy: 'xpath'            
        },
        expectLink: {
            selector: '//a[@href="http://www.forbes.com/sites/larryolmsted/2013/04/09/after-the-masters-americas-greatest-bucket-list-sporting-events"]',
            locateStrategy: 'xpath'            
        },
        festival: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/kentucky-derby-festival + Kentucky Derby Festival"]',
            locateStrategy: 'xpath'              
        },
        festivalLink: {
            selector: '//a[@href="http://www.kdf.org"]',
            locateStrategy: 'xpath'              
        },
        parking: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/visitor-info/new-parking + Parking & Shuttles"]',
            locateStrategy: 'xpath'              
        },
        dateArrivalLink: {
            selector: '//div/a[@href="visit/visitor-info/parking-oaks-and-derby"]',
            locateStrategy: 'xpath'              
        },
        cashTicket: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/cash-your-tickets + Cash Your Tickets"]',
            locateStrategy: 'xpath'              
        },
        prohibitedItem: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/security-information + Prohibited Items"]',
            locateStrategy: 'xpath'              
        },
        travel: {
            selector: '//div/section[@id="megamenu-plan"]//a[@aria-label="visit/travel-lodging + Travel & Lodging"]',
            locateStrategy: 'xpath'              
        },
        travelLink: {
            selector: '//a[@href="https://derbyexperiences.com/?utm_source=kentuckyderby.com&utm_medium=referral&utm_campaign=2020_derby_backlink"]',
            locateStrategy: 'xpath'              
        },
        churchilldownsLink: {
            selector: '//a[@aria-label="http://www.churchilldowns.com + Visit Churchill Downs"]',
            locateStrategy: 'xpath'              
        },
        derbyMuseumLink: {
            selector: '//a[@aria-label="http://www.derbymuseum.org + Kentucky Derby Museum"]',
            locateStrategy: 'xpath'              
        },
    }
}
