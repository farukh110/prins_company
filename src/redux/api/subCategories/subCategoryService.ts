import { SubCategoryResponse } from "@/types/subCategory";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const getAllSubCategories = async (): Promise<SubCategoryResponse> => {

    try {

        const response = await axios.get<SubCategoryResponse>(`${BACKEND}/categories/rings/subcategories`);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }
        throw new Error('Error: An unexpected error occurred');
    }
};

export const subCategoryService = {
    getAllSubCategories
};
