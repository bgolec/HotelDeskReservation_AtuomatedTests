import {switchToTab} from "./adminTabTest.cy";

//Selectors
let dateInput = '[data-testid=DatePickerWidget-textInput]'
let datePickerIcon = '[data-testid=DatePickerWidget-calendarButton]'
let locationsSelectLabel = '.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div > span'
let locationSelect = '.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div'
let floorplanSelect = '.SideBySideGroup---side_by_side > :nth-child(2) > div > div > div > div'
let mapIframe = '.FieldLayout---input_below > .CertifiedSAILExtension---sail_extension > iframe'
let mapToggleRadioButton = '.RadioSelect---choice_pair > label'
let dropdownItem = '.TetherComponent---sailcontents > div > div > .MenuWidget---listbox > li > div'
let bulkBookDesks = '.SideBySideItem---flex_item > .ButtonLayout2---button_layout > .Button---btn_wrapper > button'

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
        cy.get(floorplanSelect)
            .should('be.visible')
        cy.get(locationsSelectLabel)
            .should('have.text', 'Select a location')
        cy.get(datePickerIcon)
            .should('be.visible')
        cy.get(mapToggleRadioButton).eq(0)
            .should('have.text', "Show Map")
        cy.get(mapToggleRadioButton).eq(1)
            .should('have.text', "Show Grid")
        cy.get(bulkBookDesks).children()
            .should('have.text', "Please select a floorplan first")
        cy.get(bulkBookDesks)
            .should('be.disabled')

        //and when
        chooseLocation("Chicago")
        chooseFloorplan("One")

        //then
        cy.get(mapIframe)
            .should('be.visible')
        cy.get(bulkBookDesks)
            .should('have.text', "Bulk Book Desks")
        cy.get(bulkBookDesks)
            .should('be.enabled')
    })

    it("Check presence of elements for manager user", () => {
        //given
        cy.loginManagerUsingUI()

        //when
        switchToTab("Create Bookings")

        //then
        cy.get(dateInput)
            .should('be.visible')
        cy.get(floorplanSelect)
            .should('be.visible')
        cy.get(locationsSelectLabel)
            .should('be.visible')
        cy.get(datePickerIcon)
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
        cy.get(mapToggleRadioButton).eq(0)
            .should('have.text', "Show Map")
        cy.get(mapToggleRadioButton).eq(1)
            .should('have.text', "Show Grid")
        cy.get(bulkBookDesks).children()
            .should('have.text', "Please select a floorplan first")
        cy.get(bulkBookDesks)
            .should('be.disabled')

        //and when
        chooseLocation("Chicago")
        chooseFloorplan("One")

        //then
        cy.get(mapIframe)
            .should('be.visible')
        cy.get(bulkBookDesks)
            .should('have.text', "Bulk Book Desks")
        cy.get(bulkBookDesks)
            .should('be.enabled')
    })

    it("Check presence of elements for regular user", () => {
        //given
        cy.loginUserUsingUI()

        //when
        switchToTab("Create Bookings")

        //then
        cy.get(dateInput)
            .should('be.visible')
        cy.get(floorplanSelect)
            .should('be.visible')
        cy.get(locationsSelectLabel)
            .should('be.visible')
        cy.get(datePickerIcon)
            .should('be.visible')
        cy.get(Cypress.env("selectors").showObjectsButton)
            .should('not.exist')
        cy.get(mapToggleRadioButton).eq(0)
            .should('have.text', "Show Map")
        cy.get(mapToggleRadioButton).eq(1)
            .should('have.text', "Show Grid")
        cy.get(bulkBookDesks).children()
            .should('have.text', "Please select a floorplan first")
        cy.get(bulkBookDesks)
            .should('be.disabled')

        //and when
        chooseLocation("Chicago")
        chooseFloorplan("One")

        //then
        cy.get(mapIframe)
            .should('be.visible')
        cy.get(bulkBookDesks)
            .should('have.text', "Bulk Book Desks")
        cy.get(bulkBookDesks)
            .should('be.enabled')
    })

    function chooseLocation(location) {
        cy.get(locationSelect).eq(1).click()
        cy.get(dropdownItem).contains(location).click()
        cy.wait(1000)
    }

    function chooseFloorplan(location) {
        cy.get(floorplanSelect).eq(2).click()
        cy.get(dropdownItem).contains(location).click()
        cy.wait(1000)
    }
})