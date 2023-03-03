import {switchToTab} from "./adminTabTest.cy";
import {clickLeftHandMenuItem} from "./adminTabTest.cy";

describe('Check Desk Management section within Admin tab', () => {

    //Selectors
    let searchLocationInput = "[placeholder=\"Search Desks\"]"
    let searchButton = ".Button---search"
    let exportToExcelButton = "[title=\"Export to Excel - Exports the currently filtered list of records as an Excel file.\"] > button"
    let manageFiltersButton = "[title=\"Manage filters\"] > button"
    let refreshButton = "[title=\"Refresh\"] > button"
    let addItemButton = ".FieldLayout---input_below > div > div > .Button---btn.Button---default_direction.Button---secondary.Button---small.appian-context-first-in-list.appian-context-last-in-list"
    let table = ".PagingGridLayout---table"
    let tableColumnHeader = "th > div > :nth-child(1)"
    let itemSelect = ".DynamicWidthWidget---dynamic_item.DynamicWidthWidget---flex_grow > div"

    it('Check presence of elements inside Desk Management section', () => {
        //given
        cy.loginAdminUsingUI()

        //when
        switchToTab("Admin Page")
        clickLeftHandMenuItem("Desk Management")

        //then
        cy.get(searchLocationInput).should('be.visible')
        cy.get(searchButton).should('be.visible')
        cy.get(exportToExcelButton).should('be.visible')
        cy.get(manageFiltersButton).should('be.visible')
        cy.get(refreshButton).should('be.visible')
        cy.get(itemSelect).should('have.length', 4)
        cy.get(itemSelect).eq(1).should('be.visible')
        cy.get(itemSelect).eq(2).should('be.visible')
        cy.get(itemSelect).eq(3).should('be.visible')
        cy.get(addItemButton).should('not.exist')
        cy.get(table).should('be.visible')
        cy.get(tableColumnHeader).eq(0).should('have.text', 'Id')
        cy.get(tableColumnHeader).eq(1).should('have.text', 'SVG Id')
        cy.get(tableColumnHeader).eq(2).should('have.text', 'Zone')
        cy.get(tableColumnHeader).eq(3).should('have.text', 'Is Permanent?')
        cy.get(tableColumnHeader).eq(4).should('have.text', 'Assigned To')
    })
})