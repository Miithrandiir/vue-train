import json from '../../src/data/products.json'

describe('Basket page testing', () => {
  it('should show basket empty', () => {
    cy.visit('/')
    cy.get('[data-cy=basket]').should('be.visible').contains('0 articles')
  })

  it('should show basket with 1 article', () => {
    cy.visit('/product/1')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
  })

  it('should show basket with 2 same article', () => {
    cy.visit('/product/1')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('2 articles')
  })

  it('should show basket with 2 different article', () => {
    cy.visit('/product/1')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
    cy.get('a').contains('Accueil').click()
    cy.get('.products>.product:last-child button', { timeout: 6000 }).click()
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('2 articles')
  })

  it('should show 2 article in page basket', () => {
    cy.visit('/product/1')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
    cy.get('a').contains('Accueil').click()
    cy.get('.products>.product:last-child button', { timeout: 6000 }).click()
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('2 articles')
    cy.get('[data-cy=basket]').click()
    cy.get('table>tbody>tr').should('have.length', 2)
  })

  it('should show 2 article in page basket and delete one', () => {
    cy.visit('/product/1')
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
    cy.get('a').contains('Accueil').click()
    cy.get('.products>.product:last-child button', { timeout: 6000 }).click()
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('2 articles')
    cy.get('[data-cy=basket]').click()
    cy.get('table>tbody>tr').should('have.length', 2)
    cy.get('table>tbody>tr:first-child>td:last-child [data-cy="button-decrement"]').click()
    cy.get('table>tbody>tr').should('have.length', 1)
  })
})

describe('pricing test', () => {
  it('should show the correct price', () => {
    cy.visit('/product/1')
    const expectedPrice = json[0].price
    cy.get('[data-cy=order-button]').click()
    cy.get('[data-cy=basket]').should('be.visible').contains('1 articles')
    cy.get('[data-cy=basket]').click()
    cy.get('[data-cy="price_ttc"]').contains(expectedPrice);
    cy.get('[data-cy="price_taxes"]').contains((expectedPrice*0.20).toFixed(2));
    cy.get('[data-cy="price_ht"]').contains((expectedPrice*0.8).toFixed(2));
  })
})
