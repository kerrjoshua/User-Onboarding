describe('My Onboarding App', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000')

    })
   
    // Bring in helper/getter variables

    const firstName = () => cy.get("input[name=fname]");
    const lastName = () => cy.get("input[name=lname]");
    const email = () => cy.get("input[name=email]");
    const pwd = () => cy.get("input[name=password]");
    const tos = () => cy.get("input[name=agree]");
    const sbmt  = () => cy.get("input[type=submit]");

   

    it("renders the proper elements", () => {
        firstName().should('exist');
        lastName().should('exist');
        email().should('exist');
        pwd().should('exist');
        tos().should('exist');
        sbmt().should('exist');

    })

    describe("Can fill out textboxes", () => {
        it('accepts and displays correct input in name field', ()=> {
            firstName().should("have.value", "").type('Hello there!').should('have.value', 'Hello there!');
        })
    })





})