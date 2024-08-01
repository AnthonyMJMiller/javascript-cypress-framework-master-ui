const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.gamesforthebrain.com/game/checkers/",
    supportFile: 'cypress/support/index.js',
    specPattern: '**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
