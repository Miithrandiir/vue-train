export default class Product {
    public id: number;
    public name: string;
    public price: number;
    public description: string;
    public stars: number;
    public image: string;
    public category: string;
    public brand: string;
    public isHighlighted: boolean;

    constructor(id: number, name: string, price: number, description: string, stars: number, image: string, category: string, brand: string, isHighlighted: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stars = stars;
        this.image = image;
        this.category = category;
        this.brand = brand;
        this.isHighlighted = isHighlighted;
    }
}