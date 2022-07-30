export type Categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
];

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number,
        count: number
    }
}