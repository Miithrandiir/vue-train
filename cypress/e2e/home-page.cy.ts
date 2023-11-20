// https://on.cypress.io/api

describe('Home page testing', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('visits the app root url', () => {
    cy.contains('h1', 'MyShop')
  })

  it('should show the loader at first time', () => {
    cy.get('.loader').should('be.visible')
  })

  it('should show the highlighted products after 5s', () => {
    cy.get('.products', {timeout: 6000}).should('be.visible')
  })

  it('should show basket empty', () => {
    cy.get('[data-cy=basket]').should('be.visible').contains('0 articles')
  })

  it('should redirect to product page when click on product', () => {
    cy.get('.products>.product:first-child button', {timeout: 6000}).click()
    cy.url().should('include', '/product/1')
  })
})
