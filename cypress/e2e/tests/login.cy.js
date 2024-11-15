import { LoginPage } from "../../pages/loginPage"
const loginpage=new LoginPage()
import testData from "../../fixtures/testData.json"

describe ("Login page", ()=>{

    it("Login", ()=>{
        loginpage.login(testData.login.email, testData.login.password) 
    })
})