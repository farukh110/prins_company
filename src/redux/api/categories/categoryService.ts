import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";
import {
    CategoryProductsResponse,
    CategoryResponse,
} from "@/types/category";

export const getAllCategories = async (): Promise<CategoryResponse> => {
    
    try {

        const { data } = await axios.get<CategoryResponse>(`${BACKEND}/categories`);
        return data;

    } catch (err: unknown) {

        const msg = err instanceof AxiosError ? err.message : "Unexpected error";
        throw new Error(msg);
    }
};

export const getByCategorySlug = async (slug: string): Promise<CategoryProductsResponse> => {
    
    try {

        const { data } = await axios.get<CategoryProductsResponse>(
            `${BACKEND}/categories/${slug}/products`
        );
        return data;

    } catch (err: unknown) {

        const msg = err instanceof AxiosError ? err.message : "Unexpected error";
        throw new Error(msg);
    }
};

export const categoryService = {
    getAllCategories,
    getByCategorySlug
};
