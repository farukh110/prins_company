import { GET_CATEGORIES } from "@/constants";
import { CategoryResponse, CategoryState } from "@/types/category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryService } from "./categoryService";

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null
};

export const getAllCategories = createAsyncThunk<
    CategoryResponse,
    void,
    { rejectValue: string }>(
        GET_CATEGORIES,
        async (_, { rejectWithValue }) => {
            try {

                const response = await categoryService.getAllCategories();
                return response;

            } catch (error: unknown) {

                if (error instanceof Error) {

                    return rejectWithValue(error.message);
                }
                return rejectWithValue('Failed to Get Categories');
            }
        });

const categorySlice = createSlice({

    name: 'category',
    initialState,
    reducers: {
        reset: (state) => {
            state.categories = [];
            state.loading = false;
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
                state.error = action.payload ?? 'unknown error';
            });
    }
});

export const { clearError } = categorySlice.actions;
export default categorySlice.reducer;
