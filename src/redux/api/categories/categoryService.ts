import { CategoryResponse } from "@/types/category";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

export const getAllCategories = async (): Promise<CategoryResponse> => {

    try {

        const response = await axios.get<CategoryResponse>(`${BACKEND}/categories`);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }
        throw new Error('Error: An unexpected error occurred');
    }
};

export const categoryService = {
    getAllCategories
};
