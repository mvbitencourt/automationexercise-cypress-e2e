import homePage from "HomePage";

class LoginPage {
    // Elementos
    elements = {
        inputs: {
            emailLoginInput: () => cy.get("//input[@data-qa='login-email']"),
            passwordLoginInput: () => cy.get("//input[@data-qa='login-password']"),
            nameRegisterInput: () => cy.get("//input[@placeholder='Name']"),
            emailRegisterInput: () => cy.get("//input[@data-qa='signup-email']"),
            titleRegisterInput: () => cy.get("//input[@id='id_gender1']"),
            passwordRegisterInput: () => cy.get("//input[@id='password']"),
            firstNameRegisterInput: () => cy.get("//input[@id='first_name']"),
            lastNameRegisterInput: () => cy.get("//input[@id='last_name']"),
            companyRegisterInput: () => cy.get("//input[@id='company']"),
            addressRegisterInput: () => cy.get("//input[@id='address1']"),
            address2RegisterInput: () => cy.get("//input[@id='address2']"),
            stateRegisterInput: () => cy.get("//input[@id='state']"),
            cityRegisterInput: () => cy.get("//input[@id='city']"),
            zipCodeRegisterInput: () => cy.get("//input[@id='zipcode']"),
            mobileNumberRegisterInput: () => cy.get("//input[@id='mobile_number']"),
        },
        buttons: {
            loginButton: () => cy.get("//button[normalize-space()='Login']"),
            registerButton: () => cy.get("//button[normalize-space()='Signup']"),
            createAccountButton: () => cy.get("//button[normalize-space()='Create Account']"),
            continueButton: () => cy.get("//a[normalize-space()='Continue']"),
            logoutButton: () => cy.get("//a[normalize-space()='Logout']"),
            deleteAccountButton: () => cy.get("//a[normalize-space()='Delete Account']"),
        },
        selects: {
            dayRegisterSelect: () => cy.get("//select[@id='days']"),
            monthRegisterSelect: () => cy.get("//select[@id='months']"),
            yearRegisterSelect: () => cy.get("//select[@id='years']"),
            countryRegisterSelect: () => cy.get("//select[@id='country']"),
        },
        checkboxes: {
            newsletterCheckbox: () => cy.get("//input[@id='newsletter']"),
            specialOffersCheckbox: () => cy.get("//input[@id='optin']"),
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