import {
    clickLeftHandMenuItem,
    switchToTab,
    searchButton,
    exportToExcelButton,
    manageFiltersButton,
    refreshButton,
    itemSelect,
    addItemButton,
    table,
    modalDialog,
    modalDialogHeader,
    modalDialogTextInput,
    modalDialogTextInputLabel,
    modalDialogSelect,
    modalDialogSelectLabel,
    modalDialogDescription,
    modalDialogButton
} from "./adminTabTest.cy"

describe('Check Zone Management section within Admin tab', () => {

    //Selectors
    let zoneManagementSearchLocationInput = "[placeholder=\"Search Zones\"]"
    let tableColumnHeader = "th > div"


    it('Check presence of elements inside Zone Management section', () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Zone Management")

        //then
        cy.get(zoneManagementSearchLocationInput).should('be.visible')
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
        cy.get(zoneManagementSearchLocationInput).should('be.visible')

        //and when
        cy.get(addItemButton).click()

        //then
        cy.get(modalDialog).should('be.visible')
        cy.get(modalDialogHeader).should('have.text', 'Add New Zone')
        cy.get(modalDialogDescription).should('have.text', 'Add a new zone for your users to register desks')
        cy.get(modalDialogTextInput).should('have.length', 1)
        cy.get(modalDialogTextInputLabel).eq(0).should('have.text', 'Zone Name')
        cy.get(modalDialogTextInput).eq(0).should('be.visible')
        cy.get(modalDialogSelect).should('have.length', 2)
        cy.get(modalDialogSelect).eq(0).should('be.visible')
        cy.get(modalDialogSelectLabel).eq(2).should('have.text', 'Floorplan')
        cy.get(modalDialogButton).eq(0).should('have.text', 'Cancel')
        cy.get(modalDialogButton).eq(1).should('have.text', 'ADD ZONE')
    })
})