import { GET_SUB_CATEGORIES } from "@/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { subCategoryService } from "./subCategoryService";
import { SubCategoryResponse, SubCategoryState } from "@/types/subCategory";

const initialState: SubCategoryState = {
    data: [],
    loading: false,
    error: null
};

export const getAllSubCategories = createAsyncThunk<
    SubCategoryResponse,
    void,
    { rejectValue: string }>(
        GET_SUB_CATEGORIES,
        async (_, { rejectWithValue }) => {
            try {

                const response = await subCategoryService.getAllSubCategories();
                return response;

            } catch (error: unknown) {

                if (error instanceof Error) {

                    return rejectWithValue(error.message);
                }
                return rejectWithValue('Failed to Get Sub Categories');
            }
        });

const subCategorySlice = createSlice({

    name: 'subCategory',
    initialState,
    reducers: {
        reset: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllSubCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllSubCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getAllSubCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? 'unknown error';
            });
    }
});

export const { reset } = subCategorySlice.actions;
export default subCategorySlice.reducer;
