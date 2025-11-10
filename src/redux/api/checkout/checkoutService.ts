import { CheckoutApiResponse, CheckoutPayload } from "@/types/checkout";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const checkout = async (payload: CheckoutPayload): Promise<CheckoutApiResponse> => {

    try {

        const response = await axios.post(`${BACKEND}/checkout`, payload);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`API Error: ${error.response?.data?.message || error.message}`);

        }

        throw new Error('An unexpected error occurred');
    }
};

export const checkoutService = {
    checkout
};