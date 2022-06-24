describe('Automation Practice Web UI Testing', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('complete student registration form', () => {
        cy.get('#firstName').type('Kevin')

        cy.get('#lastName').type('Vasquez')

        cy.get('#userEmail').type('test@test.com.ar')

        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()

        cy.get('#userNumber').type('1159932589')

        // cy.get('#dateOfBirthInput').type('26 Feb 2022')

        cy.get('.subjects-auto-complete__value-container').type('Maths').type('{enter}')

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click()
    });
})