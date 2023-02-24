describe('Check user authentication through login modal window', () => {

    //Strings
    let authenticationErrorText = 'The username/password entered is invalid. Usernames and passwords are case sensitive.'


    it('Check if privileged user authenticates successfully', () => {
        //given
        cy.loginAdminUsingUI()

        //then
        cy.get(Cypress.env("selectors").adminTabContainer)
            .should('be.visible')
        cy.get(Cypress.env("selectors").reportsTabContainer)
            .should('be.visible')
        cy.get(Cypress.env("selectors").createBookingsTabContainer)
            .should('be.visible')
    })

    it('Check if unprivileged user cannot authenticate successfully', () => {
        //given
        cy.visit(Cypress.env('baseUrl'))

        //when
        cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_admin'))
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
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_admin'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_admin').toLowerCase())
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)

        //and when
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_admin'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_admin').toUpperCase())
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)

        //and when
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_admin').toUpperCase())
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_admin'))
        cy.get(Cypress.env("selectors").loginSubmitButton).click()

        //then
        cy.get(Cypress.env("selectors").authenticationErrorMessageNotification)
            .should('include.text', authenticationErrorText)
    })

    it('Check if HDR Manager can login', () => {
        //given
        cy.visit(Cypress.env('baseUrl'))

        //when
        cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_manager'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_manager'))
        cy.get(Cypress.env("selectors").loginSubmitButton).click()
        cy.visit(Cypress.env('hotelDeskReservationQaUrl'))

        //then
        cy.get(Cypress.env("selectors").topMenuLabels)
        cy.get(Cypress.env("selectors").adminTabContainer)
            .should('be.visible')
        cy.get(Cypress.env("selectors").reportsTabContainer)
            .should('be.visible')
        cy.get(Cypress.env("selectors").createBookingsTabContainer)
            .should('be.visible')
    })

    it('Check if HDR User can login', () => {
        //given
        cy.visit(Cypress.env('baseUrl'))

        //when
        cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
        cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_user'))
        cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_user'))
        cy.get(Cypress.env("selectors").loginSubmitButton).click()
        cy.visit(Cypress.env('hotelDeskReservationQaUrl'))

        //then
        cy.get(Cypress.env("selectors").topMenuLabels)
        cy.get(Cypress.env("selectors").reportsTabContainer)
            .should('be.visible')
        cy.get(Cypress.env("selectors").createBookingsTabContainer)
            .should('be.visible')
    })
})