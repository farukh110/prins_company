"use client";

import React, { useState } from 'react';
import { Plus, Minus, Search, X } from 'lucide-react';

interface FilterOption {
    name: string;
    count: number;
    icon?: string;
    type?: 'checkbox' | 'radio';
}

interface FilterSection {
    title: string;
    options?: FilterOption[];
    selectedItems?: string[];
    isSingleSelect?: boolean;
}

const filterSections: FilterSection[] = [
    {
        title: 'Metal Type',
        options: [
            { name: 'White Gold', count: 2673, icon: '/images/category/rings/white_gold.webp' },
            { name: 'Yellow Gold', count: 2644, icon: '/images/category/rings/yellow_gold.webp' },
            { name: 'Rose Gold', count: 2522, icon: '/images/category/rings/rose_gold.webp' },
            { name: 'Platinum', count: 2057, icon: '/images/category/rings/platinum.webp' },
            { name: 'Silver', count: 265, icon: '/images/category/rings/silver.webp' },
        ],
    },
    {
        title: 'Natural Gemstones',
        options: [
            { name: 'Diamond', count: 534, icon: '/images/category/rings/diamond.webp' },
            { name: 'Blue Sapphire', count: 389, icon: '/images/category/rings/sapphire.webp' },
            { name: 'Emerald', count: 300, icon: '/images/category/rings/emerald.webp' },
            { name: 'Ruby', count: 254, icon: '/images/category/rings/ruby.webp' },
            { name: 'Aquamarine', count: 215, icon: '/images/category/rings/aquamarine.webp' },
        ],
        selectedItems: ['Diamond'],
    },
    {
        title: 'Lab Grown Gemstones',
        options: [
            { name: 'Lab Grown Diamond', count: 444, icon: '/images/category/rings/diamond.webp' },
            { name: 'Lab Grown Blue Sapphire', count: 206, icon: '/images/category/rings/sapphire.webp' },
            { name: 'Lab Grown Emerald', count: 198, icon: '/images/category/rings/emerald.webp' },
            { name: 'Lab Grown Ruby', count: 180, icon: '/images/category/rings/ruby.webp' },
            { name: 'Lab Grown Alexandrite', count: 95, icon: '/images/category/rings/aquamarine.webp' },
        ],
    },
    {
        title: 'Gemstone Shape',
        options: [
            { name: 'Round', count: 1159 },
            { name: 'Oval', count: 533 },
            { name: 'Emerald Cut', count: 222 },
            { name: 'Cushion', count: 205 },
            { name: 'Pear', count: 176 },
        ],
    },
    {
        title: 'Jewelry Styles',
        options: [
            { name: 'Classic', count: 1539 },
            { name: 'Side Stone', count: 914 },
            { name: 'Solitaire', count: 683 },
            { name: 'Fashion', count: 653 },
            { name: 'Halo', count: 552 },
        ],
    },
    {
        title: 'Carat Weight',
        options: [
            { name: 'Over 3.01', count: 1145 },
            { name: '1.51 - 3.00', count: 1133 },
            { name: '1.01 - 1.50', count: 930 },
            { name: '0.51 - 1.00', count: 803 },
            { name: '0.01 - 0.50', count: 714 },
        ],
    },
    {
        title: 'Jewelry Types',
        options: [
            { name: 'Rings', count: 2707 },
            { name: 'Pendants', count: 1441 },
            { name: 'Necklaces', count: 1441 },
            { name: 'Earrings', count: 833 },
            { name: 'Bracelets', count: 337 },
        ],
        selectedItems: ['Rings'],
    },
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
        title: 'Occasion',
        options: [
            { name: 'Engagement', count: 1231 },
            { name: 'Wedding', count: 372 },
            { name: 'Promise', count: 179 },
        ],
    },
];

interface FiltersProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Filters: React.FC<FiltersProps> = ({ isOpen = false, onClose }) => {
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
        'Natural Gemstones': ['Diamond'],
        'Jewelry Types': ['Rings'],
    });
    const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

    const toggleSection = (title: string) => {
        setOpenSections((prev) =>
            prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
        );
    };

    const handleFilterSelect = (section: string, item: string) => {
        setSelectedFilters((prev) => {
            const current = prev[section] || [];
            if (filterSections.find((s) => s.title === section)?.isSingleSelect) {
                return { ...prev, [section]: [item] };
            }
            if (current.includes(item)) {
                return { ...prev, [section]: current.filter((i) => i !== item) };
            }
            return { ...prev, [section]: [...current, item] };
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters({});
    };

    const handleSearchChange = (section: string, value: string) => {
        setSearchTerms((prev) => ({ ...prev, [section]: value }));
    };

    const filteredOptions = (section: FilterSection) => {
        if (!section.options) return [];
        const searchTerm = searchTerms[section.title]?.toLowerCase() || '';
        return section.options.filter((option) =>
            option.name.toLowerCase().includes(searchTerm)
        );
    };

    return (
        <section
            data-trk-type="engagement"
            data-trk-title="Filters"
            className={`
                ${isOpen 
                    ? 'block fixed top-0 left-0 z-50 w-4/5 max-w-sm h-full bg-white overflow-y-auto shadow-lg transform transition-transform duration-300 ease-in-out md:hidden' 
                    : 'hidden md:block md:relative md:w-[220px] lg:w-[300px] md:border-r md:border-gray-200'
                }
            `}
        >
            {/* Mobile Close Button */}
            {isOpen && (
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={onClose}
                    aria-label="Close Filters"
                >
                    <X className="h-6 w-6" />
                </button>
            )}

            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-3 py-4">
                <span className="text-xl font-semibold">Filters</span>
                <button
                    className="text-sm text-gray-600 hover:underline"
                    role="button"
                    aria-label="Clear All"
                    onClick={clearAllFilters}
                >
                    Clear All
                </button>
            </div>
            <div className="space-y-2 px-3 py-2">
                {filterSections.map((section) => (
                    <div key={section.title} className="border-b border-gray-300 pb-2">
                        <div
                            className="flex cursor-pointer items-center justify-between py-2"
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleSection(section.title)}
                            onKeyDown={(e) => e.key === 'Enter' && toggleSection(section.title)}
                        >
                            <span className="text-base font-medium capitalize">{section.title}</span>
                            {openSections.includes(section.title) ? (
                                <Minus className="h-5 w-5 text-gray-600" />
                            ) : (
                                <Plus className="h-5 w-5 text-gray-600" />
                            )}
                        </div>
                        {section.selectedItems && (
                            <div className="mt-2 space-y-1">
                                {section.selectedItems.map((item) => (
                                    <div key={item} className="flex items-center text-sm text-gray-600">
                                        {item}
                                        <button
                                            data-trk-type="button"
                                            data-trk-title={item}
                                            data-trk-extra='{"action":"removed"}'
                                            className="ml-2 text-gray-400 hover:text-gray-600"
                                            role="button"
                                            aria-label="Remove"
                                            onClick={() => handleFilterSelect(section.title, item)}
                                        >
                                            <svg
                                                width="1em"
                                                height="1em"
                                                stroke="transparent"
                                                className="text-base"
                                            >
                                                <use xlinkHref="/assets/updated-icons.svg#close" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        {section.options && openSections.includes(section.title) && (
                            <div className="mt-2">
                                <div className="relative mb-2">
                                    <input
                                        type="text"
                                        placeholder={`Search ${section.title}`}
                                        className="w-full rounded border border-gray-300 px-3 py-1 pl-8 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                        value={searchTerms[section.title] || ''}
                                        onChange={(e) => handleSearchChange(section.title, e.target.value)}
                                    />
                                    <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400" />
                                </div>
                                <div className="max-h-40 overflow-y-auto">
                                    {filteredOptions(section).map((option) => (
                                        <label
                                            key={option.name}
                                            className="flex items-center py-1 text-sm text-gray-600 hover:bg-gray-50"
                                        >
                                            <input
                                                type={option.type || section.isSingleSelect ? 'radio' : 'checkbox'}
                                                className="h-4 w-4 text-gray-600 focus:ring-gray-400"
                                                checked={
                                                    section.isSingleSelect
                                                        ? selectedFilters[section.title]?.[0] === option.name
                                                        : selectedFilters[section.title]?.includes(option.name) || false
                                                }
                                                onChange={() => handleFilterSelect(section.title, option.name)}
                                            />
                                            {option.icon && (
                                                <img
                                                    src={option.icon}
                                                    alt={`${option.name} icon`}
                                                    className="ml-2 mr-2 h-5 w-5 object-contain"
                                                />
                                            )}
                                            <span className='ml-2'>{option.name} ({option.count})</span>
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