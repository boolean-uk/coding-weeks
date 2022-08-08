describe('Demo Coding Weekend', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays a list of sessions where the first item is 2022 Jan 22nd - 24th', () => {
    cy.get("ul li").first().should('have.text',"2022 Jan 22nd - 24th")
  })

  it('has a link that when clicked shows the page which includes list of sessions', () => {
    cy.get("ul li").first().click()
    cy.url().should('eq', Cypress.config().baseUrl + "/2022/jan")
    cy.get("ol li").first().should('have.text', "HTML & CSS")
  })

  it("has a link to boolean.co.uk", () => {
    cy.get("ul li").last().click()
    cy.url().should('eq', "https://boolean.co.uk/")
  })
})
