"use client";

import NewProducts from "@/components/NewProducts";
import NewProductsGrid from "@/components/NewProductsGrid";
import VideoBanner from "@/components/VideoBanner";

const NewProduct: React.FC = () => {


    return (
        <>
            <VideoBanner />
            <NewProducts />
            <NewProductsGrid />

        </>);
};

export default NewProduct;
