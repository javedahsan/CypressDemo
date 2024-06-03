//Cypress -- Spec
/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Telus Website', function()
{
    before(function(){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Select device and pickup Test case', function(){
        // test steps 
        
        cy.visit("https://www.telus.com/en/on/search/");
        //clear all cookies
        cy.clearCookies()
        //verify no cookies cy.
        //cy.getCookies().should('be.empty')
        
        // acknowledged Cookies
        const cookiesLocator = '#cookies-notice-banner #cookiesNotice-en-desktop a'
        cy.cookiesAck(cookiesLocator, this.data.ackBtn)

        // select item 3 from dropdown list - Internet plan
        cy.get('input[placeholder="Search"]').type(this.data.searchTxt)
        cy.get('ul.gvWLHq li span').eq(2).click()
        
        cy.get('input[placeholder="Search"]').invoke('attr', 'value').then(value => {
            // capture attribue value
            console.log("Input value:", value);
            
            // validate search button displayed internet plan
            cy.get('input[placeholder="Search"]').should('have.value',value)
          });
        
        // wait for to survey iframe inviisible - TBD

        cy.wait(10000)
        
        // hide iframe 
        cy.selectIframe('iframe')

        // validate number of visible internet plan 

        cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4 > ul').find('li').its('length').should('be.gte', 1);

        // Select internet plan 200GB
        cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4 > ul').find('li').each(($el, index, $list) => {
            //$el is a wrapped jquery element
            const textVeg = $el.find('div.style__PlanNameWrapper-sc-i2pptv-3').text()
            console.log(textVeg)
            if(textVeg.includes('20GB'))
                {
                    // click is strikeout -use wrap
                    cy.wrap($el).click()
                }              
        })  
        cy.wait(10000)

        // next page - browse plan 
            //const textPlan = $el.find('data-testid="allium-column-testid').text()
        console.log(cy.get('div[data-sb-field-path="blocks.4"] div'))   

        // Get all elements with class 'css-175oi2r' // Filter elements that contain the text "20GB"

        cy.get('.css-175oi2r').contains('20GB').should('be.visible')

        // browse hub
        cy.wait(10000)

        // scrool down page to display 'Buy Smart Hub' button   
        cy.window()
            .its("scrollY")
            .should(($scrollY) => {
      // expect($scrollY).to.have.value(0);
            expect($scrollY).to.be.closeTo(0, 0);
            });

        cy.wait(10000)
        // validdate Buy Smart hub button is diplayed
        cy.get('.css-175oi2r.r-1loqt21').contains('Buy Smart Hub').should('be.visible')

       // select buy Smart Button to proceed order
        cy.get('div[data-testid="button-link-testid"]').contains('Buy Smart Hub').click();

        // vaildate pickup device page is displayed
        cy.wait(10000)
        cy.get('div.Col__StyledCol-sc-15yvjc7-0.bPxunr div.sc-aXZVg.jSWdBy > h1').contains('pick').should('be.visible')
        
        // process payment - TBD
       

    })

})