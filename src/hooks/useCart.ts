import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { addItem, removeItem, selectCartItems, selectCartTotalItems, selectCartTotalPrice, updateQuantity } from '@/redux/api/cart/cartSlice';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectCartTotalItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  return {
    items,
    totalItems,
    totalPrice,
    addItem: (payload: Parameters<typeof addItem>[0]) => dispatch(addItem(payload)),
    removeItem: (payload: Parameters<typeof removeItem>[0]) => dispatch(removeItem(payload)),
    updateQuantity: (payload: Parameters<typeof updateQuantity>[0]) =>
      dispatch(updateQuantity(payload)),
  };
};