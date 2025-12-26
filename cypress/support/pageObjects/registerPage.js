import loginPage from "loginPage";

class RegisterPage {
    // Elementos
    elements = {
        inputs: {
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
            createAccountButton: () => cy.get("//button[normalize-space()='Create Account']"),
            continueButton: () => cy.get("//a[normalize-space()='Continue']"),
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
            registerPage: () => cy.get("//b[normalize-space()='Enter Account Information']"),
        },
        messages: {
            registerNewUserSuccessfulMessage: () => cy.get("//b[normalize-space()='Account Created!']"),
        },
    };

    fillRegisterForm(title, password, firstName, lastName, company, address, address2, state, city, zipCode, mobileNumber) {
        this.elements.inputs.titleRegisterInput().check(title);
        this.elements.inputs.passwordRegisterInput().type(password);
        this.elements.selects.dayRegisterSelect().select("10");
        this.elements.selects.monthRegisterSelect().select("May");
        this.elements.selects.yearRegisterSelect().select("1990");
        this.elements.checkboxes.newsletterCheckbox().check();
        this.elements.checkboxes.specialOffersCheckbox().check();
        this.elements.inputs.firstNameRegisterInput().type(firstName);
        this.elements.inputs.lastNameRegisterInput().type(lastName);
        this.elements.inputs.companyRegisterInput().type(company);
        this.elements.inputs.addressRegisterInput().type(address);
        this.elements.inputs.address2RegisterInput().type(address2);
        this.elements.selects.countryRegisterSelect().select("Canada");
        this.elements.inputs.stateRegisterInput().type(state);
        this.elements.inputs.cityRegisterInput().type(city);
        this.elements.inputs.zipCodeRegisterInput().type(zipCode);
        this.elements.inputs.mobileNumberRegisterInput().type(mobileNumber);
        this.elements.buttons.createAccountButton().click();
    }

    validateRegisterNewUserSuccessful() {
        this.elements.messages
            .registerNewUserSuccessfulMessage()
            .should("be.visible")
            .and("contain", "Account Created!");
    }

    validatePasswordFieldIsInvalid() {
        this.elements.inputs.passwordRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    validateFirstNameFieldIsInvalid() {
        this.elements.inputs.firstNameRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    validateLastNameFieldIsInvalid() {
        this.elements.inputs.lastNameRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });

    }

    validateAddressFieldIsInvalid() {
        this.elements.inputs.addressRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    validateCityFieldIsInvalid() {
        this.elements.inputs.cityRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        });
    }

    validateZipCodeFieldIsInvalid() {
        this.elements.inputs.zipCodeRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        }); 

    }

    validateMobileNumberFieldIsInvalid() {
        this.elements.inputs.mobileNumberRegisterInput().then(($input) => {
            // checkValidity() retorna false se o campo não passou na validação
            expect($input[0].checkValidity()).to.be.false;
        }); 
    }



}

export default new RegisterPage();