export class registerPage {
    webLocators = {
        "firstname": "#input-firstname1",
        "lastName": "#input-lastname",
        "phoneNumber": "#input-telephone",
        "password": "#input-password",
        "confirmpassword": "#input-confirm",
        "email": "#input-email",
        "checkbox": "input[type='checkbox']",
        "continueButton": ".btn.btn-primary",
        "accountCreatedText": 'h1'

    }
    gotoUrl() {
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(firstName) {
        cy.get(this.webLocators.firstname).type(firstName)
    }

    enterlastName(lastName) {
        cy.get(this.webLocators.lastName).type(lastName)
    }

    enterEmail() {
        cy.get(this.webLocators.email).type(Math.random().toString(36).substring(2, 10) + "@email.com")
    }

    enterphoneNumber(phoneNumber) {
        cy.get(this.webLocators.phoneNumber).type(phoneNumber)
    }

    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
    }

    confirmPassword(password) {
        cy.get(this.webLocators.confirmpassword).type(password)
    }

    checkedBox() {
        cy.get(this.webLocators.checkbox).click()
    }
    continueButton() {
        cy.get(this.webLocators.continueButton).click()
    }
    isAccountCreated() {
        cy.get(this.webLocators.accountCreatedText).should("be.visible")
    }
}
