describe('Demo Coding Weekend', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays a list the first item is the ', () => {
    cy.get("ul li").first().should('have.text',"2022 Jan 22nd - 24th")
  })

  it('has a link that when clicked shows the page which includes list of sessions', () => {
    cy.get("ul li").first().click()
    cy.url().should('eq', Cypress.config().baseUrl + "/2022/jan")
    cy.get("ol li").first().should('have.text', "HTML & CSS")
  })
})
