import {
    switchToTab,
    searchButton,
    exportToExcelButton,
    manageFiltersButton,
    refreshButton,
    itemSelect,
    addItemButton,
    table,
    tableColumnHeader,
    modalDialog,
    modalDialogHeader,
    modalDialogTextInput,
    modalDialogTextInputLabel,
    modalDialogSelect,
    modalDialogSelectLabel,
    modalDialogButton,
    modalDialogDescription
} from "./adminTabTest.cy";

describe("Check Location Management section within Admin tab", () => {

    //Selectors
    let floorplanManagementSearchLocationInput = "[placeholder=\"Search Locations\"]"

    it("Check presence of elements inside Location Management section", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")

        //then
        cy.get(floorplanManagementSearchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(itemSelect).eq(1).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(itemSelect).eq(2).should('be.visible')
        cy.get(itemSelect).eq(3).should('be.visible')
        cy.get(addItemButton).should('be.visible')
        cy.get(table).should('be.visible')
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
        cy.get(addItemButton).click()

        //then
        cy.get(modalDialog).should('be.visible')
        cy.get(modalDialogHeader).should('have.text', 'Add New Location')
        cy.get(modalDialogDescription).should('have.text', 'Add a new location for your users to register desks')
        cy.get(modalDialogTextInputLabel).eq(0).should('have.text', 'Location Name')
        cy.get(modalDialogTextInputLabel).eq(1).should('have.text', 'Street Address')
        cy.get(modalDialogTextInputLabel).eq(2).should('have.text', 'Street Address 2')
        cy.get(modalDialogTextInputLabel).eq(3).should('have.text', 'City')
        cy.get(modalDialogTextInputLabel).eq(4).should('have.text', 'Zip Code')
        cy.get(modalDialogTextInputLabel).eq(5).should('have.text', 'Phone Number')
        cy.get(modalDialogTextInputLabel).eq(6).should('have.text', 'Timezone')
        cy.get(modalDialogTextInput).should('have.length', 7)
        cy.get(modalDialogSelectLabel).eq(2).should('have.text', 'State')
        cy.get(modalDialogSelectLabel).eq(3).should('have.text', 'Country')
        cy.get(modalDialogSelect).should('have.length', 2)
        cy.get(modalDialogButton).eq(0).should('have.text', 'Cancel')
        cy.get(modalDialogButton).eq(1).should('have.text', 'Add New Location')
    })
})