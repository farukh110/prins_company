"use client";

import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, type FC } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { getAllCategories, clearError } from '@/redux/api/categories/categorySlice';

const GiftSection: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, loading, error } = useSelector((state: RootState) => state.category);

    console.log('categories: ', categories);

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getAllCategories());
        }
    }, [dispatch, categories]);

    if (loading) {
        return (
            <div className="flex justify-center items-center container mt-10 mb-12 max-w-[1288px] mx-auto px-4 md:px-8">
                <p className="text-gray-700 text-lg">Loading categories...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center container mt-10 mb-12 max-w-[1288px] mx-auto px-4 md:px-8">
                <p className="text-red-600 text-lg">Error: {error}</p>
                <button
                    onClick={() => dispatch(clearError())}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Clear Error
                </button>
            </div>
        );
    }

    // Handle empty categories state
    if (categories.length === 0) {
        return (
            <div className="flex justify-center items-center container mt-10 mb-12 max-w-[1288px] mx-auto px-4 md:px-8">
                <p className="text-gray-700 text-lg">No categories available.</p>
            </div>
        );
    }

    return (
        <div
            data-trk-type="view"
            data-trk-title="Gifts That Say It All"
            className="flex justify-center gap-6 items-baseline flex-wrap relative container mt-10 mb-12 max-w-[1288px] mx-auto px-4 md:px-8"
            style={{ minHeight: 0 }}
        >
            <div className="relative w-full flex flex-col md:flex-row md:items-center md:justify-center">
                <h2 className="text-[22px] poppins-medium leading-8 lg:leading-12 text-center md:text-left">
                    Gifts That Say It All
                </h2>
                <a
                    href="/b/customer-reviews"
                    className="text-sm text-gray-700 hover:text-gray-800 underline text-center md:text-right mt-2 md:mt-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2"
                >
                    View All Gifts
                </a>
            </div>
            <div className="w-full order-2">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 justify-center text-gray-700">
                    {categories.map((item) => (
                        <Link
                            key={item.name}
                            href={item.name} // Ensure this is a valid URL path
                            className="cursor-pointer no-underline block text-center group hover:no-underline"
                            data-trk-type="link"
                            data-trk-title={item.name}
                            data-uw-rm-brl="PR"
                            data-uw-original-href={item.name}
                        >
                            <span className="block relative overflow-hidden">
                                <div className="relative z-10">
                                    <span className="relative block w-full overflow-hidden h-full">
                                        <Image
                                            alt={item.name}
                                            src='/images/gifts/1.webp'
                                            width={224}
                                            height={224}
                                            loading="lazy"
                                            className="w-full h-full duration-300 transition object-cover bg-gray-300 group-hover:scale-105"
                                            sizes="15vw"
                                            quality={85}
                                        />
                                    </span>
                                </div>
                            </span>
                            <span className="pt-1 text-sm md:text-base block">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GiftSection;