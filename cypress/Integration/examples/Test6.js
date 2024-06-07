//Cypress -- Spec
/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

import HomePage from '../examples/pageObject/HomePage';
import MobileInternetPage from '../examples/pageObject/MobileInternetPage';
import SelectAndPickupPage from '../examples/pageObject/SelectAndPicupPage';

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

        // cy.frameLoaded('.survey-iframe[@frameborder="0"]')
        // cy.iframe().find('.btn-close > a').click()

        //clear all cookies
        cy.clearCookies()
        //verify no cookies cy.
        //cy.getCookies().should('be.empty')

       // acknowledged Cookies
       const cookiesLocator = '#cookies-notice-banner #cookiesNotice-en-desktop a'
       cy.cookiesAck(cookiesLocator, this.data.ackBtn)
 
       const homePage = new HomePage();
        // validate dynamic dropdown list based on input word 'inter' the search box 
            homePage.getEditBox().type(this.data.searchTxt)
            homePage.selectdropdownItem().eq(2).click()

            homePage.getEditBox().invoke('attr', 'value').then(value => {
            // capture attribue value
            console.log("Input value:", value);
            
            // validate search button displayed internet plan
            homePage.getEditBox().should('have.value',value)
          });

        // wait for to survey iframe inviisible - TBD

       // cy.wait(10000)
         // scroll down window bar  
        //  cy.window()
        //  .its("scrollY").should(($scrollY) => {

        //  // expect($scrollY).to.have.value(0);
        //  expect($scrollY).to.be.closeTo(0,0);
        //  });

    
        cy.wait(30000)

        cy.visit('https://www.telus.com/');
        //cy.visit("https://embed.questionpro.com/stylesheets/intercept/intercept.css");
        //cy.frameLoaded('.survey-iframe[@frameborder="0"]')
        //cy.frameLoaded('div.[@frameborder="0"]')
        cy.wait(10000).then(
            // hide iframe 
            cy.selectIframe('iframe'))

        // cy.frameLoaded('#lightboxOverlay')
        // cy.iframe().find('.btn-close > a').click()
        cy.parent();
               
        
        cy.wait(10000)
                 // cy.get(':nth-child(3)').click()
        // Select first hef link in the support section
        cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4.gCwgVm > ul li a').each(($el) => {
           
            $el.attr('href').then(href => {
                // capture attribue value
                console.log("Input value:", href);
            //$el is a wrapped jquery element
                  
        }) 
    
    }) 

//     cy.get('div.css-175oi2r div.styles__ResponsiveContainer-sc-bkkv2q-0.jMdmDo ... a.styles__Link-sc-bltbnk-0.jLhtUr')
//   .invoke('attr', 'href')
//   .then((href) => {
//     console.log("The href value is:", href);
//   });
       
    cy.wait(10000).then(
    // hide iframe 
    cy.selectIframe('iframe'))
          

    })

})