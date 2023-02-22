describe("Check contents of Admin tab vor variety of users with different privileges", () => {

    it("Check presence of elements for admin user", () => {
        //given
        cy.loginUsingUI()

        //when
        switchToTab("Admin Page")

        //then
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Location Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Workspace Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Zone Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Desk Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Group Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Upload a Map")
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('be.visible')
    })
})

export function switchToTab(tabName) {
    cy.get("li[title=\"" + tabName + "\"]").click()
}