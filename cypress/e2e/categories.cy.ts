import json from '../../src/data/products.json';
import Product from '../../src/core/Product';

describe('Categories page testing', () => {
    beforeEach(() => {
        cy.visit('/categories')
    })

    it('should show many categories', () => {

        const expectedCategories = json.reduce((acc: string[], product: Product) => {
            if (acc.indexOf(product.category) === -1) {
                acc.push(product.category);
            }
            return acc;
        }, []);

        cy.get('.categories').should('be.visible')
        cy.get('.categories .category').should('have.length', expectedCategories.length)
    })

    it('should redirect to category page when click on category', () => {
        const expectedCategory = json[0].category;

        const expectedProducts = json.reduce((acc: Product[], product: Product) => {
            if (product.category === expectedCategory) {
                acc.push(product);
            }
            return acc;
        }, []).length;
        cy.get('.categories .category:first-child button').click()
        cy.url().should('include', `/category/${expectedCategory}`)
        cy.get('.products').should('be.visible')
        cy.get('.products .product').should('have.length', expectedProducts)
    });
});