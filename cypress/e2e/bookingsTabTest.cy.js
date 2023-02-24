import {switchToTab} from "./adminTabTest.cy";

//Selectors
let dateInput = '[data-testid=DatePickerWidget-textInput]'
let datePickerIcon = '[data-testid=DatePickerWidget-calendarButton]'
let locationsSelect = '.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div'
let workspacesSelect = '.SideBySideGroup---side_by_side > :nth-child(2) > div > div > div > div'

describe("Check contents of bookings tab vor variety of users with different privileges", () => {

    it("Check presence of elements for admin user", () => {
        //given
        cy.loginAdminUsingUI()

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

    it("Check presence of elements for manager user", () => {
        //given
        cy.loginManagerUsingUI()

        //when
        switchToTab("Create Bookings")

        //then
        cy.get(dateInput)
            .should('be.visible')
        cy.get(workspacesSelect)
            .should('be.visible')
        cy.get(locationsSelect)
            .should('be.visible')
        cy.get(datePickerIcon)
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
    })

    it("Check presence of elements for regular user", () => {
        //given
        cy.loginUserUsingUI()

        //when
        switchToTab("Create Bookings")

        //then
        cy.get(dateInput)
            .should('be.visible')
        cy.get(workspacesSelect)
            .should('be.visible')
        cy.get(locationsSelect)
            .should('be.visible')
        cy.get(datePickerIcon)
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
    })
})