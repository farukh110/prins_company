import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const register = async (data: unknown) => {

    try {

        const response = await axios.post(`${BACKEND}/user/register`, data);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }

        throw new Error('Error: An unexpected error occurred');
    }
};

const login = async (data: unknown) => {

    try {

        const response = await axios.post(`${BACKEND}/user/login`, data);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }

        throw new Error('Error: An unexpected error occurred');
    }
};

export const authService = {
    register,
    login
}; 