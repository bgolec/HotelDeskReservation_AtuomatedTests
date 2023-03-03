import {clickLeftHandMenuItem} from "./adminTabTest.cy";
import {switchToTab} from "./adminTabTest.cy";

describe("Check Floorplan Management section within Admin tab", () => {

    //Selectors
    let searchLocationInput = "[placeholder=\"Search workspace or location\"]"
    let searchButton = ".Button---search"
    let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
    let manageFiltersButton = "[title=\"Manage filters\"] > button"
    let refreshButton = "[title=\"Refresh\"] > button"
    let addItemButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
    let table = ".PagingGridLayout---table"
    let tableColumnHeader = "th > div > :nth-child(1)"
    let modalDialog = ".ContentLayout---content_layout.ContentLayout---inModal"
    let modalDialogHeader = ".TitleText---page_header"
    let modalDialogDescription = ".FieldLayout---input_below > [data-testid=\"ParagraphText-paragraph\"]"
    let modalDialogTextInputLabel = ".FieldLayout---label_above > label"
    let modalDialogTextInput = ".FieldLayout---input_below > div > input"
    let modalDialogSelectLabel = ".FieldLayout---label_above > span"
    let modalDialogSelect = ".FieldLayout---field_layout > .FieldLayout---input_below > .DropdownWidget---dropdown"
    let modalDialogButton = ".Button---inModalDialogLayout"

    it("Check presence of elements inside Floorplan Management section", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Floorplan Management")

        //then
        cy.get(searchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(addItemButton).should('be.visible')
        cy.get(table).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'Floorplan')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Location')
    })

    it("Check Add Floorplan modal dialog UI", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Floorplan Management")
        //then
        cy.get(searchLocationInput).should('be.visible')

        //and when
        cy.get(addItemButton).click()

        //then
        cy.get(modalDialog).should('be.visible')
        cy.get(modalDialogHeader).should('have.text', 'Add New Floorplan')
        cy.get(modalDialogDescription).should('have.text', 'Add a new floorplan for your users to register desks,')
        cy.get(modalDialogTextInputLabel).eq(0).should('have.text', 'Floorplan Name')
        cy.get(modalDialogTextInput).eq(0).should('be.visible')
        cy.get(modalDialogTextInput).should('have.length', 1)
        cy.get(modalDialogSelect).should('have.length', 1)
        cy.get(modalDialogSelect).eq(0).should('be.visible')
        cy.get(modalDialogSelectLabel).eq(2).should('have.text', 'Location')
        cy.get(modalDialogButton).eq(0).should('have.text', 'Cancel')
        cy.get(modalDialogButton).eq(1).should('have.text', 'Add Floorplan')
    })
})