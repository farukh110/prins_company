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
  ProductsApiResponse,
  GetProductsPayload,
  Product,
} from "@/types/product";

import { GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_TYPE } from "@/constants";
import type { RootState } from "@/redux/store";

const initialState: ProductState = {

  data: null,
  products: null,
  productsCount: 0,
  stoneTypes: null,
  stoneTypesCount: 0,
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

export const getProducts = createAsyncThunk<
  ProductsApiResponse,
  GetProductsPayload,
  { rejectValue: string }
>(GET_ALL_PRODUCTS, async (payload, { rejectWithValue }) => {
  try {
    return await productService.getProducts(payload);
  } catch (err: unknown) {

    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }

    return rejectWithValue("Failed to fetch products");
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
      state.products = null;
    },
    /** Optional – clear only the single product (keeps the list) */
    clearSingleProduct: (state) => {
      state.single = null;
    },
    clearProducts: (state) => {
      state.products = null;
      state.count = 0;
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
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<ProductsApiResponse>) => {
        state.loading = false;
        state.error = null;

        state.products = action.payload.data.map((product) => ({
          ...product,
          image: parseProductImages(product.image),
        }));

        state.count = action.payload.count;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to load products";
      })
});

export const { clearProductData, clearSingleProduct, clearProducts } = productSlice.actions;

const selectProductState = (state: RootState) => state.products;

export const selectProduct = createSelector(
  selectProductState,
  (s): ParsedProduct | null => s.single
);

export const selectProducts = createSelector(
  selectProductState,
  (s): (Product & { image: string[] })[] | null => s.products
);

export const selectProductsCount = createSelector(
  selectProductState,
  (s) => s.count
);

export const selectProductLoading = createSelector(
  selectProductState,
  (s) => s.loading
);

// export const selectProductsLoading = createSelector(
//   selectProductState,
//   (s) => s.loading
// );

export const selectProductsLoading = createSelector(
  (state: RootState) => state.products,
  (p) => p.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (s) => s.error
);

// export const selectProductsError = createSelector(
//   selectProductState,
//   (s) => s.error
// );

export const selectProductsError = createSelector(
  (state: RootState) => state.products,
  (p) => p.error
);

export const selectProductCount = createSelector(
  selectProductState,
  (s) => s.count
);

export const selectFilteredProducts = createSelector(
  (state: RootState) => state.products,
  (p) => p.products ?? []               
);

// export const selectFilteredProductsCount = createSelector(
//   (s: RootState) => s.products,
//   (p) => p.productsCount ?? 0
// );

export const selectFilteredProductsCount = createSelector(
  (state: RootState) => state.products,
  (p) => p.count ?? 0                  
);

export default productSlice.reducer;