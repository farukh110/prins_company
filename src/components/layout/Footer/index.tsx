"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {

  const [countryDropdownOpen, setCountryDropdownOpen] = useState<boolean>(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCountryDropdown = () => {
    setCountryDropdownOpen((prev) => !prev);
  };

  return (
    <footer className="bg-[#00345D] text-white pt-6">
      <div className="max-w-[1400px] mx-auto px-4 md:px-4">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-gray-200 lg:border-none">
          {/* Assistance */}
          <div className="mx-auto w-full max-w-[200px]">
            <div className="lg:block">
              <h3 className="text-base poppins-medium uppercase mb-3">
                HELP CENTER
              </h3>
              <ul className="text-left text-sm">
                <li className="my-2 hover:text-blue-600">
                  <Link href="/track-your-order" className="flex items-center gap-2">
                    Track Your Order
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/returns/guest/new" className="flex items-center gap-2">
                    Returns & Exchange
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/returns/guest/new" className="flex items-center gap-2">
                    Resize & Repair
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/b/faq" className="flex items-center gap-2">
                    FAQs
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/b/accessibility" className="flex items-center gap-2">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <details className="group lg:hidden">
              <summary className="flex justify-between items-center uppercase py-3 px-0 lg:px-4 cursor-pointer">
                <span className="text-sm poppins-medium">ASSISTANCE</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="text-left text-white px-4 py-2 transition-all duration-300 max-h-0 group-open:max-h-[600px] overflow-hidden">
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/contact-us" className="flex items-center gap-2">
                    <span>📞</span> +1-844-527-4367
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link
                    href="mailto:customer.service@angara.com"
                    className="flex items-center gap-2"
                  >
                    <span>📧</span> Email Us
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <div className="flex items-center gap-2">
                    <span>💬</span> Chat With Us
                  </div>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/track-your-order" className="flex items-center gap-2">
                    Track Your Order
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/returns/guest/new" className="flex items-center gap-2">
                    Returns & Exchange
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/returns/guest/new" className="flex items-center gap-2">
                    Resize & Repair
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/faq" className="flex items-center gap-2">
                    FAQs
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/accessibility" className="flex items-center gap-2">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </details>
          </div>
          {/* Shop */}
          <div className="mx-auto w-full max-w-[200px]">
            <div className="hidden lg:block">
              <h3 className="text-base poppins-medium uppercase mb-3">
                SHOP
              </h3>
              <ul className="text-left text-sm">
                <li className="my-2 hover:text-blue-600">
                  <Link href="/c/lab+grown-jewelry" className="flex items-center gap-2">
                    Diamond
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/c/diamond-jewelry" className="flex items-center gap-2">
                    Prec Color
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/c/sapphire-jewelry" className="flex items-center gap-2">
                    Sem Prec Color
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/c/emerald-jewelry" className="flex items-center gap-2">
                    Plain Gold
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/c/ruby-jewelry" className="flex items-center gap-2">
                    Pearl
                  </Link>
                </li>
              </ul>
            </div>
            <details className="group lg:hidden">
              <summary className="flex justify-between items-center uppercase py-3 px-0 lg:px-4 cursor-pointer">
                <span className="text-sm poppins-medium">SHOP</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="text-left text-white px-4 py-2 transition-all duration-300 max-h-0 group-open:max-h-[600px] overflow-hidden">
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/c/lab+grown-jewelry" className="flex items-center gap-2">
                    Diamond
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/c/diamond-jewelry" className="flex items-center gap-2">
                    Prec Color
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/c/sapphire-jewelry" className="flex items-center gap-2">
                    Sem Prec Color
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/c/emerald-jewelry" className="flex items-center gap-2">
                    Plain Gold
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/c/ruby-jewelry" className="flex items-center gap-2">
                    Pearl
                  </Link>
                </li>
              </ul>
            </details>
          </div>
          {/* About Us */}
          <div className="mx-auto w-full max-w-[200px]">
            <div className="hidden lg:block">

              <h3 className="text-base poppins-medium uppercase mb-3">
                ABOUT US
              </h3>
              <ul className="text-left text-sm">
                <li className="my-2 hover:text-blue-600">
                  <Link href="/about-us" className="flex items-center gap-2">
                    Our Story
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link href="/b/customer-reviews" className="flex items-center gap-2">
                    Customer Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <details className="group lg:hidden">
              <summary className="flex justify-between items-center uppercase py-3 px-0 lg:px-4 cursor-pointer">
                <span className="text-sm font-medium">ABOUT US</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="text-left text-white px-4 py-2 transition-all duration-300 max-h-0 group-open:max-h-[600px] overflow-hidden">
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/about-us" className="flex items-center gap-2">
                    Our Story
                  </Link>
                </li>
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/customer-reviews" className="flex items-center gap-2">
                    Customer Reviews
                  </Link>
                </li>
              </ul>
            </details>
          </div>
          {/* Partner With Us */}
          <div className="mx-auto w-full max-w-[200px]">
            <div className="lg:block">

              <h3 className="text-base poppins-medium uppercase mb-3">
                PARTNER WITH US
              </h3>
              <ul className="text-left text-sm">
                <li className="my-2 hover:text-blue-600">
                  <Link href="/b/ls-index" className="flex items-center gap-2">
                    Be a Reseller
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:block mt-3">
              <h3 className="text-sm md:text-base poppins-medium uppercase py-2 px-0 lg:px-0 md:mb-2 md:p-0">
                ASSISTANCE
              </h3>
              <ul className="text-left poppins-regular text-sm">
                <li className="my-2 hover:text-blue-600">
                  <Link href="/b/contact-us" className="flex items-center gap-2">
                    <span>📞</span> +1-844-527-4367
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <Link
                    href="mailto:customer.service@angara.com"
                    className="flex items-center gap-2"
                  >
                    <span>📧</span> info@prinscompany.com
                  </Link>
                </li>
                <li className="my-2 hover:text-blue-600">
                  <div className="flex items-center gap-2">
                    <span>💬</span> Chat With Us
                  </div>
                </li>
              </ul>
            </div>
            <details className="group lg:hidden">
              <summary className="flex justify-between items-center uppercase py-3 px-4 cursor-pointer">
                <span className="text-sm font-medium">PARTNER WITH US</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="text-left bg-gray-200 text-gray-800 px-4 py-2 transition-all duration-300 max-h-0 group-open:max-h-[600px] overflow-hidden">
                <li className="my-2 text-sm hover:text-blue-600">
                  <Link href="/b/ls-index" className="flex items-center gap-2">
                    Be a Reseller
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-between py-4 px-4 md:px-32 border-b border-gray-200 md:border-none">
          <div>
            <Image
              src="/images/payments/paypal.webp"
              alt="PayPal"
              width={75}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/visa.webp"
              alt="Visa"
              width={75}
              height={24}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/mclogo.svg"
              alt="MasterCard"
              width={42}
              height={24}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/american_express.webp"
              alt="American Express"
              width={75}
              height={24}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/affirm-logo.png"
              alt="Affirm"
              width={50}
              height={24}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/apple-pay.svg"
              alt="Apple Pay"
              width={40}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/amazon_pay.webp"
              alt="Amazon Pay"
              width={75}
              height={24}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/payments/norton.png"
              alt="Norton"
              width={75}
              height={28}
              className="object-cover"
            />
          </div>
          <Link
            href="https://www.bbb.org/us/ca/los-angeles/profile/jewelry-stores/angaracom-1216-100082531"
            target="_blank"
            aria-label="BBB"
          >
            <Image
              src="/images/payments/bb.svg"
              alt="BBB"
              width={74}
              height={24}
              className="object-cover"
            />
          </Link>
          <Link href="#" target="_blank" aria-label="Bizrate">
            <Image
              src="/images/payments/bizrate.webp"
              alt="Bizrate"
              width={80}
              height={24}
              className="object-cover"
            />
          </Link>
        </div>
        {/* Country Switcher and Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 px-4 md:px-32">
          <div className="relative" ref={countryDropdownRef}>
            <span className="border-b border-gray-200 py-2 md:p-0 flex items-center gap-1 cursor-pointer" onClick={toggleCountryDropdown}>
              <svg
                className="w-9 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 36 24"
              >
                <path d="M0 0h36v24H0z" fill="#002868" />
                <path d="M0 8h36v8H0z" fill="#FFFFFF" />
                <path d="M0 12h36v1.5H0z" fill="#CE1126" />
              </svg>
              <button className="underline underline-offset-4 text-sm">
                United States (USD)
              </button>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 ${countryDropdownOpen ? "block" : "hidden"}`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    United States (USD)
                  </Link>
                </li>
                {/* Add more country options as needed */}
              </ul>
            </div>
          </div>
          <ul className="flex flex-wrap gap-4 px-6 md:px-0 justify-end py-2 md:p-2 flex-1">
            <li className="flex items-center gap-2 flex-wrap">
              <div className="relative group">
                <span
                  title="Education"
                  className="pr-2 text-sm underline inline-block relative cursor-pointer before:content-[''] before:absolute before:top-1 before:right-0 before:w-px before:h-[20px] before:bg-gray-800 hover:text-blue-600"
                >
                  Education
                </span>
                <span className="absolute left-0 bottom-10 hidden w-[305px] py-4 px-6 bg-gray-200 group-hover:block z-10 text-xs">
                  <Link
                    href="https://www.angara.com/blog/engagement-ring-buying-guide/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    Engagement Ring Guide
                  </Link>
                  <Link
                    href="https://www.angara.com/blog/jewelry-settings/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    Jewelry Settings
                  </Link>
                  <Link
                    href="https://www.angara.com/blog/necklace-length-guide/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    Necklace Length Guide
                  </Link>
                  <Link
                    href="https://www.angara.com/blog/gemstones/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    All About Gemstones
                  </Link>
                  <Link
                    href="https://www.angara.com/blog/about-lab-grown-gemstones/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    Lab Grown Gemstones
                  </Link>
                  <Link
                    href="https://www.angara.com/blog/birthstones-by-months/"
                    target="_blank"
                    className="block mb-2 hover:text-blue-600"
                  >
                    All Months Birthstone
                  </Link>
                </span>
              </div>
              <Link
                href="/sitemap"
                target="_blank"
                className="pr-2 text-sm underline hover:text-blue-600"
              >
                Site Map
              </Link>
              <Link
                href="/b/privacy-and-security"
                target="_blank"
                className="pr-2 text-sm underline hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/b/term-of-use"
                target="_blank"
                className="pr-2 text-sm underline hover:text-blue-600"
              >
                T&amp;C
              </Link>
              <Link
                href="/b/personal-information"
                target="_blank"
                className="pr-2 text-sm underline hover:text-blue-600"
              >
                Do Not Sell My Personal Information
              </Link>
              <span className="cursor-pointer">🧑‍🦯</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;