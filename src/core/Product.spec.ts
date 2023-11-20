import {describe, expect, it } from 'vitest'
import Product from './Product'

describe('Product', () => {
  it('should return the correct product', () => {
    
    const product = new Product(1, 'Product 1', 100, 'Description 1', 5, 'image1.jpg', 'Category 1', 'Brand 1', true);

    expect(product.id).toBe(1);
    expect(product.name).toBe('Product 1');
    expect(product.price).toBe(100);
    expect(product.description).toBe('Description 1');
    expect(product.stars).toBe(5);
    expect(product.image).toBe('image1.jpg');
    expect(product.category).toBe('Category 1');
    expect(product.brand).toBe('Brand 1');
    expect(product.isHighlighted).toBe(true);
  })
})