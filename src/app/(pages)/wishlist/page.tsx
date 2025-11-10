"use client";

import WishlistItem from "@/components/WishlistItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getWishlistItems } from "@/redux/api/auth/authSlice";
import { mapWishlistApiToProps } from "@/types/wishlist";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();

  const { user, token, wishlistLoading, wishlistError, wishlist } = useAppSelector(
    (s) => s.auth
  );

  const customerId = user?.customer_id;

  useEffect(() => {
    if (token && customerId) {
      dispatch(getWishlistItems(customerId));
    }
  }, [dispatch, token, customerId]);

  if (wishlistLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
        <span className="ml-2 text-gray-600">Loading wishlist…</span>
      </div>
    );
  }

  if (wishlistError) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600">Error: {wishlistError}</p>
        <button
          onClick={() => customerId && dispatch(getWishlistItems(customerId))}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Your wishlist is empty.</p>
      </div>
    );
  }

  const uiItems = wishlist.map(mapWishlistApiToProps);

  return (
    <>
      <div className="border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
        <h1 className="text-xl font-medium md:text-2xl">
          My Wishlist{" "}
          <span className="text-gray-600 font-light">
            ({uiItems.length} {uiItems.length === 1 ? "Item" : "Items"})
          </span>
        </h1>
      </div>

      {/* Grid – Use mapped uiItems */}
      <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 2xl:grid-cols-5">
        {uiItems.map((item) => (
          <WishlistItem
            key={item.id}
            {...item}
            onRemove={(id) => {
              console.log("Remove item:", id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Wishlist;