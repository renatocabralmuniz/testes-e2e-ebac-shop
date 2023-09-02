const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8wfdt2',
  viewportWidth: 1368,
  viewportHeight: 768,

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

  

