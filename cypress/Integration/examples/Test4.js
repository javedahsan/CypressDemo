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

    it('Privacy and Cookies Notes', function(){
        // test steps 
        
        cy.visit("https://www.telus.com/en/on/search/");
        //clear all cookies
        cy.clearCookies()

        // acknowledged Cookies
        const cookiesLocator = '#cookies-notice-banner #cookiesNotice-en-desktop a'
        cy.cookiesAck(cookiesLocator, this.data.ackBtn)

        //cy.get('nav[aria-label="main links"] ul').find('button[data-test="megaNavListButton"]').each(($el, index, $list) => {
        cy.get ('#drawer-mainnav-v1-inner-drawer > div').click();
        cy.get ('#drawer-mainnav-v1-inner-drawer > div').should('be.visible')
       
        cy.get('.sc-eZkCL.dpncAS').find('a') // Find all anchor elements (links) within the navigation
        .each(($link) => {
        // Get the text content of the current link
        const dropdownTxt = $link.text().trim()
       
        // Check if the text content matches "Mobility" (case-sensitive)
        if(dropdownTxt === 'Mobility')
            {
                cy.log('Found "Mobility" dropdownTxt');
            }  
    });
    // Hide Survey frame    
    cy.wait(10000)
    cy.selectIframe('iframe')
        
    })

})