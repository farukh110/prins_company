import { Product } from "./product";
import { SubCategory } from "./subCategory";

export interface Category {
    id: string;
    name: string;
    subcategories: SubCategory[];
};

export interface CategoryResponse {
    status: boolean;
    message: string;
    data: Category[];
};

export interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
};

export interface CategoryDetail {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
};

export interface CategoryProductsResponse {
    status: boolean;
    message: string;
    category: CategoryDetail;
    products: Product[];
};

export interface CategoryProductsState {
    selectedCategory: CategoryDetail | null;
    products: Product[];
    loading: boolean;
    error: string | null;
};

export interface CategoryStoreState {
    categories: Category[];
    selectedCategory: CategoryDetail | null;
    products: Product[];
    loading: boolean;
    error: string | null;
}