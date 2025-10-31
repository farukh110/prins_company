import { Product } from "./product";

export interface SubCategory {
    id: string;
    name: string;
    products: Product[]; 
};