describe("Check contents of Admin tab vor variety of users with different privileges", () => {

    it("Check presence of elements for admin user", () => {
        //given
        cy.loginAdminUsingUI()

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

    it("Check presence of elements for manager user", () => {
        //given
        cy.loginManagerUsingUI()

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
            .should('not.exist')
    })

    it("Check absence of admin tab for regular user", () => {
        //when
        cy.loginUserUsingUI()

        //then
        cy.get(Cypress.env("selectors").adminTabContainer)
            .should('not.exist')
    })
})

export function switchToTab(tabName) {
    cy.get("li[title=\"" + tabName + "\"]").click()
}