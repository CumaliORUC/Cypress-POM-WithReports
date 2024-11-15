import { registerPage } from "../../pages/register"
import testData from '../../fixtures/testData.json'

const registerpage=new registerPage()

describe("Register with POM",()=>{

    it('Register', ()=>{
     registerpage.gotoUrl()
     registerpage.enterFirstName(testData.register.firstName)
     registerpage.enterlastName(testData.register.lastName)
     registerpage.enterEmail()
     registerpage.enterphoneNumber(testData.register.phoneNumber)
     registerpage.enterPassword(testData.register.password)
     registerpage.confirmPassword(testData.register.password)
     registerpage.checkedBox()
     registerpage.continueButton()
     registerpage.isAccountCreated()
    
    })
})