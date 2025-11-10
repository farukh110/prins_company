"use client";

import CartItem from "@/components/CartItem";
import CustomerFavorites from "@/components/CustomerFavorites";
import NewArrivals from "@/components/NewArrivals";
import OfferCode from "@/components/OfferCode";
import OrderSummary from "@/components/OrderSummary";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectCartItems, selectCartSnapshot } from "@/redux/api/cart/cartSlice";
import { ChevronRight, Lock, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Cart: React.FC = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const [hydrated, setHydrated] = useState<boolean>(false);

    const { items, subtotal, saved } = useAppSelector(selectCartSnapshot);

    useEffect(() => setHydrated(true), []);

    if (!hydrated) return null;

    const isEmpty = items.length === 0;

    const goToCheckout = () => {

        if (isEmpty) return;

        const payload = { items, subtotal, saved };
        const encoded = Buffer.from(JSON.stringify(payload)).toString("base64");

        router.push(`/checkout?cart=${encoded}`);
    };

    return (
        <>
            {/* items in cart */}

            {!isEmpty && (
                <div className="bg-[#F9F9F9] min-h-screen">
                    <div className="max-w-[1280px] mx-auto">
                        <h1 className="text-center text-[22px] poppins-medium py-3">
                            Secure Shopping Bag
                        </h1>

                        <div className="md:flex md:items-start md:pb-12 md:px-4 lg:px-0 mt-6 gap-6">

                            <div className="flex-1 max-w-[816px] w-full space-y-4">
                                {items.map((item) => (
                                    <CartItem
                                        key={`${item.id}-${item.metal}-${item.size}`}
                                        item={item}
                                        discountCode="HOLIDAY"
                                        onEdit={() => console.log('edit')}
                                        onMoveToWishlist={() => console.log('wishlist')}
                                    />
                                ))}
                            </div>

                            {/* ---------- RIGHT: SUMMARY & CHECKOUT ---------- */}
                            <div className="w-full md:w-[306px] lg:w-[424px] space-y-4 md:sticky md:top-5">
                                <OfferCode />
                                <OrderSummary subtotal={subtotal} saved={saved} />
                                <button
                                    onClick={goToCheckout} 
                                    className="group cursor-pointer relative flex h-12 w-full items-center justify-center overflow-hidden bg-gray-800 p-2 text-white transition-transform duration-300 ease-out hover:-translate-y-1"
                                >
                                    <Lock className="h-6 w-6 text-gray-100" />
                                    <span className="px-2 text-base font-normal leading-[30px] tracking-[0.45px]">
                                        Secure Checkout
                                    </span>
                                    <ChevronRight className="absolute right-2 h-5 w-5 transition-transform duration-300 md:group group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* end items in cart */}

            {/* if cart is empty then show this */}

            {isEmpty && (
                <>
                    <div className="space-y-2 text-center my-8 border-b border-grayscale-600 pb-5 px-4 md:px-0">
                        <h1 className="text-[14px] poppins-semibold text-[#161618] leading-8 flex items-center justify-center gap-2">
                            <ShoppingBag className="h-5 w-5" />
                            Your Shopping Bag is Empty.
                        </h1>
                        <p className="text-[13px] poppins-light text-[#161618]">
                            To begin shopping, view our bestsellers and new arrivals below or click{" "}
                            <a
                                href="/c/jewelry"
                                className="underline underline-offset-2 font-medium"
                            >
                                here
                            </a>{" "}
                            to view the entire collection.
                        </p>
                    </div>

                    <CustomerFavorites />
                    <NewArrivals />
                </>
            )}

            {/* end area if cart is empty */}
        </>);
};

export default Cart;
