import {switchToTab} from "./adminTabTest.cy";

//Selectors
let dateInput = '[data-testid=DatePickerWidget-textInput]'
let datePickerIcon = '[data-testid=DatePickerWidget-calendarButton]'
let locationsSelect = '.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div'
let workspacesSelect = '.SideBySideGroup---side_by_side > :nth-child(2) > div > div > div > div'

describe("Check contents of bookings tab vor variety of users with different privileges", () => {

    before(() => {
        cy.loginAdminUsingUI()
    })

    it("Check presence of elements for admin user", () => {
        //when
        switchToTab("Create Bookings")

        //then
        cy.get(dateInput)
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('be.visible')
        cy.get(workspacesSelect)
            .should('be.visible')
        cy.get(locationsSelect)
            .should('be.visible')
        cy.get(datePickerIcon)
            .should('be.visible')
    })
})