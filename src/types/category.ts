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