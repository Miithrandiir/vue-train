import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './CartStore'
import { beforeEach, describe, it, expect } from 'vitest'

describe('CartStore', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
        localStorage.clear();
    });

    it('should have no items', () => {
        const cartStore = useCartStore()
        expect(cartStore.totalItems).toBe(0)
    })

    it('adding one item', () => {
        const cartStore = useCartStore()
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(1)
    })

    it('adding two different items', () => {
        const cartStore = useCartStore()
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        cartStore.add({ id: 2, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(2)
    });

    it('adding two same items', () => {
        const cartStore = useCartStore()
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(2)
    });

    it('Removing one items', () => {
        const cartStore = useCartStore()
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(2)
        cartStore.remove({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(1)
    });


    it('Removing all items', () => {
        const cartStore = useCartStore()
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(2)
        cartStore.remove({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        cartStore.remove({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 1, brand: 'test', isHighlighted: false })
        expect(cartStore.totalItems).toBe(0)
    });

    it('Show total price', () => {
        const cartStore = useCartStore()

        cartStore.add({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 5, brand: 'test', isHighlighted: false })
        cartStore.add({ id: 2, name: 'test', price: 20, category: 'test', description: 'test', image: 'test', stars: 5, brand: 'test', isHighlighted: false })

        const expected_total = cartStore.getItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0)

        expect(cartStore.totalPrice).toBe(expected_total)
    });

    it('should throw an error when removing an item that does not exist', () => {

        const cartStore = useCartStore()

        expect(() => cartStore.remove({ id: 1, name: 'test', price: 10, category: 'test', description: 'test', image: 'test', stars: 5, brand: 'test', isHighlighted: false })).toThrowError('Item not found');
    });
})
