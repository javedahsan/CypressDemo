//Cypress -- Spec
/// <reference types="cypress"/>

describe('Telus Website', function()
{
    it('Hide the Servey iframe', function(){
        cy.visit('https://www.telus.com/en/on/search/');

        // Wait for potential survey iframe to appear (adjust timeout as needed)
        cy.wait(1000); // Wait for 5 seconds
    
        // Try to handle the iframe (adapt based on iframe properties)
        // cy.get('iframe')
        //   .then($iframe => {
        //     // Check if iframe is visible (optional)
        //     if ($iframe.is(':visible')) {
        //       //  Try to hide the iframe using CSS (if applicable)
        //       // $iframe.css('display', 'none'); // Uncomment if needed
        //       $iframe.css('display', 'none');
    
             
        //     }
        //   });
        // refactoring - see code in the command.js

          cy.selectIframe('iframe')
      });

    })

