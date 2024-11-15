export class AddtoCard{
    weblocator={
     "searchBox":".form-control.input-lg",
     "addToCart":"button>i.fa.fa-shopping-cart",
     "succesMessage":"div.alert.alert-success.alert-dismissible"
    
    }
 
 searchProduct(product){
   cy.get(this.weblocator.searchBox).type(`${product}{enter}`)
   }
 addToCart(){
    cy.get(this.weblocator.addToCart).eq(2).click()
 }
 verifyProductisAdded(){
    return cy.get(this.weblocator.succesMessage)
 }
}