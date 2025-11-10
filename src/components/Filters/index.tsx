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

    /* ---------- UI state ---------- */
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<{ [k: string]: string[] }>({});
    const [searchTerms, setSearchTerms] = useState<{ [k: string]: string }>({});

    /* ---------- Redux: SSR-SAFE ---------- */
    const subCategoryState = useSelector((s: RootState) => s.subCategory ?? {});
    const productState = useSelector((s: RootState) => s.products ?? {}); // <-- products, not product

    const subCategories = subCategoryState.data ?? [];
    const subCatLoading = subCategoryState.loading ?? false;

    const productResp = productState.data ?? null;
    const prodLoading = productState.loading ?? false;
    const prodError = productState.error ?? null;

    /* ---------- Load sub-categories once ---------- */
    useEffect(() => {
        if (subCategories.length === 0 && !subCatLoading) {
            dispatch(getAllSubCategories());
        }
    }, [dispatch, subCategories.length, subCatLoading]);

    /* ---------- Stone-Type (dynamic) ---------- */
    const stoneTypeSection: FilterSection | null = useMemo(() => {
        const items = subCategories[0]?.stone_types;
        if (!items?.length) return null;
        return {
            title: 'Stone Type',
            options: items.map((it: any) => ({
                name: it.name ?? it.title,
            })),
        };
    }, [subCategories]);

    /* ---------- Product-Type (API-driven) ---------- */
    const productTypeSection: FilterSection | null = useMemo(() => {
        if (!productResp?.length) return null;

        const map = new Map<string, number>();
        productResp.forEach((st: any) => {
            st.productTypes.forEach((pt: any) => {
                const cur = map.get(pt.name) ?? 0;
                map.set(pt.name, cur + pt.products.length);
            });
        });

        const options: FilterOption[] = Array.from(map.entries()).map(
            ([name, count]) => ({ name, count })
        );

        return { title: 'Product Type', options };
    }, [productResp]);

    /* ---------- Static sections ---------- */
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
                { name: 'Over 3.01', count: 1145 },
                { name: '1.51 - 3.00', count: 1133 },
                { name: '1.01 - 1.50', count: 930 },
                { name: '0.51 - 1.00', count: 803 },
                { name: '0.01 - 0.50', count: 714 },
            ],
        },
    ];

    /* ---------- Assemble final list ---------- */
    const filterSections = useMemo(() => {
        const list = [...staticSections];
        if (productTypeSection) list.unshift(productTypeSection);
        if (stoneTypeSection) list.unshift(stoneTypeSection);
        return list;
    }, [stoneTypeSection, productTypeSection]);

    /* ---------- Call API when Stone-Type changes ---------- */
    const selectedStoneTypes = selectedFilters['Stone Type'] ?? [];

    const kebabStoneTypes = selectedStoneTypes.map((name: string) =>
        name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    );

    useEffect(() => {
        if (selectedStoneTypes.length === 0) {
            dispatch(clearProductData());
            return;
        }
        dispatch(getProductTypes({ stoneType: kebabStoneTypes }));
    }, [dispatch, kebabStoneTypes.join(',')]);

    /* ---------- UI helpers ---------- */
    const toggleSection = (title: string) =>
        setOpenSections(p => (p.includes(title) ? p.filter(t => t !== title) : [...p, title]));

    const handleFilterSelect = (section: string, item: string) => {
        setSelectedFilters(prev => {
            const cur = prev[section] ?? [];
            const sec = filterSections.find(s => s.title === section);
            if (sec?.isSingleSelect) return { ...prev, [section]: [item] };
            return cur.includes(item)
                ? { ...prev, [section]: cur.filter(i => i !== item) }
                : { ...prev, [section]: [...cur, item] };
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters({});
        dispatch(clearProductData());
    };

    const handleSearchChange = (section: string, value: string) =>
        setSearchTerms(p => ({ ...p, [section]: value }));

    const filteredOptions = (section: FilterSection) => {
        if (!section.options) return [];
        const term = (searchTerms[section.title] ?? '').toLowerCase();
        return section.options.filter(o => o.name.toLowerCase().includes(term));
    };

    return (
        <section
            className={`
        ${isOpen
                    ? 'block fixed top-0 left-0 z-50 w-4/5 max-w-sm h-full bg-white overflow-y-auto shadow-lg md:hidden'
                    : 'hidden md:block md:relative md:w-[220px] lg:w-[300px] md:border-r md:border-gray-200'
                }
      `}
        >
            {isOpen && (
                <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
                    <X className="h-6 w-6" />
                </button>
            )}

            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-3 py-4 border-b">
                <span className="text-xl font-semibold">Filters</span>
                <button className="text-sm text-gray-600 hover:underline" onClick={clearAllFilters}>
                    Clear All
                </button>
            </div>

            <div className="space-y-2 px-3 py-2">
                {filterSections.map(section => (
                    <div key={section.title} className="border-b border-gray-200 pb-3">
                        <div
                            className="flex items-center justify-between py-2 cursor-pointer"
                            onClick={() => toggleSection(section.title)}
                        >
                            <span className="text-base font-medium">{section.title}</span>
                            {openSections.includes(section.title) ? (
                                <Minus className="h-5 w-5" />
                            ) : (
                                <Plus className="h-5 w-5" />
                            )}
                        </div>

                        {openSections.includes(section.title) && section.options && (
                            <div className="mt-3">
                                <div className="relative mb-3">
                                    <input
                                        type="text"
                                        placeholder={`Search ${section.title}`}
                                        className="w-full pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                                        value={searchTerms[section.title] ?? ''}
                                        onChange={e => handleSearchChange(section.title, e.target.value)}
                                    />
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                </div>

                                <div className="max-h-48 overflow-y-auto space-y-1">
                                    {prodLoading && section.title === 'Product Type' ? (
                                        <p className="text-sm text-gray-500 py-1">Loading product types…</p>
                                    ) : prodError && section.title === 'Product Type' ? (
                                        <p className="text-sm text-red-600 py-1">{prodError}</p>
                                    ) : (
                                        filteredOptions(section).map(opt => (
                                            <label
                                                key={opt.name}
                                                className="flex items-center py-1.5 hover:bg-gray-50 cursor-pointer"
                                            >
                                                <input
                                                    type={section.isSingleSelect ? 'radio' : 'checkbox'}
                                                    name={section.isSingleSelect ? section.title : undefined}
                                                    className="mr-3 h-4 w-4 text-black focus:ring-black"
                                                    checked={
                                                        section.isSingleSelect
                                                            ? selectedFilters[section.title]?.[0] === opt.name
                                                            : selectedFilters[section.title]?.includes(opt.name)
                                                    }
                                                    onChange={() => handleFilterSelect(section.title, opt.name)}
                                                />
                                                {opt.icon && (
                                                    <img src={opt.icon} alt={opt.name} className="w-6 h-6 mr-2 object-contain" />
                                                )}
                                                <span className="text-sm">
                                                    {opt.name}
                                                    {opt.count !== undefined && (
                                                        <span className="ml-1 text-xs text-gray-500">({opt.count})</span>
                                                    )}
                                                </span>
                                            </label>
                                        ))
                                    )}
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