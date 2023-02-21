const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://appianqa.zimpatica.com/suite",
    hotelDeskReservationQaUrl: "https://appianqa.zimpatica.com/suite/sites/hotel-desk-reservation",
    username: "ble@spyro-soft.com",
    password: process.env.CYPRESS_APPIAN_PW,
    selectors: {
      usernameInput: "#un",
      passwordInput: "#pw",
      appianAccountHyperlink: ".button_box_links.wrap > :nth-child(2) > a",
      loginSubmitButton: "input[type=submit]",
      topMenuLabels: ".SiteMenuTab---nav_label",
      authenticationErrorMessageNotification: "#errorMsg"
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
