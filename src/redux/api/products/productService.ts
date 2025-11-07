import { GetProductTypePayload, ProductApiResponse, SingleProductResponse } from "@/types/product";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const getProductType = async (payload: GetProductTypePayload): Promise<ProductApiResponse> => {

    try {

        const response = await axios.post(`${BACKEND}/subcategories/products`, payload);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`API Error: ${error.response?.data?.message || error.message}`);

        }

        throw new Error('An unexpected error occurred');
    }
};

export const getProductById = async (
    productId: string
): Promise<SingleProductResponse> => {
    
    try {

        const { data } = await axios.get<SingleProductResponse>(
            `${BACKEND}/product/${productId}`
        );

        return data; 

    } catch (error: unknown) {
        const msg =
            error instanceof AxiosError
                ? error.response?.data?.message || error.message
                : "Unexpected error";

        throw new Error(msg);
    }
};

export const productService = {
    getProductType,
    getProductById
};
