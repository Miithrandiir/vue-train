import Cart from '@/core/Cart'
import Product from '@/core/Product'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [] as Cart[]
  }),
  getters: {
    totalItems(state): number {
      return state.items.reduce((total: number, item: Cart) => total + item.quantity, 0)
    },
    totalPrice(state): number {
      return state.items.reduce((total:number, item: Cart) => total + item.price*item.quantity, 0)
    },
    getItems(state): Cart[] {
      return state.items;
    }
  },
  actions: {
    add(item: Product) {
      const index = this.items.findIndex((val:Cart) => {return val.id === item.id})
      if(index !== -1) {
        this.items[index].quantity++
      } else {
        this.items.push(new Cart(item, 1))
      }

      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    remove(item: Product) {
      const index = this.items.findIndex((val:Cart) => {return val.id === item.id})
      if(index === -1)
        throw new Error('Item not found');
      if(this.items[index].quantity > 1) {
        this.items[index].quantity--
      } else {
        this.items.splice(index, 1)
      }

      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
})
