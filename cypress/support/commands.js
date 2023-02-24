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

Cypress.Commands.add('loginAdminUsingUI', () => {
    cy.visit(Cypress.env('baseUrl'))

    //when
    cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
    cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_admin'))
    cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_admin'))
    cy.get(Cypress.env("selectors").loginSubmitButton).click()
    cy.visit(Cypress.env('hotelDeskReservationQaUrl'))
})

Cypress.Commands.add('loginManagerUsingUI', () => {
    cy.visit(Cypress.env('baseUrl'))

    //when
    cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
    cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_manager'))
    cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_manager'))
    cy.get(Cypress.env("selectors").loginSubmitButton).click()
    cy.visit(Cypress.env('hotelDeskReservationQaUrl'))
})

Cypress.Commands.add('loginUserUsingUI', () => {
    cy.visit(Cypress.env('baseUrl'))

    //when
    cy.get(Cypress.env("selectors").appianAccountHyperlink).click()
    cy.get(Cypress.env("selectors").usernameInput).type(Cypress.env('username_user'))
    cy.get(Cypress.env("selectors").passwordInput).type(Cypress.env('password_user'))
    cy.get(Cypress.env("selectors").loginSubmitButton).click()
    cy.visit(Cypress.env('hotelDeskReservationQaUrl'))
})