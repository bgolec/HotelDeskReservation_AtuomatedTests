describe("Check contents of Admin tab vor variety of users with different privileges", () => {

    it("Check presence of elements for admin user", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")

        //then
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Location Management")
            .should('be.visible')
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Floorplan Management")
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
        cy.get(Cypress.env("selectors").textParagraphContainer).contains("Floorplan Management")
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

export function clickLeftHandMenuItem(itemName) {
    cy.get(Cypress.env("selectors").textParagraphContainer).contains(itemName)
        .click()
}

export let searchButton = ".Button---search"
export let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
export let manageFiltersButton = "[title=\"Manage filters\"] > button"
export let refreshButton = "[title=\"Refresh\"] > button"
export let addItemButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
export let table = ".PagingGridLayout---table"
export let tableColumnHeader = "th > div > :nth-child(1)"
export let itemSelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
export let modalDialog = ".ContentLayout---content_layout.ContentLayout---inModal"
export let modalDialogHeader = ".TitleText---page_header"
export let modalDialogDescription = ".FieldLayout---input_below > [data-testid=\"ParagraphText-paragraph\"]"
export let modalDialogTextInputLabel = ".FieldLayout---label_above > label"
export let modalDialogTextInput = ".FieldLayout---input_below > div > input"
export let modalDialogSelectLabel = ".FieldLayout---label_above > span"
export let modalDialogSelect = ".FieldLayout---field_layout > .FieldLayout---input_below > .DropdownWidget---dropdown"
export let modalDialogButton = ".Button---inModalDialogLayout"