// Testes unitarios para os metodos da HomePage da pageObjects
import { it } from "@faker-js/faker";
import homePage from "../support/pageObjects/homePage";
import loginPage from "../support/pageObjects/loginPage";

describe("Home Page Methods", () => {
    beforeEach(() => {
        // Executa antes de cada teste
        homePage.accessHomePage();
    });

    it("should access the login page", () => {
        homePage.accessLoginPage();
    });

    it("should access the cart page", () => {
        homePage.accessCartPage();
        cy.url().should("include", "/view_cart");
    });

    it("should access the home page", () => {
        homePage.accessHomePage();
        homePage.elements.pages.logo().should("be.visible");
    });

    it("should access the products page", () => {
        homePage.accessProductsPage();
        cy.url().should("include", "/products");
    });

    it("should access the contact us page", () => {
        homePage.accessContactUsPage();
        cy.url().should("include", "/contact_us");
    });

    it("should logout successfully", () => {
        // Primeiro, faça login para que o botão de logout esteja disponível
        loginPage.accessLoginPage();
        loginPage.login("emailtestautomationfixo@email.com", "123456");
        homePage.accessLogout();
        cy.url().should("include", "/login");
    });

    // it("should delete account successfully", () => {
    //     // Primeiro, faça login para que o botão de delete account esteja disponível
    //     loginPage.accessLoginPage();
    //     loginPage.login("marcusvinicius@gmail.com", "Senh@TestAutomationFixo");
    //     homePage.accessDeleteAccount();
    //     homePage.elements.pages.deleteAccountSuccessful().should("be.visible");
    // });

    it("should access the test cases page", () => {
        homePage.accessTestCasesPage();
        cy.url().should("include", "/test_cases");
    });

    it("should access the API testing page", () => {
        homePage.accessApiTestingPage();
        cy.url().should("include", "/api_list");
    });

    it("should access the video tutorials page", () => {
        homePage.accessVideoTutorialsPage();
        cy.url().should("include", "/video_tutorials");
    });

    it("should access the cart page", () => {
        homePage.accessCartPage();
        cy.url().should("include", "/view_cart");
    });
});