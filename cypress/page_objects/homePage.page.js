class HomePage {
    get companyInfoSection(){return cy.contains("Company Info")}
    get careerSection(){return cy.contains('Careers')}
    get allOpenPositionsButton(){return cy.get('[label="See All Open Positions"]')}
    get QaEnginnerPosition(){return cy.contains('QA Engineer')}
    get bookAdemo(){return cy.contains('Book a Demo')}
}
export default new HomePage() 