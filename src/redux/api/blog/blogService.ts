import { BlogsResponse } from "@/types/blog";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const getAllBlogs = async (): Promise<BlogsResponse> => {

    try {

        const response = await axios.get<BlogsResponse>(`${BACKEND}/blogs`);
        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }

        throw new Error('Error: An unexpected error occurred');
    }

};

export const blogService = {
    getAllBlogs
};