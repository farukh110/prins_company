"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ProductMedia from "@/components/ProductMedia";
import ProductRightSide from "@/components/ProductRightSide";
import { useAppDispatch } from "@/hooks/redux";
import { useParams } from "next/navigation";

const ProductDetail: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();

  console.log('product details: ', slug);

  return (
    <>
      <Breadcrumb />
      <div className="md:flex md:gap-10 lg:gap-11 md:pt-0 md:px-8 lg:px-0 items-start">


        <ProductMedia />


        <div className="md:w-[330px] lg:w-[500px] lg:pr-12 lg:sticky lg:min-w-[500px] top-[80px] mb-10">

          <ProductRightSide />

        </div>

      </div>
    </>
  )
}

export default ProductDetail;