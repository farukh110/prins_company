"use client";

import CatalogHeroBanner from "@/components/CatalogHeroBanner";
import Filters from "@/components/Filters";
import GiftSection from "@/components/Gifts";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Overview from "@/components/Overview";
import ProductCard from "@/components/ProductCard";
import RelatedCategories from "@/components/RelatedCategories";
import TopCategories from "@/components/TopCategories";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getByCategorySlug } from "@/redux/api/categories/categorySlice";
import { HelpCircle, Sliders, SortDesc, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Category: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();
    const dispatch = useAppDispatch();

    const { selectedCategory, products, loading, error } = useAppSelector(
        (state) => state.category
    );

    const [selectedSort, setSelectedSort] = useState("Best Seller");
    const [isFilterOpen, setIsFilterOpen] = useState(false);


    const sortOptions = [
        "Best Seller",
        "Price: Low to High",
        "Price: High to Low",
        "Newest",
        "Customer Rating",
    ];

    useEffect(() => {
        if (slug) {
            dispatch(getByCategorySlug({ slug }));
        }
    }, [dispatch, slug]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const option = event.target.value;
        setSelectedSort(option);
        console.log(`Selected sort: ${option}`);
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg">Loading…</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center text-red-600">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!selectedCategory) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Category not found.</p>
            </div>
        );
    }

    const getFirstImage = (json: string): string => {
        try {
            const arr = JSON.parse(json);
            return Array.isArray(arr) && arr[0] ? arr[0] : "/images/products/rings/1.webp";
        } catch {
            return "/images/products/rings/1.webp";
        }
    };

    return (
        <>
            <Breadcrumb />
            <CatalogHeroBanner />
            <TopCategories />

            <div className="space-y-8 mt-4 py-4">
                <div className="flex flex-nowrap justify-between gap-5 lg:gap-8 md:px-8 md:py-4 max-md:bg-grayscale-300">
                    <Filters
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                    />

                    <section className="w-full md:w-[calc(100%-240px)] lg:w-[calc(100%-332px)]">
                        <div className="flex-1">
                            <div className="px-4 py-3 md:px-0 md:py-0">
                                <div className="flex items-center justify-between gap-1">
                                    <div className="flex items-center gap-1 flex-grow">
                                        <h2 className="flex gap-1 capitalize text-lg md:text-2xl">
                                            {products.length} {selectedCategory.name}
                                        </h2>
                                        <span className="relative cursor-pointer group">
                                            <HelpCircle className="inline-block text-xl" />
                                            <span className="hidden group-hover:inline-block absolute top-full right-[-100px] md:left-full md:right-auto md:top-[-5px] md:ml-2.5 w-max max-w-[244px] border border-gray-600 rounded-sm mt-2.5 text-gray-800 p-4 bg-gray-400 shadow text-sm z-20">
                                                <span className="block absolute top-[-5.5px] right-[100px] md:left-[-5.5px] md:right-auto md:top-1.5 md:border-b-0 md:border-t-0 h-2.5 w-2.5 border-l border-t border-gray-600 bg-gray-400 rotate-45" />
                                                The power is in your hands! Each product featured here
                                                can be customized based on your choice of gemstone and
                                                its quality, carat weight and metal.
                                            </span>
                                        </span>
                                    </div>

                                    {/* Sort and Filter Section */}
                                    <div className="flex items-center gap-2 text-gray-900 md:min-w-[194px] lg:min-w-[300px] md:justify-end">
                                        {/* Mobile Filter Button */}
                                        <button
                                            aria-label="Filter"
                                            tabIndex={0}
                                            data-trk-type="button"
                                            data-trk-title="Filter"
                                            className="flex items-center gap-1 px-2.5 py-1 border min-h-8 md:hidden text-sm"
                                            onClick={() => setIsFilterOpen(true)} // Open drawer on click
                                        >
                                            <Sliders className="text-xl" />
                                            <span className="whitespace-nowrap">
                                                <span>Filters</span> <span className="md:hidden">(2)</span>
                                            </span>
                                        </button>

                                        <span>
                                            <SortDesc
                                                className="text-xl hidden md:block lg:hidden"
                                                aria-hidden="true"
                                            />
                                        </span>

                                        {/* Sort By Select */}
                                        <label className="hidden md:flex items-center gap-2 text-gray-700 text-sm">
                                            Sort by:
                                            <select
                                                value={selectedSort}
                                                onChange={handleSortChange}
                                                className="border border-gray-400 bg-white rounded-sm px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                                            >
                                                {sortOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                </div>

                                {/* Mobile Filter Chips */}
                                <div className="mt-2">
                                    <div
                                        data-trk-type="engagement"
                                        data-trk-title="Catalog Filters"
                                        className="flex justify-between gap-2 md:hidden"
                                    >
                                        <div className="overflow-x-auto flex gap-2 flex-grow pb-2">
                                            <button className="relative pt-1 pr-6 pb-1 pl-1.5 w-max flex items-center justify-between whitespace-nowrap text-sm text-gray-700 bg-white">
                                                <span>Diamond</span>
                                                <X className="text-base absolute right-1" />
                                            </button>
                                            <button className="relative pt-1 pr-6 pb-1 pl-1.5 w-max flex items-center justify-between whitespace-nowrap text-sm text-gray-700 bg-white">
                                                <span>Rings</span>
                                                <X className="text-base absolute right-1" />
                                            </button>
                                        </div>
                                        <button className="min-w-[60px] text-sm pb-2 underline font-light">
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 md:gap-3 lg:gap-6 gap-1">

                                {products.map((p) => {
                                    const firstImg = getFirstImage(p.image);

                                    return (
                                        <ProductCard
                                            key={p.id}
                                            ProductId={p.id}
                                            href={`/product/${p.id}`}
                                            title={p.name}
                                            price={`$${p.price}`}
                                            imageSrc={firstImg}
                                            hoverImageSrc={firstImg}
                                            swatches={[
                                                "#1e40af",
                                                "#9333ea",
                                                "#991b1b",
                                                "#000",
                                                "#a855f7",
                                            ]}
                                        />
                                    );
                                })}

                                {/* <ProductCard
                                    href="/p/oval-london-blue-topaz-split-shank-ring"
                                    title="Oval London Blue Topaz Split Shank Ring with Trio Diamonds"
                                    price="$349 - $2,189"
                                    imageSrc="/images/products/rings/1.webp"
                                    hoverImageSrc="/images/products/rings/1_hover.webp"
                                    swatches={['#1e40af', '#9333ea', '#991b1b', '#000', '#a855f7']}
                                /> */}

                                <div className="col-span-full text-center mt-8">
                                    <p className="font-normal text-gray-600">Viewed {products.length} of {products.length}</p>
                                    <div className="mt-4">
                                        <progress
                                            value={(products.length / Math.max(products.length, 1)) * 100}
                                            max="100"
                                            className="w-full max-w-[336px] h-2 rounded-full overflow-hidden bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-black [&::-moz-progress-bar]:bg-black"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            aria-label="Load More Products"
                                            tabIndex={0}
                                            data-trk-type="button"
                                            data-trk-title="Load More Products"
                                            className="w-full max-w-[336px] cursor-pointer px-6 py-3 border border-gray-400 bg-white text-black uppercase font-semibold rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                        >
                                            LOAD MORE PRODUCTS
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>

                <GiftSection />
                <RelatedCategories />
                <Overview />
            </div>

            {/* Mobile Overlay (light dark with transparency) */}
            {isFilterOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-10 z-40 md:hidden"
                    style={{ backgroundColor: 'rgba(17, 24, 39, 0.1)' }} // Fallback for Tailwind issue
                    onClick={() => setIsFilterOpen(false)}
                />
            )}
        </>
    );
};

export default Category;