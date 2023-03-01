const {defineConfig} = require("cypress");

module.exports = defineConfig({
    env: {
        baseUrl: "https://appianqa.zimpatica.com/suite",
        hotelDeskReservationQaUrl: "https://appianqa.zimpatica.com/suite/sites/hotel-desk-reservation",
        username_admin: process.env.CYPRESS_APPIAN_ADMIN_USERNAME,
        password_admin: process.env.CYPRESS_APPIAN_ADMIN_PW,
        username_manager: "HDR_Manager",
        password_manager: process.env.CYPRESS_APPIAN_HDR_MANAGER_PW,
        username_user: "HDR_User",
        password_user: process.env.CYPRESS_APPIAN_HDR_USER_PW,
        selectors: {
            usernameInput: "#un",
            passwordInput: "#pw",
            appianAccountHyperlink: ".button_box_links.wrap > :nth-child(2) > a",
            loginSubmitButton: "input[type=submit]",
            topMenuLabels: ".SiteMenuTab---nav_label",
            authenticationErrorMessageNotification: "#errorMsg",
            textParagraphContainer: "[data-testid=ParagraphText-paragraph]",
            showObjectsButton: ".SiteXrayButton---xrayButton",
            adminTabContainer: "li[title=\"Admin Page\"]",
            createBookingsTabContainer: "li[title=\"Create Bookings\"]",
            reportsTabContainer: "li[title=\"Reports\"]",
        },
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

            getCompareSnapshotsPlugin(on, config);
        },
    },
});
