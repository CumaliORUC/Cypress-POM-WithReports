export class LoginPage{
 webLocators={
    "email":"#input-email",
    "password":"#input-password",
    "loginButton":"input.btn.btn-primary",
    "myAccount":"#content > :nth-child(1)"
 }
  login(email, password){
    cy.visit(Cypress.env('URL'))
    cy.get(this.webLocators.email).type(email)
    cy.get(this.webLocators.password).type(password)
    cy.get(this.webLocators.loginButton).click()
    cy.get(this.webLocators.myAccount).should("be.visible")
  }

}