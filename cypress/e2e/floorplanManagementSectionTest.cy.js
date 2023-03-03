import {
    clickLeftHandMenuItem,
    switchToTab,
    searchButton,
    exportToExcelButton,
    manageFiltersButton,
    refreshButton,
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

describe("Check Floorplan Management section within Admin tab", () => {

    //Selectors
    let floorplanManagementSearchLocationInput = "[placeholder=\"Search workspace or location\"]"

    it("Check presence of elements inside Floorplan Management section", () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Floorplan Management")

        //then
        cy.get(floorplanManagementSearchLocationInput).should('be.visible')
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
        cy.get(floorplanManagementSearchLocationInput).should('be.visible')

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