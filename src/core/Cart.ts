import Product from '@/core/Product'

export default class Cart extends Product  {
    quantity: number;

    constructor(item: Product, quantity: number) {
        super(item.id, item.name, item.price, item.description, item.stars, item.image, item.category, item.brand, item.isHighlighted);
        this.quantity = quantity
    }

    get total(): number {
        return this.price * this.quantity
    }
}