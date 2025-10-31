"use client";

import WishlistItem from "@/components/WishlistItem";

const Wishlist: React.FC = () => {
  const wishlistItems = [
    {
      id: "1",
      title: "Round Opal Cocktail Ring with Diamond Halo",
      imageSrc: "/images/products/rings/1.webp",
      imageAlt:
        "10mm AAA Round Opal Cocktail Ring with Diamond Halo in Rose Gold",
      metalType: "14K Rose Gold",
      caratWeight: "2.04",
      price: "$1,781",
      originalPrice: "$1,979",
      discount: "10%",
      gemstoneQuality: "Best",
    },
    {
      id: "2",
      title: "Channel Set Square Emerald Half Eternity Ring",
      imageSrc: "/images/products/rings/2.webp",
      imageAlt: "Channel Set Square Emerald Half Eternity Ring in Yellow Gold",
      metalType: "14K Yellow Gold",
      caratWeight: "0.77",
      price: "$1,754",
      originalPrice: "$1,949",
      discount: "10%",
      gemstoneQuality: "Best",
    },
  ];

  const handleRemove = (id: string) => {
    console.log("Remove item:", id);
  };

  return (
    <>
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
        <h1 className="text-xl font-medium md:text-2xl">
          My Wishlist{" "}
          <span className="text-gray-600 font-light">
            ({wishlistItems.length} {wishlistItems.length === 1 ? "Item" : "Items"})
          </span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 2xl:grid-cols-5">
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            {...item}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Wishlist;