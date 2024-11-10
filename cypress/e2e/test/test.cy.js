import homePage from "../../page_objects/homePage.page"
import bookDemoPage from "../../page_objects/bookAdemoForm.page"
import credentials from "../../fixtures/credentials.json"

describe("Search",()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it("Search for QA position",()=>{
        homePage.companyInfoSection.click()
        homePage.careerSection.click()
        homePage.allOpenPositionsButton.click()
        homePage.QaEnginnerPosition.click()
    })

    it('Fillout the form Book a Demo without submitting',()=>{
        homePage.bookAdemo.click()
        bookDemoPage.firstNameInput.type(credentials.firstName)
        bookDemoPage.lastNameInput.type(credentials.lastName)
        bookDemoPage.emailInput.type(credentials.email)
        bookDemoPage.companyNameInput.type(credentials.messageToRead)
        bookDemoPage.phoneNumberInput.type(credentials.phoneNumber)
    })
})