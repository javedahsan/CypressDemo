class MobileInternetpage
{
    displayMobilePage()
    {
        return cy.get('.css-175oi2r.r-1loqt21');
    };

    clickSmartButton()
    {
        return cy.get('div[data-testid="button-link-testid"]');
    };

    
}
export default MobileInternetpage;
