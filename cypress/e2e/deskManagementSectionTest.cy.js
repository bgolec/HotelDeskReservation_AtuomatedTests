import {
    switchToTab,
    clickLeftHandMenuItem,
    searchButton,
    exportToExcelButton,
    manageFiltersButton,
    refreshButton,
    addItemButton,
    table,
    tableColumnHeader,
    itemSelect
} from "./adminTabTest.cy"

describe('Check Desk Management section within Admin tab', () => {

    //Selectors
    let deskManagementSearchLocationInput = "[placeholder=\"Search Desks\"]"

    it('Check presence of elements inside Desk Management section', () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Desk Management")

        //then
        cy.get(deskManagementSearchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(itemSelect).should('have.length', 4)
        cy.get(itemSelect).eq(1).should('be.visible')
        cy.get(itemSelect).eq(2).should('be.visible')
        cy.get(itemSelect).eq(3).should('be.visible')
        cy.get(addItemButton).should('be.visible')
        cy.get(table).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'SVG Id')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Zone')
        cy.get(tableColumnHeader).eq(3).should('have.text', 'Is Permanent?')
        cy.get(tableColumnHeader).eq(4).should('have.text', 'Assigned To')
    })
})