import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    CategoryProductsResponse,
    CategoryResponse,
    CategoryStoreState,
} from "@/types/category";
import { categoryService } from "./categoryService";
import {
    GET_BY_CATEGORY_SlUG,
    GET_CATEGORIES
} from "@/constants";

const initialState: CategoryStoreState = {
    categories: [],
    selectedCategory: null,
    products: [],
    loading: false,
    error: null,
};

export const getAllCategories = createAsyncThunk<
    CategoryResponse,
    void,
    { rejectValue: string }
>(GET_CATEGORIES, async (_, { rejectWithValue }) => {

    try {

        return await categoryService.getAllCategories()

    } catch (e: any) {

        return rejectWithValue(e.message ?? "Failed to load categories");
    }
});

export const getByCategorySlug = createAsyncThunk<
    CategoryProductsResponse,
    { slug: string },
    { rejectValue: string }
>(GET_BY_CATEGORY_SlUG, async ({ slug }, { rejectWithValue }) => {

    try {

        return await categoryService.getByCategorySlug(slug);

    } catch (e: any) {

        return rejectWithValue(e.message ?? "Failed to load products");
    }
});

const categoryStore = createSlice({
    name: "category",
    initialState,
    reducers: {
        resetCategories(state) {
            state.categories = [];
            state.loading = false;
            state.error = null;
        },
        resetProducts(state) {
            state.selectedCategory = null;
            state.products = [];
            state.loading = false;
            state.error = null;
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "unknown error";
            });

        builder
            .addCase(getByCategorySlug.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getByCategorySlug.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCategory = action.payload.category;
                state.products = action.payload.products;
            })
            .addCase(getByCategorySlug.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "unknown error";
            });
    },
});

export const {
    resetCategories,
    resetProducts,
    clearError,
} = categoryStore.actions;

export default categoryStore.reducer;