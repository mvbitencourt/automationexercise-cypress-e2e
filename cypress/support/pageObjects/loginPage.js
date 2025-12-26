import homePage from "HomePage";

class LoginPage {
    // Elementos
    elements = {
        inputs: {
            emailLoginInput: () => cy.get("//input[@data-qa='login-email']"),
            passwordLoginInput: () => cy.get("//input[@data-qa='login-password']"),
            nameRegisterInput: () => cy.get("//input[@placeholder='Name']"),
            emailRegisterInput: () => cy.get("//input[@data-qa='signup-email']"),
        },
        buttons: {
            loginButton: () => cy.get("//button[normalize-space()='Login']"),
            registerButton: () => cy.get("//button[normalize-space()='Signup']"),
        },
        pages: {
            loginRegisterPage: () => cy.get("//h2[normalize-space()='Login to your account']"),
        },
        messages: {
            successLoginOrRegister: () => cy.get("//li[10]//a[1]"),
            errorLoginEmailOrPasswordIncorrect: () => cy.get("//p[normalize-space()='Your email or password is incorrect!']"),
        },
    };

    accessLoginPage() {
        cy.visit("/login");
        this.elements.pages.loginRegisterPage().should("be.visible");
    }

    fillEmailInput(email) {
        this.elements.inputs.emailLoginInput().type(email);
    }

    fillPasswordInput(password) {
        this.elements.inputs.passwordLoginInput().type(password);
    }

    clickLoginButton() {
        this.elements.buttons.loginButton().click();
    }

    // Realiza login com sucesso
    loginSuccessful(email, password) {
        this.fillEmailInput(email);
        this.fillPasswordInput(password);
        this.clickLoginButton();
    }

    validateLoginSuccessful(name) {
        this.elements.messages
            .successLoginOrRegister()
            .should("be.visible")
            .and("contain", "Logged in as " + name);
    }

    validadeIncorrectEmailOrPasswordMessage() {
        this.elements.messages
            .errorLoginEmailOrPasswordIncorrect()  
            .should("be.visible")
            .and("contain", "Your email or password is incorrect!");
    }

    validatePasswordFieldIsInvalid() {
        this.elements.inputs.passwordLoginInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    validateEmailFieldIsInvalid() {
        this.elements.inputs.emailLoginInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    loginUnsuccessfulWithInvalidFormattedEmail(invalidEmail, password) {
        this.elements.inputs.emailLoginInput().type(invalidEmail);
        this.elements.inputs.passwordLoginInput().type(password);
        this.elements.buttons.loginButton().click();
    }

    loginUnsuccessfulWithWrongPassword(email, invalidPassword) {
        this.elements.inputs.emailLoginInput().type(email);
        this.elements.inputs.passwordLoginInput().type(invalidPassword);
        this.elements.buttons.loginButton().click();
    }

    loginUnsuccessfulWithoutPassword(email) {
        this.elements.inputs.emailLoginInput().type(email);
        this.elements.buttons.loginButton().click();
    }

    loginUnsuccessfulWithoutEmail(password) {
        this.elements.inputs.passwordLoginInput().type(password);
        this.elements.buttons.loginButton().click();
    }

    loginUnsuccessfulWithoutBothCredentials() {
        this.elements.buttons.loginButton().click();
    }

    loginUnsuccessfulWithNonExistentEmail(nonExistentEmail, password) {
        this.elements.inputs.emailLoginInput().type(nonExistentEmail);
        this.elements.inputs.passwordLoginInput().type(password);
        this.elements.buttons.loginButton().click();
    }

    validateLoginUnsuccessful(errorMessage) {
        cy.contains(errorMessage).should("be.visible");
    }
}

export default new LoginPage();