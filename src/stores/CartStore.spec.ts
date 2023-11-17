import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './CartStore'
import { beforeEach, describe, it, expect } from 'vitest'

describe('CartStore', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
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
})
