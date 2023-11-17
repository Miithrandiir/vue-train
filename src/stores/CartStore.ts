import Cart from '@/core/Cart'
import Product from '@/core/Product'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Cart[]
  }),
  getters: {
    totalItems(state): number {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice(state): number {
      return state.items.reduce((total, item) => total + item.price*item.quantity, 0)
    },
    itemsSet(state): Cart[] {
      return state.items;
    }
  },
  actions: {
    add(item: Product) {
      const index = this.items.findIndex((val) => {return val.id === item.id})
      if(index !== -1) {
        this.items[index].quantity++
      } else {
        this.items.push(new Cart(item, 1))
      }
    },
    remove(item: Product) {
      const index = this.items.findIndex((val) => {return val.id === item.id})
      if(index === -1) return
      if(this.items[index].quantity > 1) {
        this.items[index].quantity--
      } else {
        this.items.splice(index, 1)
      }
    }
  }
})
