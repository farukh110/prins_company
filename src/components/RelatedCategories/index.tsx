import Link from 'next/link';
import { FC } from 'react';

interface RelatedCategory {
  label: string;
  href: string;
  title: string;
}

const relatedCategories: RelatedCategory[] = [
  { label: 'Engagement Ring', href: '/c/engagement-rings', title: 'Engagement Ring' },
  { label: 'Plain Wedding Bands for Women', href: '/c/wedding-bands', title: 'Plain Wedding Bands for Women' },
  { label: 'Promise Rings', href: '/c/promise-rings', title: 'Promise Rings' },
  { label: 'Wedding Rings for Women', href: '/c/wedding-rings', title: 'Wedding Rings for Women' },
];

const RelatedCategories: FC = () => {
  return (
    <div
      className="mt-18 text-center tablet:mt-20 desktop:mt-24"
      data-trk-type="view"
      data-trk-title="Related Search"
    >
      <h2 className="mb-6 text-3xl font-bold tracking-tight">
        Related Categories
      </h2>
      <div
        className="flex max-tablet:overflow-x-auto max-tablet:justify-start tablet:flex-wrap justify-center items-center gap-4 pb-5 tablet:pb-0"
      >
        {relatedCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            aria-label={category.label}
            className="flex px-4 py-2 justify-center items-center bg-gray-200 text-gray-800 text-[13px] font-normal leading-6 tracking-[0.55px] min-w-max transition-all duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100 hover:no-underline"
            tabIndex={0}
            data-trk-type="link"
            data-trk-title={category.title}
            rel="follow"
            data-uw-rm-brl="PR"
            data-uw-original-href={category.href}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedCategories;