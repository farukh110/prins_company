"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Customer Support (hidden on mobile) */}
        <div className="w-full md:w-auto mb-2 md:mb-0 hidden md:block">
          <div className="md:flex items-center space-x-2 text-sm text-gray-700">
            <span className="poppins-regular text-[13px]">24/7 Customer Support</span>
            <span className="border-l h-4 border-gray-400" />
            <Link
              href="tel:+18445274367"
              className="poppins-regular text-[13px] text-black"
            >
              +1-844-527-4367
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              className="logo object-contain"
              src="/images/logo/prins_company_logo.jpg"
              alt="Prins Company Logo"
              width={200}
              height={70}
            />
          </Link>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search (hidden on mobile) */}
          <div className="hidden md:flex items-center border px-3 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm w-32"
            />
          </div>

          {/* User Icon */}
          <div className="relative" ref={userMenuRef}>
            <button
              id="user-btn"
              className="flex items-center focus:outline-none"
              onClick={toggleUserMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
                />
              </svg>
            </button>
            <div
              id="user-menu"
              className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 ${userMenuOpen ? "block" : "hidden"
                }`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Heart Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Menu - WRAPPING VERSION */}
      <nav className="border-t hidden md:block relative">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 py-3 text-sm poppins-regular tracking-wide text-gray-700">
            {/* RINGS with Mega Menu */}
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="/">HOME</Link>
            </li>
            <li className="group">
              <Link href="#" className="mega-menu-trigger whitespace-nowrap px-2 py-1">
                RINGS
              </Link>
              <div className="mega-menu hidden group-hover:block absolute left-0 top-full w-full bg-white shadow-lg border-t z-50">
                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8 text-gray-700 text-sm">
                  <div>
                    <h3 className="font-bold mb-2">Natural Gemstone Rings</h3>
                    <ul className="space-y-2">
                      <li><Link href="#">Emerald Rings</Link></li>
                      <li><Link href="#">Blue Sapphire Rings</Link></li>
                      <li><Link href="#">Ruby Rings</Link></li>
                      <li><Link href="#">Amethyst Rings</Link></li>
                      <li><Link href="#">Opal Rings</Link></li>
                      <li><Link href="#">Aquamarine Rings</Link></li>
                      <li><Link href="#">Swiss Blue Topaz Rings</Link></li>
                      <li><Link href="#">Garnet Rings</Link></li>
                      <li><Link href="#">Tanzanite Rings</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Natural Diamond Rings</h3>
                    <ul className="space-y-2">
                      <li><Link href="#">Diamond Rings</Link></li>
                      <li><Link href="#">Colored Diamond Rings</Link></li>
                    </ul>
                    <h3 className="font-bold mt-4 mb-2">Lab-Grown Rings</h3>
                    <ul className="space-y-2">
                      <li><Link href="#">Lab Diamond Rings</Link></li>
                      <li><Link href="#">Lab Colored Diamond Rings</Link></li>
                      <li><Link href="#">Lab Emerald Rings</Link></li>
                      <li><Link href="#">Lab Blue Sapphire Rings</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Rings by Metal</h3>
                    <ul className="space-y-2">
                      <li><Link href="#">Platinum Rings</Link></li>
                      <li><Link href="#">Yellow Gold Rings</Link></li>
                      <li><Link href="#">Rose Gold Rings</Link></li>
                      <li><Link href="#">White Gold Rings</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Featured</h3>
                    <ul className="space-y-2">
                      <li><Link href="#">Best Selling Rings</Link></li>
                      <li><Link href="#">GIA Certified Rings</Link></li>
                      <li><Link href="#">Initial Rings</Link></li>
                      <li><Link href="#">Anniversary Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">NECKLACES</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">EARRINGS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">PENDANTS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">PINS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">BRACELETS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">COLLECTIONS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">GIFTS</Link>
            </li>
            <li className="group whitespace-nowrap px-2 py-1">
              <Link href="#">THE EDIT</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className={`border-t md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-2 p-4 text-gray-700 text-sm">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="#">RINGS</Link></li>
          <li><Link href="#">NECKLACES</Link></li>
          <li><Link href="#">EARRINGS</Link></li>
          <li><Link href="#">ENGAGEMENT RINGS</Link></li>
          <li><Link href="#">WEDDING RINGS</Link></li>
          <li><Link href="#">BRACELETS</Link></li>
          <li><Link href="#">COLLECTIONS</Link></li>
          <li><Link href="#">GIFTS</Link></li>
          <li><Link href="#">THE EDIT</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;