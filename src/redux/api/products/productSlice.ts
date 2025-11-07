import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import { productService } from "./productService";
import {
    ProductState,
    ProductApiResponse,
    parseProductImages,
    GetProductTypePayload,
    SingleProductResponse,
} from "@/types/product";
import { GET_PRODUCT, GET_PRODUCT_TYPE } from "@/constants";
import type { RootState } from "@/redux/store";

const initialState: ProductState = {
    data: null,
    single: null,
    loading: false,
    error: null,
    count: 0,
};

export const getProductTypes = createAsyncThunk<
    ProductApiResponse,
    GetProductTypePayload,
    { rejectValue: string }
>(GET_PRODUCT_TYPE, async (payload, { rejectWithValue }) => {
    try {
        return await productService.getProductType(payload);
    } catch (err: any) {
        return rejectWithValue(err.message || "Failed to fetch product types");
    }
});

export const getProductById = createAsyncThunk<
    SingleProductResponse,
    string,
    { rejectValue: string }
>(GET_PRODUCT, async (productId, { rejectWithValue }) => {
    try {
        return await productService.getProductById(productId);
    } catch (err: any) {
        return rejectWithValue(err.message || "Failed to fetch product details");
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearProductData: (s) => ({
            ...s,
            data: null,
            single: null,
            error: null,
            count: 0,
        }),
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProductTypes.pending, (s) => ({
                ...s,
                loading: true,
                error: null,
            }))
            .addCase(
                getProductTypes.fulfilled,
                (s, a: PayloadAction<ProductApiResponse>) => ({
                    ...s,
                    loading: false,
                    data: a.payload.data,
                    count: a.payload.count,
                })
            )
            .addCase(getProductTypes.rejected, (s, a) => ({
                ...s,
                loading: false,
                error: a.payload ?? "Unknown",
            }))
            .addCase(getProductById.pending, (s) => ({
                ...s,
                loading: true,
                error: null,
            }))
            .addCase(getProductById.fulfilled, (state, action) => {
                const raw = action.payload.data;

                state.loading = false;
                state.single = {
                    ...raw,
                    image: parseProductImages(raw.image), // <-- parses the JSON string
                    // optional fields (safe defaults)
                    video: raw.video ?? null,
                    isLabGrown: raw.is_lab_grown ?? false,
                    skinToneHand: raw.skin_tone_hand ?? null,
                    customerImages: raw.customer_images ?? null,
                    dia_1_shape: raw.dia_1_shape ?? null,
                    dia_1_pcs: raw.dia_1_pcs ?? null,
                    dia_1_wt: raw.dia_1_wt ?? null,
                    dia_2_shape: raw.dia_2_shape ?? null,
                    dia_2_pcs: raw.dia_2_pcs ?? null,
                    dia_2_wt: raw.dia_2_wt ?? null,
                    total_dia_wt: raw.total_dia_wt ?? null,
                };
            })
            .addCase(getProductById.rejected, (s, a) => ({
                ...s,
                loading: false,
                error: a.payload ?? "Unknown",
            })),
});

export const { clearProductData } = productSlice.actions;

export const selectProductState = (state: RootState) => state.products;

// Then memoize
export const selectProduct = createSelector(
    selectProductState,
    (state) => state.single
);

export const selectProductLoading = createSelector(
    selectProductState,
    (state) => state.loading
);

export const selectProductError = createSelector(
    selectProductState,
    (state) => state.error
);

export const selectProductCount = createSelector(
    selectProductState,
    (state) => state.count
);

export default productSlice.reducer;