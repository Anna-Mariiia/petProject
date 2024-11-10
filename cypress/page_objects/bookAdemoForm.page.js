class BookDemoFormPage{
    get firstNameInput(){return cy.get('[placeholder="First Name"]')}
    get lastNameInput(){return cy.get('input[placeholder="Last Name"]')}
    get emailInput(){return cy.get('[name="email"]')}
    get companyNameInput(){return cy.get('[name="company"]')}
    get phoneNumberInput(){return cy.get('[name="phone"]')}
}
export default new BookDemoFormPage()