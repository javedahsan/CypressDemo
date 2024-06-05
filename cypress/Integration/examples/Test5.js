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

    it('Select Device And pick up Testcase', function(){
        // test steps 
        
        cy.visit("https://www.telus.com/en/on/search/");
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
        
        // validate search button displayed internet plan

        homePage.getEditBox().invoke('attr', 'value').then(value => {
            // capture attribue value
            console.log("Input value:", value);
            
            // validate search button displayed internet plan
            homePage.getEditBox().should('have.value',value)
          });
          
        // wait for to survey iframe inviisible - TBD

        cy.wait(10000)
        // hide iframe 
        cy.selectIframe('iframe')

        // verify list of Internet plan displayed  
        homePage.getListOfPlans().find('li').its('length').should('be.gte', 1);

        // Select internet plan with 20GB
        homePage.getListOfPlans().find('li').each(($el, index, $list) => {

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
        // Select internet plan 200GB
        // Get all elements with class 'css-175oi2r' -// Filter elements that contain the text "20GB"
        cy.get('.css-175oi2r').contains('20GB').should('be.visible')
        // browse hub
        cy.wait(10000)

        // scroll down window bar  
        cy.window()
            .its("scrollY").should(($scrollY) => {

            // expect($scrollY).to.have.value(0);
            expect($scrollY).to.be.closeTo(0, 0);
            });

        cy.wait(10000)

        const mobilePage = new  MobileInternetPage();
        // continue flow with internet plan and buy Smart Hub
        //cy.get('.css-175oi2r.r-1loqt21').contains('Buy Smart Hub').should('be.visible')
        mobilePage.displayMobilePage().contains('Buy Smart Hub').should('be.visible');
     
        // select buy Smart Button to proceed order
        //cy.get('div[data-testid="button-link-testid"]').contains('Buy Smart Hub').click();
        mobilePage.clickSmartButton().contains('Buy Smart Hub').click();
       

        cy.wait(10000)
        const selectAndPickupPage = new SelectAndPickupPage();
        // verify Pick device page is display for payment processing

        //cy.get('div.Col__StyledCol-sc-15yvjc7-0.bPxunr div.sc-aXZVg.jSWdBy > h1').contains('pick').should('be.visible')
        selectAndPickupPage.displayPaymentPage().contains('pick').should('be.visible')
               

    })

})