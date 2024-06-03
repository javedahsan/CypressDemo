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

    it('Support Services link Testcase', function(){
        // test steps 
        
        cy.visit("https://www.telus.com/en/on/search/");
        //clear all cookies
        cy.clearCookies()
        //verify no cookies cy.
        //cy.getCookies().should('be.empty')

       // acknowledged Cookies
       const cookiesLocator = '#cookies-notice-banner #cookiesNotice-en-desktop a'
       cy.cookiesAck(cookiesLocator, this.data.ackBtn)
 
        
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
         // scroll down window bar  
         cy.window()
         .its("scrollY").should(($scrollY) => {

         // expect($scrollY).to.have.value(0);
         expect($scrollY).to.be.closeTo(0, 270);
         });

    
        cy.wait(10000).then(

        // Select internet plan with 20GB
        cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4.gCwgVm > ul').find('li a').each(($el, index, $list) => {
            const textlink = $el.find('h2').text()
            //$el is a wrapped jquery element
            if(textlink.trim() !== "")
                {
                    // click is strikeout -use wrap
                    cy.wrap($el).click()
                }   
                       
        }) 
    )
        
        cy.wait(10000)
        // hide iframe 
        cy.selectIframe('iframe')
               

    })

})