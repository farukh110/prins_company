"use client";

import NewProducts from "@/components/NewProducts";
import NewProductsGrid from "@/components/NewProductsGrid";
import SaleGrid from "@/components/SaleGrid";
import SaleProducts from "@/components/SaleProducts";
import VideoBanner from "@/components/VideoBanner";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewProduct: React.FC = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <>
            <VideoBanner />
            <NewProducts />
            <NewProductsGrid />

        </>);
};

export default NewProduct;
