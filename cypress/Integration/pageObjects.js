const data = require('../fixtures/data.json')


class orangeAutomation
{
    visitUrl(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    verifyVisitedUrl(){
        return cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUserName(){
        return cy.get("input[name='username']").type(data.userName)
    }
    inputWrongUsername(){
        return cy.get("input[name='username']").type(data.incorrectUserName)
    }
    inputPasssword(){
        return cy.get("input[name='password']").type(data.password)
    }
    inputWrongPasssword(){
        return cy.get("input[name='password']").type(data.incorrectPassword)
    }
    clickLoginButton(){
        return cy.get("button[type='submit']").click() 
    }
    verifySuccessfulLogin(){
        return cy.get('ul li span p.oxd-userdropdown-name').should('be.visible')
    }
    verifyErrorrMessage(){
        return cy.get('div[role="alert"]').should('be.visible')
    }
    verifyPunchedInIsVisible(){
        return cy.get('i.bi-stopwatch').should('be.visible')
    }
    verifyPunchedInIsNotVisible(){
        return cy.get('i.bi-stopwatch').should('not.be.visible')
    }
    verifyPunchedInIsEnabled(){
        return cy.get('button[type="button"]').should('be.enabled')
    }
    verifyPunchedInIsNotEnabled(){
        return cy.get('button[type="button"]').should('not.be.enabled')
    }
    verifyMyActionIsVisible(){
        return cy.get('button.oxd-icon-button--danger').should('be.visible')
    }
    verifyMyActionIsEnabled(){
        return cy.get('button[type="button"]').should('be.enabled')
    }
    verifyMyActionIsNotVisible(){
        return cy.get('button.oxd-icon-button--danger').should('not.be.visible')
    }
    verifyMyActionIsNotEnabled(){
        return cy.get('button[type="button"').should('not.be.enabled')
    }
    verifyQuickLaunchAssignLeaveIsVisible(){
        return cy.get('button[title="Assign Leave"]').should("be.visible")
    }
    verifyQuickLaunchLeavelistIsVisible(){
        return cy.get('button[title="Leave List"]').should("be.visible")
    }
    verifyQuickLaunchTimeSheetsIsVisible(){
        return cy.get('button[title="Timesheets"]').should("be.visible")
    }
    verifyQuickLaunchApplyLeaveIsVisible(){
        return cy.get('button[title="Apply Leave"]').should("be.visible")
    }
    verifyQuickLaunchMyLeaveIsVisible(){
        return cy.get('button[title="My Leave"]').should("be.visible")
    }
    verifyQuickLaunchMyTimesheetIsVisible(){
        return cy.get('button[title="My Timesheet"]').should("be.visible")
    }
    verifyQuickLaunchAssignLeaveIsNotVisible(){
        return cy.get('button[title="Assign Leave"]').should("not.be.visible")
    }
    verifyQuickLaunchLeavelistIsNotVisible(){
        return cy.get('button[title="Leave List"]').should("not.be.visible")
    }
    verifyQuickLaunchTimeSheetsIsNotVisible(){
        return cy.get('button[title="Timesheets"]').should("not.be.visible")
    }
    verifyQuickLaunchApplyLeaveIsNotVisible(){
        return cy.get('button[title="Apply Leave"]').should("not.be.visible")
    }
    verifyQuickLaunchMyLeaveIsNotVisible(){
        return cy.get('button[title="My Leave"]').should("not.be.visible")
    }
    verifyQuickLaunchMyTimesheetIsNotVisible(){
        return cy.get('button[title="My Timesheet"]').should("not.be.visible")
    }
    verifyEmployeeDistributionByLocationIsEnabled(){
        return cy.get('button[type="button"]').should('be.enabled')
    }
    verifyEmployeeDistributionByLocationisNotEnabled(){
        return cy.get('button[type="button"]').should('not.be.enabled')
    }
    navigateToAdminPage(){
        return cy.get('ul li.oxd-main-menu-item-wrapper:nth-child(1)').click()
    }
    fillInUsername(){
        return cy.get('div.oxd-input-group input.oxd-input').type(data.userName)
    }
    clickUserRole(){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    }
    clickAdminUnderRoleDropDown(){
        return  cy.get('div.oxd-select-dropdown .oxd-select-option:nth-child(2)').click()
    }
    VerifyValueGiven(){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.value','')
    }
    fillInEmployeeName(){
        return cy.get('input[placeholder="Type for hints..."]').type(data.hint)
    }
    selectHighlightedName(){
         return cy.get('div[role="option"]').click({force:true})
    }
    selectStatus(){
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    }
    clickEnabledUnderStatusDropdown(){
        return cy.get('div.oxd-select-dropdown .oxd-select-option:nth-child(2)').click()
    }
    delay(){
        return cy.wait(data.waitTime)
    }
    clickSearchButton(){
        return cy.get('button[type="submit"]').click()
    }
    verifyDataInTable(){
        return cy.get('div.oxd-table-card').should('be.visible')
    }
    fillInNumberForUsername(){
        return cy.get('div.oxd-input-group input.oxd-input').type(data.numberUsername)
    }
    appropriateErrorMessage(){
        return cy.get('.oxd-toast').should('be.visible')
    }
    clickDeleteButton(){
        return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
    }
    appropriateDeleteErrorMessage(){
        return cy.get('.oxd-toast').should('be.visible')
    }
}
export default orangeAutomation