describe("First test for Angular 7 app using cypress", () => {
    it("Shows the page and the title is displayed", () => {
        cy.visit('http://localhost:4200');
        cy.get('h1').contains('Hello angular7-app!').should('be.visible');
        cy.contains('Contact List');
    });

    it("Should add contact to the list", () => {
        cy.get('#mat-input-0').type('Test Name').should('have.value', 'Test Name');
        cy.get('#mat-input-1').type('0612345678').should('have.value', '0612345678');

        cy.contains('ADD CONTACT').click();

        //test if contact is added to the list
        cy.get('ul').contains('Test Name');
    });

    it("Should add one more contact to the list", () => {
        //clear input
        cy.get('#mat-input-0').clear();
        cy.get('#mat-input-1').clear();

        cy.get('#mat-input-0').type('Test A').should('have.value', 'Test A');
        cy.get('#mat-input-1').type('06121212126').should('have.value', '06121212126');

        cy.contains('ADD CONTACT').click();

        //test if contact is added to the list
        cy.get('ul').contains('Test Name');
        cy.get('ul').contains('Test A');

        expect('li').to.have.length.of.at.most(2)
    });

    it("Should edit the first contact on the list", ()=>{
        cy.get('[data-cy=editButton]').first().click();
        cy.get('#mat-dialog-0').should('be.visible');

        cy.get('#mat-input-3').clear();
        cy.get('#mat-input-3').type('0687654321');

        cy.get('[data-cy=okButton]').click();
        
        cy.get('#mat-dialog-0').should('not.be.visible');
        cy.get('ul').contains('0687654321');
    });

    it("Should clear the contact list", () => {
        cy.get('ul').contains('Test Name');
        cy.contains('CLEAR CONTACT LIST').click();

        cy.get('ul').should('be.empty');
    });

  });