import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: [
      "cypress/e2e/**/*.cy.{js,ts}",
      "cypress/e2e/features/**/*.feature",
    ],
    async setupNodeEvents(on, config) {
      // Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Bundler com esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
