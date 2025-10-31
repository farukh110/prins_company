import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../api/categories/categorySlice";
import testimonialReducer from '../api/testimonials/testimonialSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        testimonials: testimonialReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;