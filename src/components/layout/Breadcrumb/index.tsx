"use client";

import Link from "next/link";
import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div
      data-trk-type="engagement"
      data-trk-title="Breadcrumb"
      className="a4 poppins-regular text-[10px] text-[#6F6F79] truncate text-ellipsis 
                 pl-4 md:pl-8 lg:pl-4 px-4 py-3 md:px-8 md:max-w-[334px] 
                 overflow-hidden lg:max-w-[657px]"
    >
      <Link
        href="/"
        aria-label="Home"
        data-trk-type="link"
        data-trk-title="Home"
        rel="follow"
        className="hover:underline"
      >
        Home
      </Link>

      <small className="text-[10px] mx-1">/</small>

      <Link
        href="/c/jewelry"
        aria-label="Jewelry"
        data-trk-type="link"
        data-trk-title="Jewelry"
        rel="follow"
        className="hover:underline"
      >
        Jewelry
      </Link>

      <small className="text-[10px] mx-1">/</small>

      <span className="text-clip text-grayscale-800">Rings</span>
    </div>
  );
};

export default Breadcrumb;
