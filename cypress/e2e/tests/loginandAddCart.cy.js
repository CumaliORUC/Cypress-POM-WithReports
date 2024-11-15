import { AddtoCard } from "../../pages/addToCart"
import loginData from "../../fixtures/testData.json"
const addtocard=new AddtoCard()

describe("Login and Add Cart", ()=>{

    before(()=>{
        cy.login(loginData.login.email, loginData.login.password)
    })

    it("Login to Add Cart", ()=>{
     addtocard.searchProduct(loginData.login.product),
     addtocard.addToCart()
     //addtocard.verifyProductisAdded().should('contain',loginData.login.product)    
    })
})