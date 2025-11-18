"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { Plus, Minus, Search, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getAllSubCategories } from '@/redux/api/subCategories/subCategorySlice';
import { clearProductData, getProductTypes } from '@/redux/api/products/productSlice';

interface FilterOption {
    name: string;
    count?: number;
    icon?: string;
    type?: 'checkbox' | 'radio';
}

interface FilterSection {
    title: string;
    options?: FilterOption[];
    isSingleSelect?: boolean;
}

interface FiltersProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Filters: React.FC<FiltersProps> = ({ isOpen = false, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();

    /* ---------- UI State ---------- */
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<{ [k: string]: string[] }>({});
    const [searchTerms, setSearchTerms] = useState<{ [k: string]: string }>({});

    /* ---------- Redux State (SSR-safe) ---------- */
    const subCategoryState = useSelector((s: RootState) => s.subCategory ?? {});
    const productState = useSelector((s: RootState) => s.products ?? {});

    const subCategories = subCategoryState.data ?? [];
    const subCatLoading = subCategoryState.loading ?? false;

    const productResp = productState.data ?? null;
    const prodLoading = productState.loading ?? false;
    const prodError = productState.error ?? null;

    /* ---------- Stable Derived Data (Fixes useMemo warnings) ---------- */
    const firstSubCategoryStoneTypes = useMemo(() => {
        return subCategories[0]?.stone_types ?? [];
        
    }, [subCategories]); // Fixed: depend on full array, not just subCategories[0]

    const productTypesData = useMemo(() => {
        return productResp ?? [];
    }, [productResp]);

    /* ---------- Load SubCategories on mount if empty ---------- */
    useEffect(() => {
        if (subCategories.length === 0 && !subCatLoading) {
            dispatch(getAllSubCategories());
        }
    }, [dispatch, subCategories.length, subCatLoading]);

    /* ---------- Dynamic Filter Sections ---------- */

    // Stone Type Section (from first subcategory)
    const stoneTypeSection: FilterSection | null = useMemo(() => {
        if (!firstSubCategoryStoneTypes.length) return null;

        return {
            title: 'Stone Type',
            options: firstSubCategoryStoneTypes.map((it: any) => ({
                name: it.name ?? it.title ?? 'Unknown',
            })),
        };
    }, [firstSubCategoryStoneTypes]);

    // Product Type Section (aggregated from API response)
    const productTypeSection: FilterSection | null = useMemo(() => {
        if (!productTypesData.length) return null;

        const countMap = new Map<string, number>();

        productTypesData.forEach((item: any) => {
            item.productTypes?.forEach((pt: any) => {
                const name = pt.name;
                if (name) {
                    const currentCount = countMap.get(name) ?? 0;
                    countMap.set(name, currentCount + (pt.products?.length ?? 0));
                }
            });
        });

        const options: FilterOption[] = Array.from(countMap.entries())
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count); // Optional: sort by popularity

        return {
            title: 'Product Type',
            options,
        };
    }, [productTypesData]);

    /* ---------- Static Filter Sections ---------- */
    const staticSections: FilterSection[] = [
        {
            title: 'Price',
            options: [
                { name: '$1,000 & Under', count: 643, type: 'radio' },
                { name: '$1,000 - $2,000', count: 1690, type: 'radio' },
                { name: '$2,000 - $3,000', count: 1674, type: 'radio' },
                { name: '$3,000 - $4,000', count: 1347, type: 'radio' },
                { name: '$4,000 - $5,000', count: 1059, type: 'radio' },
                { name: '$5,000 & Over', count: 1209, type: 'radio' },
            ],
            isSingleSelect: true,
        },
        {
            title: 'Weight',
            options: [
                { name: 'Over 3.01 ct', count: 1145 },
                { name: '1.51 - 3.00 ct', count: 1133 },
                { name: '1.01 - 1.50 ct', count: 930 },
                { name: '0.51 - 1.00 ct', count: 803 },
                { name: '0.01 - 0.50 ct', count: 714 },
            ],
        },
    ];

    /* ---------- Final Filter Sections List ---------- */
    const filterSections = useMemo(() => {
        const sections = [...staticSections];
        if (productTypeSection) sections.unshift(productTypeSection);
        if (stoneTypeSection) sections.unshift(stoneTypeSection);
        return sections;
    }, [stoneTypeSection, productTypeSection, staticSections]); // Add staticSections

    /* ---------- Trigger Product Types API when Stone Type changes ---------- */
    const selectedStoneTypes = selectedFilters['Stone Type'] ?? [];

    const kebabStoneTypes = useMemo(() => {
        return selectedStoneTypes.map((name: string) =>
            name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        );
    }, [selectedStoneTypes]);

    useEffect(() => {
        if (selectedStoneTypes.length === 0) {
            dispatch(clearProductData());
            return;
        }
        dispatch(getProductTypes({ stoneType: kebabStoneTypes }));
    }, [dispatch, selectedStoneTypes.length, kebabStoneTypes]);

    /* ---------- UI Handlers ---------- */
    const toggleSection = (title: string) => {
        setOpenSections(prev =>
            prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
        );
    };

    const handleFilterSelect = (section: string, item: string) => {
        setSelectedFilters(prev => {
            const current = prev[section] ?? [];
            const secConfig = filterSections.find(s => s.title === section);

            if (secConfig?.isSingleSelect) {
                return { ...prev, [section]: [item] };
            }

            if (current.includes(item)) {
                return { ...prev, [section]: current.filter(i => i !== item) };
            }

            return { ...prev, [section]: [...current, item] };
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters({});
        setSearchTerms({});
        dispatch(clearProductData());
    };

    const handleSearchChange = (section: string, value: string) => {
        setSearchTerms(prev => ({ ...prev, [section]: value }));
    };

    const filteredOptions = (section: FilterSection) => {
        if (!section.options) return [];
        const term = (searchTerms[section.title] ?? '').toLowerCase().trim();
        if (!term) return section.options;
        return section.options.filter(opt =>
            opt.name.toLowerCase().includes(term)
        );
    };

    return (
        <section
            className={`
                ${isOpen
                    ? 'fixed inset-0 z-50 w-full max-w-sm bg-white shadow-2xl overflow-y-auto md:hidden'
                    : 'hidden md:block md:w-[260px] lg:w-[300px] md:border-r md:border-gray-200'
                }
            `}
        >
            {/* Mobile Close Button */}
            {isOpen && onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
                >
                    <X className="h-7 w-7" />
                </button>
            )}

            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-5 border-b">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                    Clear All
                </button>
            </div>

            {/* Filter Sections */}
            <div className="px-4 py-3 space-y-4">
                {filterSections.map(section => (
                    <div key={section.title} className="border-b border-gray-200 pb-4 last:border-0">
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="w-full flex items-center justify-between py-2 text-left"
                        >
                            <span className="font-medium text-gray-900">{section.title}</span>
                            {openSections.includes(section.title) ? (
                                <Minus className="h-5 w-5 text-gray-500" />
                            ) : (
                                <Plus className="h-5 w-5 text-gray-500" />
                            )}
                        </button>

                        {/* Section Content */}
                        {openSections.includes(section.title) && section.options && (
                            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                {/* Search within section */}
                                {section.options.length > 5 && (
                                    <div className="relative mb-4">
                                        <input
                                            type="text"
                                            placeholder={`Search ${section.title}...`}
                                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                            value={searchTerms[section.title] ?? ''}
                                            onChange={e => handleSearchChange(section.title, e.target.value)}
                                        />
                                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    </div>
                                )}

                                {/* Loading / Error States */}
                                {prodLoading && section.title === 'Product Type' && (
                                    <p className="text-sm text-gray-500 py-3">Loading product types...</p>
                                )}
                                {prodError && section.title === 'Product Type' && (
                                    <p className="text-sm text-red-600 py-3">Failed to load types</p>
                                )}

                                {/* Options List */}
                                <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {filteredOptions(section).map(option => (
                                        <label
                                            key={option.name}
                                            className="flex items-center py-2 hover:bg-gray-50 rounded px-2 cursor-pointer transition"
                                        >
                                            <input
                                                type={section.isSingleSelect ? 'radio' : 'checkbox'}
                                                name={section.isSingleSelect ? section.title.replace(/\s+/g, '-') : undefined}
                                                className="h-4 w-4 text-black focus:ring-black border-gray-300"
                                                checked={
                                                    section.isSingleSelect
                                                        ? selectedFilters[section.title]?.[0] === option.name
                                                        : selectedFilters[section.title]?.includes(option.name)
                                                }
                                                onChange={() => handleFilterSelect(section.title, option.name)}
                                            />
                                            <span className="ml-3 text-sm text-gray-800">
                                                {option.name}
                                                {option.count !== undefined && (
                                                    <span className="ml-2 text-xs text-gray-500 font-medium">
                                                        ({option.count})
                                                    </span>
                                                )}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Filters;
