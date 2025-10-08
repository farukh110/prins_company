"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsletterSection: React.FC = () => {
  
    const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail(""); 
  };

  return (
    <div className="pt-8 pb-6 px-4 desk:pt-8 desk:pb-10 desk:px-0 bg-gray-100">
      <h1 className="text-[22px] font-medium text-grayscale-900 text-center">
        Get <span className="text-[#C48C1F]">12% Off</span> on your first order
      </h1>
      <div className="w-full flex justify-center flex-wrap tab:flex-nowrap tab:gap-4">
        <div className="w-[524px]">
          <form className="flex w-full relative mt-5 tab:mt-5 mb-2" onSubmit={handleSubmit}>
            <input
              type="email"
              className="grow placeholder:b2 bg-white tab:placeholder:b1 placeholder:text-grayscale-700 border-r-0 rounded-none border px-3 min-h-12 tab:min-h-10 desk:min-h-12 desk:grow desk:shrink [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[71%] outline-none tracking-wide"
              placeholder="Enter Email Address*"
              required
              autoComplete="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              aria-label="Enter Email Address"
            />
            <button
              type="submit"
              aria-label="SIGN UP"
              className="b1 text-white bg-black whitespace-nowrap w-[29%] tab:min-w-[158px] justify-center items-center"
            >
              SIGN UP
            </button>
          </form>
          <p className="b1 poppins-regular text-[13px] text-[#6F6F79]">
            Your privacy matters. For details, see our{" "}
            <Link
              href="/b/privacy-and-security"
              target="_blank"
              rel="follow"
              aria-label="Privacy Policy - open in a new tab"
              className="underline hover:text-brand1"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex justify-center items-center b1 gap-3 mt-4">
            <div className="flex">Follow Us:</div>
            <div className="gap-5 items-center flex">
              <a
                aria-label="Facebook - open in a new tab"
                target="_blank"
                rel="nofollow"
                href="https://www.facebook.com/angarajewelry"
              >
                <Image
                  className="max-w-[25px]"
                  src="/images/icons/facebook.svg"
                  alt="Facebook Icon"
                  width={25}
                  height={25}
                />
              </a>
              <a
                aria-label="Twitter - open in a new tab"
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/angarajewelry"
              >
                <Image
                  className="max-w-[25px]"
                  src="/images/icons/twitter.svg"
                  alt="Twitter Icon"
                  width={25}
                  height={25}
                />
              </a>
              <a
                aria-label="Youtube - open in a new tab"
                target="_blank"
                rel="nofollow"
                href="https://www.youtube.com/c/Angarajewelry"
              >
                <Image
                  className="max-w-[25px]"
                  src="/images/icons/youtube.svg"
                  alt="Youtube Icon"
                  width={25}
                  height={25}
                />
              </a>
              <a
                aria-label="Pinterest - open in a new tab"
                target="_blank"
                rel="nofollow"
                href="https://www.pinterest.com/angarajewelry/"
              >
                <Image
                  className="max-w-[25px]"
                  src="/images/icons/pinterest.svg"
                  alt="Pinterest Icon"
                  width={25}
                  height={25}
                />
              </a>
              <a
                aria-label="Instagram - open in a new tab"
                target="_blank"
                rel="nofollow"
                href="https://www.instagram.com/angarajewelry/"
              >
                <Image
                  className="max-w-[25px]"
                  src="/images/icons/instagram.svg"
                  alt="Instagram Icon"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;