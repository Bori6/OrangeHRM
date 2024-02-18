///<reference types = "Cypress"/>

import orangeAutomation from "../pageObjects"
const OrangeAutomation=new orangeAutomation
describe('Automated Testing for Orange HRM',()=>{
    beforeEach('Login Functionality',()=>{
        OrangeAutomation.visitUrl()
        OrangeAutomation.verifyVisitedUrl()//Verification of URl

    })
    
    it('Wrong Username for Login',()=>{
        OrangeAutomation.inputWrongUsername()
        OrangeAutomation.inputPasssword()
        OrangeAutomation.clickLoginButton() 
        OrangeAutomation.verifyErrorrMessage()
    })

    it('Wrong Password for Login',()=>{
        OrangeAutomation.inputUserName()
        OrangeAutomation.inputWrongPasssword()
        OrangeAutomation.clickLoginButton() 
        OrangeAutomation.verifyErrorrMessage()
    })
})    
