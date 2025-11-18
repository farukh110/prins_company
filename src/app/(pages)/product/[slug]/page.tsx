"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ProductMedia from "@/components/ProductMedia";
import ProductRightSide from "@/components/ProductRightSide";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { clearProductData, getProductById, selectProduct, selectProductError, selectProductLoading } from "@/redux/api/products/productSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ProductDetail: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();

  const product = useAppSelector(selectProduct);
  const loading = useAppSelector(selectProductLoading);
  const error = useAppSelector(selectProductError);

  console.log('product details: ', product);

  useEffect(() => {
    if (slug) {
      dispatch(getProductById(slug));
    }

    return () => {
      dispatch(clearProductData());
    };
  }, [slug, dispatch]);

  if (loading) {
    return (
      <>
        <Breadcrumb />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Breadcrumb />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => slug && dispatch(getProductById(slug))}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Breadcrumb />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-600">Product not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <div className="md:flex md:gap-10 lg:gap-11 md:pt-0 md:px-8 lg:px-0 items-start">


        <ProductMedia product={product} />


        <div className="md:w-[330px] lg:w-[500px] lg:pr-12 lg:sticky lg:min-w-[500px] top-[80px] mb-10">

          <ProductRightSide />

        </div>

      </div>
    </>
  )
}

export default ProductDetail;