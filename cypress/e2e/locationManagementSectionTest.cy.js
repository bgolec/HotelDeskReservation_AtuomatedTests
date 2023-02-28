import {switchToTab} from "./adminTabTest.cy";

describe("Check Location Management section within Admin tab", () => {

    //Selectors
    let searchLocationInput = "[placeholder=\"Search ZMP Locations\"]"
    let searchButton = ".Button---search"
    let citySelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
    let manageFiltersButton = "[title=\"Manage filters\"] > button"
    let refreshButton = "[title=\"Refresh\"] > button"
    let stateSelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let countrySelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"
    let addLocationButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
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

    it("Check presence of elements inside Location Management section", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")

        //then
        cy.get(searchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(citySelect).eq(1).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(stateSelect).eq(2).should('be.visible')
        cy.get(countrySelect).eq(3).should('be.visible')
        cy.get(addLocationButton).eq(1).should('be.visible')
        cy.get(locationManagementTable).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'Location')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Street Address')
        cy.get(tableColumnHeader).eq(3).should('have.text', 'Street Address 2')
        cy.get(tableColumnHeader).eq(4).should('have.text', 'City')
        cy.get(tableColumnHeader).eq(5).should('have.text', 'State')
        cy.get(tableColumnHeader).eq(6).should('have.text', 'Zipcode')
        cy.get(tableColumnHeader).eq(7).should('have.text', 'Country')
    })

    it("Check New Location modal dialog UI", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        cy.get(addLocationButton).click()

        //then
        cy.get(newLocationModalDialog).should('be.visible')
        cy.get(newLocationModalDialogHeader).should('have.text', 'Add New Location')
        cy.get(newLocationModalDialogDescription).should('have.text', 'Add a new location for your users to register desks')
        cy.get(newLocationModalDialogTextInputLabel).eq(0).should('have.text', 'Location Name')
        cy.get(newLocationModalDialogTextInputLabel).eq(1).should('have.text', 'Street Address')
        cy.get(newLocationModalDialogTextInputLabel).eq(2).should('have.text', 'Street Address 2')
        cy.get(newLocationModalDialogTextInputLabel).eq(3).should('have.text', 'City')
        cy.get(newLocationModalDialogTextInputLabel).eq(4).should('have.text', 'Zip Code')
        cy.get(newLocationModalDialogTextInputLabel).eq(5).should('have.text', 'Phone Number')
        cy.get(newLocationModalDialogTextInputLabel).eq(6).should('have.text', 'Timezone')
        cy.get(newLocationModalDialogTextInput).should('have.length', 7)
        cy.get(newLocationModalDialogSelectLabel).eq(2).should('have.text', 'State')
        cy.get(newLocationModalDialogSelectLabel).eq(3).should('have.text', 'Country')
        cy.get(newLocationModalDialogSelect).should('have.length', 2)
        cy.get(newLocationModalDialogButton).eq(0).should('have.text', 'Cancel')
        cy.get(newLocationModalDialogButton).eq(1).should('have.text', 'Add New Location')
    })
})