import {clickLeftHandMenuItem} from "./adminTabTest.cy";
import {switchToTab} from "./adminTabTest.cy";
import 'cypress-iframe';

describe("Check Floorplan Management section within Admin tab", () => {

    //Selectors
    let floorplanManagementSection = ".MultiColumnLayout---column_layout.MultiColumnLayout---margin_above_none.MultiColumnLayout---stack_when_phone.MultiColumnLayout---stack_when_tablet_portrait.MultiColumnLayout---stack_when_tablet_landscape.MultiColumnLayout---stack_when_desktop_narrow.appian-context-last-in-list"
    let searchLocationInput = "[placeholder=\"Search workspace or location\"]"
    let searchButton = ".Button---search"
    let citySelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
    let manageFiltersButton = "[title=\"Manage filters\"] > button"
    let refreshButton = "[title=\"Refresh\"] > button"
    let stateSelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let countrySelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let addFloorplanButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
    let locationManagementTable = ".PagingGridLayout---table"
    let tableColumnHeader = "th > div > :nth-child(1)"
    let newLocationModalDialog = ".ContentLayout---content_layout.ContentLayout---inModal"
    let newLocationModalDialogHeader = ".TitleText---page_header"
    let newLocationModalDialogDescription = ".FieldLayout---input_below > [data-testid=\"ParagraphText-paragraph\"]"
    let newLocationModalDialogTextInputLabel = ".FieldLayout---label_above > label"
    let newLocationModalDialogTextInput = ".FieldLayout---input_below > div > input"
    let newLocationModalDialogSelectLabel = ".FieldLayout---label_above > span"
    let newLocationModalDialogSelect = ".FieldLayout---field_layout > .FieldLayout---input_below > .DropdownWidget---dropdown"
    let newLocationModalDialogButton = ".Button---inModalDialogLayout"

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
        cy.get(addFloorplanButton).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'Floorplan')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Location')
    })

    it.skip("Check Add Floorplan modal dialog UI", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Floorplan Management")
        //then
        cy.get(searchLocationInput).should('be.visible')

        //and when
        cy.get(addFloorplanButton).click()
        //Modal dialog forms not implemented yet
    })
})