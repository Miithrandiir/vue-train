import product from './products.json';
import Product from '@/core/Product';

const getProducts = () : any  => {
    return product;
}

const getProduct = (id: number) : any => {
    return product.find((p: Product) => p.id === id);
}

const getCategories = () : any => {
    return product.map((p: Product) => p.category);
}

const getHighlightedProducts = async () : Promise<any> => {
    //Fake delay
    await new Promise(resolve => setTimeout(resolve, 5000));

    return new Promise(resolve => {
        resolve(product.filter((p: Product) => p.isHighlighted));
    });
}

export { getProducts, getProduct, getCategories, getHighlightedProducts };