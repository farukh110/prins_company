import { Product } from "./product";

export interface SubCategory {
    id: string;
    name: string;
    banner_image?: string;
    description?: string;
    slug?: string;
    products?: Product[]; 
    stone_types?: {
        name: string;
        [key: string]: any;   
    }[];
};

export interface SubCategoryResponse {
    status: boolean;
    message: string;
    data: SubCategory[];
};

export interface SubCategoryState {
    data: SubCategory[];
    loading: boolean;
    error: string | null;
};