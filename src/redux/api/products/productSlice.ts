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
  SingleProductResponse,
  parseProductImages,
  GetProductTypePayload,
  ParsedProduct,
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
    return rejectWithValue(err.message ?? "Failed to fetch product types");
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
    return rejectWithValue(err.message ?? "Failed to fetch product details");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProductData: (state) => {
      state.data = null;
      state.single = null;
      state.error = null;
      state.count = 0;
    },
    /** Optional – clear only the single product (keeps the list) */
    clearSingleProduct: (state) => {
      state.single = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getProductTypes.fulfilled,
        (state, action: PayloadAction<ProductApiResponse>) => {
          state.loading = false;
          state.data = action.payload.data;
          state.count = action.payload.count;
        }
      )
      .addCase(getProductTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        const raw = action.payload.data;

        const parsedImages = parseProductImages(raw.image);

        const parsed: ParsedProduct = {
          ...raw,
          image: parsedImages,
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

          _rawImage: raw.image,
        };

        state.loading = false;
        state.single = parsed;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      }),
});

export const { clearProductData, clearSingleProduct } = productSlice.actions;

const selectProductState = (state: RootState) => state.products;

export const selectProduct = createSelector(
  selectProductState,
  (s): ParsedProduct | null => s.single
);

export const selectProductLoading = createSelector(
  selectProductState,
  (s) => s.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (s) => s.error
);

export const selectProductCount = createSelector(
  selectProductState,
  (s) => s.count
);

export default productSlice.reducer;