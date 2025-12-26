const { defineConfig } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  stepDefinitions: ["cypress/support/stepDefinitions/**/*.js"],
});
