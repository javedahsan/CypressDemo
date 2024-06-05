class homePage
{
    getEditBox()
    {
        return cy.get('input[placeholder="Search"]');
    };

    selectdropdownItem()
    {
        return cy.get('ul.gvWLHq li span');
    };

    getListOfPlans()
    {
        return cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4 > ul');
    };

    displaySearchdropdownList()
    {
        return  cy.get ('#drawer-mainnav-v1-inner-drawer > div');
    };
    
    

}
export default homePage;