const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawsome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawsome-reporter/plugin')(on)
    },
  },
});
