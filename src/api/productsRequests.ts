// API
import axios from "axios";

// Interfaces
import { Categories, Product } from "../interfaces/Products";

export const getCategories = async () => {
    const res = await axios.get<Categories>(
        "https://fakestoreapi.com/products/categories"
    );
    return res;
};

export const getOfferts = async () => {
    const res = await axios.get<Product[]>(
        "https://fakestoreapi.com/products?limit=5"
    );
    return res;
};

export const getAllProducts = async () => {
    const res = await axios.get<Product[]>("https://fakestoreapi.com/products")
    return res
}
