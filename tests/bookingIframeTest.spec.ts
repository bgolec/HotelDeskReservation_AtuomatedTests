import {test, expect} from '@playwright/test';
import playwrightConfig from "../playwright.config";
import {CreateBookingsPage} from "../playwright_pages/createBookingsPage";

test.describe('Create bookings iframe tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto(playwrightConfig.use.baseURL)

        await page.getByRole('link', {name: 'Appian Accounts'}).click()
        await page.locator('#un').type(process.env.CYPRESS_APPIAN_ADMIN_USERNAME)
        await page.locator('#pw').type(process.env.CYPRESS_APPIAN_ADMIN_PW)
        await page.getByText('Sign In').click()
        await page.goto('https://appianqa.zimpatica.com/suite/sites/hotel-desk-reservation')
    })

    test('Create reservation test', async ({page}) => {
        //given
        const createBookingsPage = new CreateBookingsPage(page);

        //then
        await expect(createBookingsPage.page).toHaveTitle("Create Bookings - Hotel Desk Reservation")

        //when
        await createBookingsPage.chooseLocation('Location 1')
        await createBookingsPage.chooseFloorplan('Floorplan 1')
        await createBookingsPage.chooseDesk("Desk_16")

        //then
        await expect(createBookingsPage.page.getByText('Booking for: ' + createBookingsPage.getTomorrowsDate()))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('Desk ID'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('Desk_16'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('[Floorplan 1] Default Zone'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('Permanently Assigned?'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('Start Date Time'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('End Date Time'))
            .toBeVisible()
        await expect(createBookingsPage.page.getByText('Booking Notes'))
            .toBeVisible()

        //and when
        await createBookingsPage.chooseStartDate(' 10th')
        await createBookingsPage.chooseEndDate('20th')
        await createBookingsPage.chooseStartTime('12:00 AM')
        await createBookingsPage.chooseEndTime('3:00 AM')
        await createBookingsPage.typeBookingNotes('Some random notes @#$%^&*()_+=-0987654321')
        await createBookingsPage.clickReserveDesk()

        //then
        await expect(createBookingsPage.getFrameLocator.locator('#Desk_16'))
            .toHaveAttribute('style', 'fill: rgb(255, 0, 0); outline: rgb(255, 0, 0) solid thick; cursor: pointer;')
    })
})