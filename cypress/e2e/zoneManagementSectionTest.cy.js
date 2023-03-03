import {clickLeftHandMenuItem} from "./adminTabTest.cy";
import {switchToTab} from "./adminTabTest.cy";

describe('Check Zone Management section within Admin tab', () => {

    //Selectors
    let searchLocationInput = "[placeholder=\"Search Zones\"]"
    let searchButton = ".Button---search"
    let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
    let manageFiltersButton = "[title=\"Manage filters\"] > button"
    let refreshButton = "[title=\"Refresh\"] > button"
    let addItemButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
    let table = ".PagingGridLayout---table"
    let tableColumnHeader = "th > div"
    let itemSelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let modalDialog = ".ContentLayout---content_layout.ContentLayout---inModal"
    let modalDialogHeader = ".TitleText---page_header"
    let modalDialogDescription = ".FieldLayout---input_below > [data-testid=\"ParagraphText-paragraph\"]"
    let modalDialogTextInputLabel = ".FieldLayout---label_above > label"
    let modalDialogTextInput = ".FieldLayout---input_below > div > input"
    let modalDialogSelectLabel = ".FieldLayout---label_above > span"
    let modalDialogSelect = ".FieldLayout---field_layout > .FieldLayout---input_below > .DropdownWidget---dropdown"
    let modalDialogButton = ".Button---inModalDialogLayout"

    it('Check presence of elements inside Zone Management section', () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Zone Management")

        //then
        cy.get(searchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(itemSelect).eq(1).should('be.visible')
        cy.get(itemSelect).eq(2).should('be.visible')
        cy.get(addItemButton).should('be.visible')
        cy.get(table).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'Zone')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Floorplan')
        cy.get(tableColumnHeader).eq(3).should('have.text', 'Location')
    })

    it("Check Add Zone modal dialog UI", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Zone Management")
        //then
        cy.get(searchLocationInput).should('be.visible')

        //and when
        cy.get(addItemButton).click()

        //then
        cy.get(modalDialog).should('be.visible')
        cy.get(modalDialogHeader).should('have.text', 'Add New Zone')
        cy.get(modalDialogDescription).should('have.text', 'Add a new zone for your users to register desks')
        cy.get(modalDialogTextInput).should('have.length', 1)
        cy.get(modalDialogTextInputLabel).eq(0).should('have.text', 'Zone Name')
        cy.get(modalDialogTextInput).eq(0).should('be.visible')
        cy.get(modalDialogSelect).should('have.length', 1)
        cy.get(modalDialogSelect).eq(0).should('be.visible')
        cy.get(modalDialogSelectLabel).eq(2).should('have.text', 'Floorplan')
        cy.get(modalDialogButton).eq(0).should('have.text', 'Cancel')
        cy.get(modalDialogButton).eq(1).should('have.text', 'ADD ZONE')
    })
})