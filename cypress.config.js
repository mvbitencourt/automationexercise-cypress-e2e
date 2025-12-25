import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/**/*.{cy.js,cy.ts,feature}",
    setupNodeEvents(on, config) {
      // implement node event listeners here (se você usar depois)
      return config;
    },
  },
});
