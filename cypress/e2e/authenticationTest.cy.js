describe('Check user authentication through login modal window', () => {

    //Strings
    let authenticationErrorText = 'The username/password entered is invalid. Usernames and passwords are case sensitive.'


    it('Check if privileged user authenticates successfully', () => {
        //given
        cy.loginUsingUI()

        //then
        cy.get(Cypress.env("selectors").topMenuLabels)
            .should('have.length', 3)
    })

    it('Check if unprivileged user cannot authenticate successfully', () => {
        //given
        cy.visit(Cypress.env('baseUrl'))

        //when
        cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username'))
        cy.get(Cypress.env("selectors").passwordInput).type('wrongPassword')
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)
    })

    it('Check if username and password are truly case sensitive', () => {
        //given
        cy.visit(Cypress.env('baseUrl'))

        //when
        cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password').toLowerCase())
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)

        //and when
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password').toUpperCase())
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)

        //and when
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username').toUpperCase())
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password'))
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)
    })
})