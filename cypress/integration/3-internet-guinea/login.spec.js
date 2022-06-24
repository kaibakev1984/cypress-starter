describe('example login app in heroku app', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    beforeEach(() => {
        cy.fixture('userData.json').as('userData')
    })

    it('should log in app', function() {
        cy.get('#username').type('tomsmith').should('have.value', 'tomsmith')

        cy.get('#password').type('SuperSecretPassword!')

        cy.get('.radius').click()

        cy.get('#flash').contains('You logged into a secure area!')
    });

    it('should log out app', function() {
        cy.get('#username').type('tomsmith').should('have.value', 'tomsmith')

        cy.get('#password').type('SuperSecretPassword!')

        cy.get('.radius').click()

        cy.get('#flash').contains('You logged into a secure area!')

        cy.get('.button').click()

        cy.get('#flash').contains('You logged out of the secure area!')
    });


    it('should log out app using fixture', function() {
        cy.get('#username').type(this.userData.username).should('have.value', 'tomsmith')

        cy.get('#password').type(this.userData.password)

        cy.get('.radius').click()

        cy.get('#flash').contains(this.userData.loginMessage)

        cy.get('.button').click()

        cy.get('#flash').contains(this.userData.logoutMessage)
    });
});