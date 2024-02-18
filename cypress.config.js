const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  },
  retries: {
    runMode: 1,
  },
  projectId:'',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/e2e/*.cy.js"
  },
});
