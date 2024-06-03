// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
            {
            cy.get("button.btn.btn-info").eq(index).click()
        }
    })
});

Cypress.Commands.add("selectIframe", (iframe) => {
    cy.get(iframe)
          .then($iframe => {
            // Check if iframe is visible (optional)
            if ($iframe.is(':visible')) {
              //  Try to hide the iframe using CSS (if applicable)
              // $iframe.css('display', 'none'); // Uncomment if needed
              $iframe.css('display', 'none');
    
             
            }
          })
        });

Cypress.Commands.add("cookiesAck", (cookiesLocator, ackBtn) => {
    cy.get(cookiesLocator).each(($el, index, $list) => {
            //if($el .text()==="I acknowledge")
            if($el .text()=== ackBtn)
                {
                    cy.wrap($el).click()
                   
                }
            
        })
    });


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })