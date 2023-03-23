import {FrameLocator, Locator, Page} from "@playwright/test";

export class CreateBookingsPage {
    readonly page: Page;
    readonly locationSelectLocator: Locator;
    readonly floorplanSelectLocator: Locator;
    readonly bookingSectionLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locationSelectLocator = page.locator('.SideBySideGroup---side_by_side > :nth-child(1) > div > div > div > div').nth(2);
        this.floorplanSelectLocator = page.locator('.SideBySideGroup---side_by_side > :nth-child(2) > div > div > div > div');
        this.bookingSectionLocator = page.locator('.BoxLayout---box_body')
    }


    getTomorrowsDate(): string {
        const tomorrow = new Date(new Date().getTime() + 86400000)
        return tomorrow.toLocaleDateString()
    }

    get getFrameLocator(): FrameLocator {
        return this.page.frameLocator('.CertifiedSAILExtension---sail_extension').nth(1)
    }

    async chooseLocation(location: string) {
        await this.locationSelectLocator.click()
        await this.page.getByText(location).click()

    }

    async chooseFloorplan(floorplan: string) {
        await this.floorplanSelectLocator.click()
        await this.page.getByText(floorplan).click()
    }

    async chooseDesk(deskName: string) {
        await this.page.frameLocator('.CertifiedSAILExtension---sail_extension').nth(1)
            .locator('#' + deskName)
            .click()
    }

    async typeBookingNotes(bookingNotes: string) {
        await this.page.locator('.ParagraphWidget---container.ParagraphWidget---height_medium > textarea')
            .fill(bookingNotes)
    }

    async clickReserveDesk() {
        await this.page.getByText('Reserve Desk')
            .click()
    }

    async clickCancel() {
        await this.page.getByText('Cancel')
            .click()
    }

    async clickStartDateTimeIcon() {
        await this.page.locator('.DatePickerWidget---calendar_btn').nth(1)
            .click()
    }

    async clickEndDateTimeIcon() {
        await this.page.locator('.DatePickerWidget---calendar_btn').nth(2)
            .click()
    }

    async chooseStartDate(day: string) {
        await this.clickStartDateTimeIcon()
        await this.page.getByRole('button', {name: day})
            .click()
    }

    async chooseEndDate(day: string) {
        await this.clickEndDateTimeIcon()
        await this.page.getByRole('button', {name: day})
            .click()
    }

    async clickStartTimeSelect() {
        await this.page.locator('.TimeWidget---dropdown.TimeWidget---time_picker').nth(1)
            .click()
    }

    async chooseStartTime(time: string) {
        await this.clickStartTimeSelect()
        await this.page.locator('.TimeWidget---dropdown.TimeWidget---time_picker > input').nth(1)
            .fill(time)
    }

    async clickEndTimeSelect() {
        await this.page.locator('.TimeWidget---dropdown.TimeWidget---time_picker').nth(2)
            .click()
    }

    async chooseEndTime(time: string) {
        await this.clickEndTimeSelect()
        await this.page.locator('.TimeWidget---dropdown.TimeWidget---time_picker > input').nth(2)
            .fill(time)
    }
}