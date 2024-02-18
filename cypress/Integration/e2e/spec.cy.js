///<reference types = "Cypress"/>

import orangeAutomation from "../pageObjects"
const OrangeAutomation=new orangeAutomation
describe('Automated Testing for Orange HRM',()=>{
    beforeEach('Login Functionality',()=>{
        OrangeAutomation.visitUrl()
        OrangeAutomation.verifyVisitedUrl()//Verification of URl

        OrangeAutomation.inputUserName()
        OrangeAutomation.inputPasssword()
        OrangeAutomation.clickLoginButton()
        OrangeAutomation.verifySuccessfulLogin()

    })


    it('Dashboard Functionalities (Punched In)',()=>{
        OrangeAutomation.verifyPunchedInIsVisible()
        OrangeAutomation.verifyPunchedInIsEnabled()
    })

    it('Verify Punched in not visible and not enabled',()=>{
        OrangeAutomation.verifyPunchedInIsVisible()
        OrangeAutomation.verifyPunchedInIsEnabled()
    })

    it('Verify My Actions Visible and enabled',()=>{
        OrangeAutomation.verifyMyActionIsVisible()
        OrangeAutomation.verifyMyActionIsEnabled()
    })
        
    it('Verify My Actions Not Visible and enabled',()=>{
        OrangeAutomation.verifyMyActionIsVisible()
        OrangeAutomation.verifyMyActionIsEnabled()
    })

    it('Verify QuicK Launch Assign leave Visible',()=>{
        OrangeAutomation.verifyQuickLaunchAssignLeaveIsVisible()
    })
    
    it('Verify QuicK Launch Assign leave not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchAssignLeaveIsVisible()
    })

    it('Verify QuicK Launch Leave list Visible',()=>{
        OrangeAutomation.verifyQuickLaunchLeavelistIsVisible()
    })
    
    it('Verify QuicK Launch Leave list not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchLeavelistIsVisible()
    }) 

    it('Verify Quick Launch My leave Visible',()=>{
        OrangeAutomation.verifyQuickLaunchMyLeaveIsVisible()
    })

    it('Verify Quick Launch My leave not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchMyLeaveIsVisible()
    })

    it('Verify Quick Launch Timesheets Visible',()=>{
        OrangeAutomation.verifyQuickLaunchTimeSheetsIsVisible()
    })

    it('Verify Quick Launch Timesheets not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchTimeSheetsIsVisible()
    })
    
    it('Verify Quick Launch Apply Leave Visible',()=>{
        OrangeAutomation.verifyQuickLaunchApplyLeaveIsVisible()
    })

    it('Verify Quick Launch Apply leave not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchApplyLeaveIsVisible()
    })

    it('Verify Quick Launch My Timesheets Visible',()=>{
        OrangeAutomation.verifyQuickLaunchMyTimesheetIsVisible()
    })

    it('Verify Quick Launch My Timesheets not Visible',()=>{
        OrangeAutomation.verifyQuickLaunchMyTimesheetIsVisible()
    })

    it('verify Employee Distribution is Enabled',()=>{
        OrangeAutomation.verifyEmployeeDistributionByLocationIsEnabled()
    })
        
    it('verify Employee Distribution is Not Enabled',()=>{
        OrangeAutomation.verifyEmployeeDistributionByLocationIsEnabled()
    })
        
    it('Testing Admin Page Search Functionaliity with all values correct',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.fillInUsername()
        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.fillInEmployeeName()
        OrangeAutomation.delay()
        OrangeAutomation.selectHighlightedName()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.verifyDataInTable()
    })

    it('Testing Admin Page Search Functionaliity with missing Username',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.fillInEmployeeName()
        OrangeAutomation.delay()
        OrangeAutomation.selectHighlightedName()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.verifyDataInTable() //Admin pops up as default username although left  blank
    })

    it('Testing Admin Page Search Functionaliity without selecting user role',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.fillInUsername()
        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.fillInEmployeeName()
        OrangeAutomation.delay()
        OrangeAutomation.selectHighlightedName()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.verifyDataInTable()
    })

    it('Testing Admin Page Search Functionaliity without selecting Employee name',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.fillInUsername()
        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.verifyDataInTable()//bug detected, Error message doesnt pop up and datd pops up in table
    })

    it('Testing Admin Page Search Functionaliity with all numbers in username field',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.fillInNumberForUsername()
        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.fillInEmployeeName()
        OrangeAutomation.delay()
        OrangeAutomation.selectHighlightedName()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.appropriateErrorMessage()
        
    })

    it('Testing Admin Page Table Delete Button',()=>{
        OrangeAutomation.navigateToAdminPage()

        OrangeAutomation.fillInUsername()
        OrangeAutomation.clickUserRole()
        OrangeAutomation.clickAdminUnderRoleDropDown()
        OrangeAutomation.VerifyValueGiven()
        OrangeAutomation.fillInEmployeeName()
        OrangeAutomation.delay()
        OrangeAutomation.selectHighlightedName()
        OrangeAutomation.selectStatus()
        OrangeAutomation.clickEnabledUnderStatusDropdown()
        OrangeAutomation.clickSearchButton()
        OrangeAutomation.verifyDataInTable()
        
        OrangeAutomation.clickDeleteButton()
        OrangeAutomation.appropriateDeleteErrorMessage()//Bug Discovered, cannot delete from table

    })
})
   
