//Cypress -- Spec
/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import HomePage from '../examples/pageObject/HomePage';

describe('Telus Website', function()
{
    before(function(){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Select dynamic dropdown Item Testcase', function(){
        // test steps 
        
        cy.visit("https://www.telus.com/en/on/search/");
        //clear all cookies
        cy.clearCookies()
        //verify no cookies cy.
        //cy.getCookies().should('be.empty')

        const homePage = new HomePage();
       // acknowledged Cookies
       const cookiesLocator = '#cookies-notice-banner #cookiesNotice-en-desktop a'
       cy.cookiesAck(cookiesLocator, this.data.ackBtn)
 
        // validate dynamic dropdown list based on input word 'inter' the search box 
        //cy.get('input[placeholder="Search"]').type(this.data.searchTxt)
            homePage.getEditBox().type(this.data.searchTxt);
 
        // validate search button displayed internet plan
        //cy.get('ul.gvWLHq li span').eq(2).click()
            homePage.selectdropdownItem().eq(2).click()
         
 
       //cy.get('input[placeholder="Search"]').invoke('attr', 'value').then(value => {
            homePage.getEditBox().invoke('attr', 'value').then(value => { 
            // capture attribue value
            console.log("Input value:", value);
            
            // validate search button displayed internet plan
            //cy.get('input[placeholder="Search"]').should('have.value',value)
            homePage.getEditBox().should('have.value',value)
            
          });
          
        // wait for to survey iframe inviisible - TBD

        cy.wait(10000)
        // hide iframe 
        cy.selectIframe('iframe')

        // verify list of Internet plan displayed  
        //cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4 > ul').find('li').its('length').should('be.gte', 1);
        homePage.getListOfPlans().find('li').its('length').should('be.gte', 1);

    })

})