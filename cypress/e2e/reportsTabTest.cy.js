import {switchToTab} from "./adminTabTest.cy.js";

describe("Check contents of Reports tab vor variety of users with different privileges", () => {

    it("Check presence of elements for admin user", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Reports")

        //then
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Long-term Desk Users")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Compatibility Breakdown")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Popular Days")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('be.visible')
    })

    it("Check presence of elements for manager user", () => {
        //given
        cy.loginManagerUsingUI()

        //when
        switchToTab("Reports")

        //then
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Long-term Desk Users")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Compatibility Breakdown")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Popular Days")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
    })

    it("Check presence of elements for regular user", () => {
        //given
        cy.loginUserUsingUI()

        //when
        switchToTab("Reports")

        //then
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Long-term Desk Users")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Compatibility Breakdown")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Popular Days")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Utilization")
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
    })
})