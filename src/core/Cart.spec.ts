import {describe, expect, it } from 'vitest'
import Cart from './Cart'
import Product from './Product'

describe('Cart', () => {
  it('should return the cart object', () => {
    
    const cart = new Cart(new Product(1, 'Product 1', 100, 'Description 1', 5, 'image1.jpg', 'Category 1', 'Brand 1', true), 10);

    expect(cart.id).toBe(1);
    expect(cart.name).toBe('Product 1');
    expect(cart.price).toBe(100);
    expect(cart.description).toBe('Description 1');
    expect(cart.stars).toBe(5);
    expect(cart.image).toBe('image1.jpg');
    expect(cart.category).toBe('Category 1');
    expect(cart.brand).toBe('Brand 1');
    expect(cart.isHighlighted).toBe(true);
    expect(cart.quantity).toBe(10);
  })

  it('should return the total price of 5 elements', () => {

    const unit_price = 100;
    const quantity = 5;

    const cart = new Cart(new Product(1, 'Product 1', unit_price, 'Description 1', 5, 'image1.jpg', 'Category 1', 'Brand 1', true), quantity);
    
    const expected_total = unit_price * quantity;

    expect(cart.total).toBe(expected_total);
  })
})