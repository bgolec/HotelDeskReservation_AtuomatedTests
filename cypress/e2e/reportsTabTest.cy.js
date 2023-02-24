import {switchToTab} from "./adminTabTest.cy.js";

describe("Check contents of Reports tab vor variety of users with different privileges", () => {

    before(() => {
        cy.loginAdminUsingUI()
    })

    it("Check presence of elements for admin user", () => {

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
    })
})

export function clickLeftHandMenuItem(itemName) {
    cy.get(Cypress.env("selectors").textParagraphContainer).contains(itemName)
        .click()
}