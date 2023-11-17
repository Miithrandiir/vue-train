import Cart from '@/core/Cart'
import Product from '@/core/Product'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  getters: {
    totalItems(): number {
      return this.items.length
    },
    totalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0)
    },
    itemsSet(): Cart[] {
      const set = new Set(this.items);
      const obj: Cart[] = []
      set.forEach((item) => {
        const count = this.items.filter((i) => i.id === item.id).length
        obj.push(new Cart(item, count));
      })
      return obj;
    }
  },
  actions: {
    add(item: Product) {
      this.items.push(item)
    },
    remove(item: Product) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
  }
})
