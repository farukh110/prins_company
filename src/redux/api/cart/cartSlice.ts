import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { CartItem, CartState } from '@/types/cart';

const loadCartFromStorage = (): CartItem[] => {

    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem('cartItems');
    return raw ? JSON.parse(raw) : [];

};

const saveCartToStorage = (items: CartItem[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cartItems', JSON.stringify(items));
};

const initialState: CartState = {
    items: loadCartFromStorage(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const newItem = { ...action.payload, quantity: 1 };
            const existing = state.items.find(
                i => i.id === newItem.id && i.metal === newItem.metal && i.size === newItem.size
            );
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push(newItem);
            }
            saveCartToStorage(state.items);
        },

        removeItem: (state, action: PayloadAction<{ id: string; metal: string; size: string }>) => {
            state.items = state.items.filter(
                i => !(i.id === action.payload.id && i.metal === action.payload.metal && i.size === action.payload.size)
            );
            saveCartToStorage(state.items);
        },

        updateQuantity: (
            state,
            action: PayloadAction<{ id: string; metal: string; size: string; quantity: number }>
        ) => {
            const item = state.items.find(
                i => i.id === action.payload.id && i.metal === action.payload.metal && i.size === action.payload.size
            );
            if (item) {
                item.quantity = action.payload.quantity;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i !== item);
                }
            }
            saveCartToStorage(state.items);
        },
        updateRingSize: (
            state,
            action: PayloadAction<{ id: string; metal: string; oldSize: string; newSize: string }>
        ) => {
            const { id, metal, oldSize, newSize } = action.payload;
            const item = state.items.find(i => i.id === id && i.metal === metal && i.size === oldSize);
            if (item) {
                item.size = newSize;
            }
            saveCartToStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            saveCartToStorage(state.items);
        },
    },
});

export const { addItem, removeItem, updateQuantity, updateRingSize, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalItems = (state: RootState) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
    state.cart.items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);

export const selectCartTotalQuantity = createSelector(
    selectCartItems,
    (items) => items.reduce((sum, i) => sum + (i.quantity ?? 1), 0)
);

export const selectCartSnapshot = createSelector(
  selectCartItems,
  (items) => {
    const subtotal = items.reduce(
      (s, i) => s + parseFloat(i.price) * i.quantity,
      0
    );
    const saved = items.reduce(
      (s, i) =>
        s +
        (i.originalPrice
          ? (parseFloat(i.originalPrice) - parseFloat(i.price)) * i.quantity
          : 0),
      0
    );
    return { items, subtotal, saved };
  }
);

export default cartSlice.reducer;