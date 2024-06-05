//Cypress -- Spec
/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import HomePage from '../examples/pageObject/HomePage';

//Scenario 1: Basic URL Load Test
describe('Telus Website', () => {
    it('loads the Telus homepage', () => {
      cy.visit('https://www.telus.com/en/on/search/');
      cy.clearCookies()
      // Verify title contains "TELUS"
      cy.title().should('include', 'TELUS | Search'); 
    });
  });

  // Scenario 2: Verify Search Bar Presence
 
    describe('Telus Website', () => {
        it('loads the Telus homepage and verifies search box is presence', () => {
          cy.visit('https://www.telus.com/en/on/search/');
          cy.clearCookies()

          // Find element with input search box and assert visibility
          const homePage = new HomePage();
          //cy.get('input[placeholder="Search"]').should('be.visible'); 
          homePage.getEditBox().should('be.visible');
        });
      });

    