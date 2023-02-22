import {switchToTab} from "./adminTabTest.cy";

describe("Check contents of bookings tab vor variety of users with different privileges", () => {

    //Selectors
    let dateInput = '[data-testid=DatePickerWidget-textInput]'
    let datePickerIcon = '[data-testid=DatePickerWidget-calendarButton]'
    let locationsSelect = '.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div'
    let workspacesSelect = '.SideBySideGroup---side_by_side > :nth-child(2) > div > div > div > div'


    it("Check presence of elements for admin user", () => {
        //given
        cy.loginUsingUI()

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
// export function switchToTab(tabName) {
//     cy.get("li[title=\"" + tabName + "\"]").click()
// }