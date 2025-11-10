import { TestimonialsResponse } from "@/types/testimonials";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError } from "axios";

const getAllTestimonials = async (): Promise<TestimonialsResponse> => {

    try {

        const response = await axios.get<TestimonialsResponse>(`${BACKEND}/testimonials`);

        return response.data;

    } catch (error: unknown) {

        if (error instanceof AxiosError) {

            throw new Error(`Error: ${error.message}`);
        }

        throw new Error('Error: An unexpected error occurred');
    }
};

export const testimonialService = {
    getAllTestimonials
};
