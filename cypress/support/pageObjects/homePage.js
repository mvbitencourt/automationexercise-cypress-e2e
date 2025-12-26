import { cy } from "@faker-js/faker";

class HomePage {
    // Elementos
    elements = {
        buttons: {
            homeButton: () => cy.get("//a[normalize-space()='Home']"),
            productsButton: () => cy.get("//a[normalize-space()='Products']"),
            cartButton: () => cy.get("//a[normalize-space()='Cart']"),
            signupLoginButton: () => cy.get("//a[normalize-space()='Signup / Login']"),
            testCasesButton: () => cy.get("//a[normalize-space()='Test Cases']"),
            apiTestingButton: () => cy.get("//a[normalize-space()='API Testing']"),
            videoTutorialsButton: () => cy.get("//a[normalize-space()='Video Tutorials']"),
            contactUsButton: () => cy.get("//a[normalize-space()='Contact us']"),

            logoutButton: () => cy.get("//a[normalize-space()='Logout']"),
            deleteAccountButton: () => cy.get("//a[normalize-space()='Delete Account']"),
        },
        pages: {
            logo: () => cy.get("//img[@alt='Website for automation practice']"),
            loginOrRegisterSuccessful: () => cy.get("//li[10]//a[1]"),
            deleteAccountSuccessful: () => cy.get("//b[normalize-space()='Account Deleted!']"),
        },
    };

    // Acessa página inicial
    accessHomePage() {
        cy.visit("/");
        this.elements.pages.logo().should("be.visible");
    }

    // Acessa página inicial clicando no botão Home
    accessHomePageWithHomeButton() {
        this.elements.buttons.homeButton().click();
        this.elements.pages.logo().should("be.visible");
    }

    // Acessa página de produtos
    accessProductsPage() {
        this.elements.buttons.productsButton().click();
        cy.url().should("include", "/products");
    }   

    // Acessa página do carrinho
    accessCartPage() {
        this.elements.buttons.cartButton().click();
        cy.url().should("include", "/view_cart");   
    }

    // Acessa página de login
    accessLoginPage() {
        this.elements.buttons.signupLoginButton().click();
        cy.url().should("include", "/login");
    }

    // Acessa página de Test Cases
    accessTestCasesPage() {
        this.elements.buttons.testCasesButton().click();
        cy.url().should("include", "/test_cases");
    }

    // Acessa página de API Testing
    accessApiTestingPage() {
        this.elements.buttons.apiTestingButton().click();
        cy.url().should("include", "/api_list");
    }

    // Acessa página de Video Tutorials
    accessVideoTutorialsPage() {
        this.elements.buttons.videoTutorialsButton().click();
        cy.url().should("include", "/video_tutorials");
    }

    // Acessa página de Contact Us
    accessContactUsPage() {
        this.elements.buttons.contactUsButton().click();
        cy.url().should("include", "/contact_us");
    }

    // Clica em Logout (quando estiver logado)
    accessLogout() {
        this.elements.buttons.logoutButton().click();
        cy.url().should("include", "/login");
    }

    // Clica em Delete Account (quando estiver logado)
    accessDeleteAccount() {
        this.elements.buttons.deleteAccountButton().click();
        this.elements.pages.deleteAccountSuccessful().should("be.visible");
    }

}

export default new HomePage();