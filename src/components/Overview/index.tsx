"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";

interface Review {
  id: string;
  title: string;
  image: string;
  alt: string;
  text: string;
  rating: number;
  author: string;
  date: string;
}

interface BestSellingRing {
  name: string;
  href: string;
  price: string;
}

const reviews: Review[] = [
  {
    id: "1",
    title: "Something for myself",
    image: "/images/reviews/1.webp",
    alt: "Something for myself",
    text: "It’s a very gorgeous ring. Not too big not too small gemstone. love it.",
    rating: 5,
    author: "Nazneen S.",
    date: "Oct 02, 2025",
  },
  {
    id: "2",
    title: "Amazing ring!!",
    image: "/images/reviews/2.webp",
    alt: "Amazing ring!!",
    text: "Amazing ring which she absolutely loved!! She said “yes” so job done!!! Outstanding services yet again, will definitely use again in the future, so well done Angara",
    rating: 5,
    author: "David B.",
    date: "Oct 02, 2025",
  },
  {
    id: "3",
    title: "Perfect!",
    image: "/images/reviews/3.webp",
    alt: "Perfect!",
    text: "My husband chose this design for our 20th anniversary! I was so thrilled to open the beautiful lighted box and see the most perfect ring for me! I absolutely love it and look at it on my hand all the time! It is gorgeous and your company was wonderful to work with!",
    rating: 5,
    author: "Derek B.",
    date: "Oct 01, 2025",
  },
];

const bestSellingRings: BestSellingRing[] = [
  { name: "Solitaire Oval Opal Split Shank Ring with Trio Diamonds", href: "/p/solitaire-oval-opal-split-shank-ring-with-trio-diamonds-sr1375opd", price: "$1,489" },
  { name: "Lab-Grown Solitaire Round Diamond Infinity Promise Ring", href: "/p/lab-grown-solitaire-round-diamond-infinity-promise-ring-lsr1437d", price: "$2,499" },
  { name: "Aquamarine and Diamond Twisted Vine Engagement Ring", href: "/p/aquamarine-and-diamond-twisted-vine-ring-sr1912aqd", price: "$1,819" },
  { name: "Diamond Infinity Twist Three Stone Bypass Ring", href: "/p/prong-set-diamond-three-stone-ring-sr1515d", price: "$1,439" },
  { name: "Lab-Grown Emerald-Cut Emerald and Lab Diamond Three Stone Ring", href: "/p/lab-grown-emerald-cut-emerald-and-diamond-three-stone-ring-lsr4108ed", price: "$3,259" },
  { name: "Lab-Grown Princess Diana Inspired Blue Sapphire Ring with Lab Diamond Halo", href: "/p/lab-grown-princess-diana-inspired-blue-sapphire-ring-with-diamond-halo-lsr0169s", price: "$2,839" },
  { name: "Oval Solitaire Opal Cocktail Ring", href: "/p/classic-opal-solitaire-ring-sr1080op", price: "$1,229" },
  { name: "Round Diamond Split Shank Heart Promise Ring", href: "/p/round-diamond-split-shank-heart-promise-ring-sr1429d", price: "$1,999" },
  { name: "Solitaire Opal Infinity Knot Ring", href: "/p/natural-solitaire-opal-infinity-knot-ring-sr0415op", price: "$1,079" },
  { name: "Lab-Grown Round Ruby Engagement Ring with Multi-Shape Diamonds", href: "/p/lab-grown-round-ruby-engagement-ring-with-multi-shape-diamonds-lsr4945rd", price: "$1,619" },
];

const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Reviews" | "Overview">("Reviews");

  return (
    <div className="mb-12 mt-18">
      <div className="flex border-b border-gray-300 gap-4 justify-center mb-10 pt-4 shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
        <button
          aria-label="Reviews"
          className={`border-b-2 ${activeTab === "Reviews" ? "border-black" : "border-transparent"} text-lg font-semibold pb-2`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
        <button
          aria-label="Overview"
          className={`border-b-2 ${activeTab === "Overview" ? "border-black" : "border-transparent"} text-lg font-semibold pb-2`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
      </div>

      <section className={activeTab === "Reviews" ? "block" : "hidden"}>
        <div className="container mx-auto px-4">
          {reviews.map((review) => (
            <article key={review.id} className="p-3 mb-6 border border-gray-300 relative">
              <div className="flex gap-6">
                <figure className="min-w-[136px] min-h-[136px] md:min-w-[150px] md:min-h-[150px]">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={150}
                    height={150}
                    className="max-h-[136px] md:max-h-[150px] object-cover aspect-square"
                    loading="lazy"
                  />
                </figure>

                <div className="relative break-words">
                  <h4 className="mb-2 text-lg font-semibold">{review.title}</h4>
                  <p className="text-gray-600 md:pr-10 md:mb-9 transition-all ease-in-out duration-300">
                    {review.text}
                  </p>
                </div>
              </div>

              <footer className="mt-8 md:mt-4 md:absolute md:bottom-3 md:right-3 w-full md:w-[calc(100%-198px)] flex justify-between flex-wrap">
                <div className="flex gap-2 items-center">
                  <span>{review.rating}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div>
                  <span>{review.author}</span>
                  <span> - </span>
                  <span>{review.date}</span>
                </div>
              </footer>
            </article>
          ))}

          <div className="flex gap-4 md:gap-8 justify-center py-4 items-center flex-wrap">
            <button
              aria-label="Previous"
              disabled
              className="cursor-default flex items-center justify-center w-[calc(50%-10px)] md:w-[calc(50%-16px)] max-w-44 h-12 gap-1 font-medium text-gray-700 border border-gray-300 py-2 px-6 opacity-50 transition-colors duration-500 ease-in-out"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Previous</span>
            </button>
            <button
              aria-label="Next"
              className="flex items-center justify-center w-[calc(50%-10px)] md:w-[calc(50%-16px)] max-w-44 h-12 gap-1 font-medium text-gray-700 border border-gray-300 py-2 px-6 hover:border-gray-700 transition-colors duration-500 ease-in-out"
            >
              <span>Next</span>
              <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <section className={activeTab === "Overview" ? "block" : "hidden"}>
        <div className="container mx-auto px-4 md:px-22">
          <div className="md:flex gap-14 justify-center">
            <div className="text-gray-800 w-full md:w-1/2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Discover Gorgeous Rings for Every Occasion
                </h2>
                <p>
                  Amp up your style quotient with Angara&apos;s gorgeous collection of rings. From chic stackables to pieces in classic and modern styles, we&apos;ve got plenty of exciting options for you!
                </p>
                <p>
                  While diamond and pearl rings are perfect for a glam and sophisticated look, you can always throw on designs with colored gemstones for a mood-boosting twist. Whatever ring ideas or style you&apos;ve come looking for, the collection at Angara won&apos;t disappoint.
                </p>
                <p>
                  Trust us, you&apos;ll find our exquisite diamond rings hard to resist. Adorned with fine, conflict-free diamonds, these beauties will sparkle up your days and nights. And if you&apos;re a pearl girl, we&apos;ve got options for you in freshwater, South Sea, Japanese Akoya and Tahitian pearls too.
                </p>
                <p>
                  Now if something spectacular and beautiful is what you&apos;re eyeing, we have two words for you: think color! From bright blues and lush greens to fiery reds, yellows and more, our collection includes gemstone rings in every hue you could possibly imagine.
                </p>
                <p>
                  For those who adore regal hues, our sapphire rings are a must-see. Inspired by the beauty of nature? In that case, our stunning emerald rings are perfect for you. We also have gorgeous ruby rings that&apos;re a great blend of passion and sophistication. That&apos;s not all; our collection of designer rings for women features an array of other gems such as aquamarines, morganites, tanzanites, garnets and more.
                </p>
                <p>
                  Wish to own brilliant rings without exceeding your budget? Our lab-grown pieces are the perfect solution! You can dazzle up your ensembles with our lab-grown diamond rings. Or add a vibrant pop of color to your OOTD with our lab-grown blue sapphire rings. If you love a hint of romance, our lab-grown ruby rings will certainly capture your heart. And for those who can&apos;t get enough of rich green hues, our lab-grown rings are your best bet.
                </p>
                <h3 className="text-xl font-semibold">
                  Rings for Her in a Variety of Styles
                </h3>
                <p>
                  In our collection, you&apos;ll find several ring designs for women, from sleek and modern stackables to statement-making cocktail rings. There are sparkly solitaires, meaningful two-stone designs, chic initial rings and so much more. In short you name it, we have it.
                </p>
                <p>
                  Our halo rings are perfect for the days when you want to be the center of attention. Want something elegant to elevate your everyday style? Our stackables rings will instantly take your look from zero to 100. Check out our fashion rings if your inner diva needs a wardrobe upgrade. Wish to treat yourself or a loved one with something thoughtful? Our three-stone rings promise triple the sparkle and a touch of meaningful symbolism.
                </p>
                <p>
                  Want to tell her that she means the world to you? Our promise rings will do the job for you, without having to say a word. Additionally, we&apos;ve got unique ring designs for your lady love such as Celtic knot, twisted rope, leaf motifs, criss-cross, floral and more to choose from.
                </p>
                <p>
                  If you&apos;re planning to pop the forever question, the engagement rings in our selection are all you need to get those happy tears flowing. But, that&apos;s not all, we also have exquisite wedding rings for the most special day of your life.
                </p>
                <p>
                  Talking of shapes, we&apos;ve got emerald-cut, pear, heart, square, trillion, round rings and more.
                </p>
                <h3 className="text-xl font-semibold">
                  Customize the Perfect Ring for You
                </h3>
                <p>
                  In the past only the elite had access to custom jewelry. But that&apos;s not how it is anymore. At Angara, you can be the hero of your jewelry saga and create for yourself a ring in the gemstone quality, carat weight and metal you like. To make your piece even more special, we suggest you get a little engraving done, too!
                </p>
                <p>
                  When it comes to metals, we offer a variety of options to match every style and preference. If you like the cool tones, pick silver, platinum or white gold rings. Choose our yellow gold rings if you prefer warm tones. And if you want something unique and dreamy, opt for our rose gold rings. You can also get 14k and 18k gold rings for women.
                </p>
                <p>
                  From affordable rings under $1,000 to statement pieces over $5,000, we&apos;ve something for every budget. Our ring size options start at 3 and go up to 14.
                </p>
                <p>
                  So, why keep waiting? Explore our collection of unique rings for women now and pick the pieces you love. Also, join our mailing list to get notified about Angara ring discounts, new launches and more!
                </p>
              </div>

              <section className="mt-8">
                <h2 className="text-lg md:text-xl font-normal leading-6 mb-5 text-gray-800 tracking-wide">
                  FAQs
                </h2>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    1. Can I customize a ring with a specific gemstone or metal?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    At Angara, we love creating jewelry that reflects your style. We offer customization that extends to the gemstone, gemstone quality, carat weight and metal.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    2. Can you mix and match metal rings?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Of course, you can! Current trends favor mixing different metal rings to create trendy stacks that&apos;ll help you stand out.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    3. How do you find out your ring size?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-2 text-gray-600 tracking-wider">
                    That&apos;s easy! You can measure by matching an existing ring or follow these simple steps:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs font-normal leading-6 text-gray-600 tracking-wider">
                    <li>Wrap a piece of string around your finger.</li>
                    <li>Hold the string in place and mark the meeting point of both ends.</li>
                    <li>Lay it down and measure using a scale.</li>
                    <li>
                      Check out our{" "}
                      <a href="https://www.angara.com/blog/ring-size-guide/" className="text-blue-600 hover:underline">
                        ring size guide
                      </a>{" "}
                      for more details!
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    4. How do you stack rings?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Solo finger bling is old news, and stacking rings is in. Take care while stacking, as it&apos;s easy to slip from perfect to &apos;too much.&apos; Layer rings across four fingers and stick to two metal hues. Keep a similar color palette and leave at least one finger bare, i.e., the thumb or pinky.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    5. Can I personalize gemstone rings with engravings?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Yes, Prins allows you to add custom engravings to your gemstone rings. Whether it&apos;s a date, initials or a heartfelt message, this subtle detail transforms your ring into a cherished keepsake that carries your story and sentiment forever.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    6. Does Prins offer free ring sizing when I order a gemstone ring for women?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Yes, at Prins, we offer free ring sizing with every gemstone ring for women. This ensures a perfect fit, so your ring feels comfortable and secure from day one.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    7. Does Prins offer financing or monthly payment plans for gemstone rings?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Yes, Prins offers flexible financing options, including Easy Pay Installments that let you split your purchase into 2 to 3 monthly payments without interest or hidden fees. This makes owning your dream gemstone ring more convenient.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    8. What are the top-selling gemstone shapes and cuts available for women&apos;s rings?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Prins collection of women&apos;s rings showcases gemstone rings in a variety of shapes and cuts, with popular favorites like round, oval, cushion, pear and emerald cut. These timeless shapes are loved for their elegance and for the way they enhance each gemstone&apos;s color and brilliance.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    9. Can a gemstone ring be a suitable choice for a non-traditional engagement ring?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Absolutely! A gemstone ring makes a stunning choice for a non-traditional engagement ring. Its unique colors and vibrant sparkle let you celebrate your love in a personal way. For an added touch, you can pick your partner&apos;s birthstone or a gem that carries special meaning for both of you.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs md:text-sm font-normal leading-6 mb-2 text-gray-800 tracking-wide">
                    10. Does Prins offer certified natural gemstone rings for women, and what certifications are available?
                  </h3>
                  <p className="text-xs font-normal leading-6 mb-4 text-gray-600 tracking-wider">
                    Yes, Prins natural gemstone rings for women come with a Certificate of Authenticity detailing the gemstone&apos;s quality grade, carat weight, dimensions and other key information. This ensures complete confidence in your purchase. You can also find GIA Certified rings at Prins.
                  </p>
                </div>
              </section>
            </div>

            <div className="w-full md:w-1/2 text-gray-800 text-center">
              <div className="sticky top-0">
                <h3 className="text-lg font-semibold mb-4">Best Selling Rings</h3>
                <table className="w-full">
                  <thead>
                    <tr className="flex justify-between pl-2 mb-4">
                      <th className="font-normal">Product Name</th>
                      <th className="font-normal">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bestSellingRings.map((ring, idx) => (
                      <tr key={idx} className="flex justify-between items-start mb-3 text-left leading-6">
                        <td>
                          <a
                            href={ring.href}
                            className="text-sm text-gray-600 hover:no-underline relative pl-2 before:content-[''] before:absolute before:top-2 before:left-0 before:bg-gray-600 before:w-1 before:h-1 before:rounded-full"
                          >
                            {ring.name}
                          </a>
                        </td>
                        <td className="text-xs font-light">{ring.price}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="flex justify-end text-right">
                      <td colSpan={2} className="text-sm mt-3 md:mt-10 md:mb-6">
                        Last updated 10/18/2025
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;