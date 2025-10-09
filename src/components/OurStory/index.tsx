import Image from 'next/image';

const OurStory: React.FC = () => {
    return (
        <>
            <div className="pt-5 px-4 pb-2.5 md:pt-6 md:pb-10 md:px-8 lg:px-0 lg:max-w-[1212px] lg:mx-auto lg:pb-16">
                <h1 className="text-[22px] poppins-medium leading-8 lg:leading-[48px] text-center">
                    Our Story
                </h1>
                <p className="text-center leading-8 poppins-regular">
                    We’re thrilled you’re here to find the perfect piece of jewelry. <br />
                    Our passion is to craft pieces that resonate with your heart, brought to life through the vibrant beauty of sustainable gemstones.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mx-14 mb-6 md:mb-8 lg:mb-16 items-center">
                <div className="w-full sm:px-8 lg:px-0 lg:w-[44.7%] mb-8 md:mb-4 lg:mb-0">
                    {/* Desktop Image */}
                    <div className="hidden lg:block">
                        <Image
                            alt="Prins Company Founders"
                            src="/images/about/about_prins_company.jpg?width=1440&quality=85&auto=webp"
                            width={1440}
                            height={1440}
                            priority={false}
                            className="w-full mx-auto max-w-full aspect-square"
                        />
                    </div>
                    {/* Tablet Image */}
                    <div className="hidden md:block lg:hidden">
                        <Image
                            alt="Prins Company Founders"
                            src="/images/about/about_prins_company.jpg?width=1080&quality=85&auto=webp"
                            width={540}
                            height={300}
                            priority={false}
                            className="w-full mx-auto max-w-[540px]"
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="block md:hidden">
                        <Image
                            alt="Prins Company Founders"
                            src="/images/about/about_prins_company.jpg?width=828&quality=85&auto=webp"
                            width={414}
                            height={300}
                            priority={false}
                            className="w-full mx-auto"
                        />
                    </div>
                </div>
                <div className="px-8 lg:px-0 lg:w-[55.3%] poppins-light text-[#161618] text-[14px] text-justify">
                    <p className="mb-4">
                        Over a decade ago, my partner and I founded Prins Company with a shared vision. Jewelry is our heritage, rooted in a deep love for the artistry and history of gemstones. Their vibrant colors and timeless allure have always inspired us.
                    </p>
                    <p className="mb-4">
                        Initially, I explored other paths, working in consulting and earning an advanced degree. But the call of jewelry was undeniable. It began when we searched for a piece to mark a special moment in our lives, only to find options that felt impersonal and mass-produced, lacking the individuality we craved.
                    </p>
                    <p className="mb-4">
                        Conversations with friends revealed a shared desire for something more meaningful. So, we created Prins Company to blend the magic of sustainable gemstones with the art of personalization, crafting jewelry that tells your unique story.
                    </p>
                    <p className="mb-4">
                        On our website, we empower you to design jewelry that reflects your essence—choosing your stone, style, metal, and setting. Whether it’s a gift or a treasure for yourself, we want every piece to feel uniquely yours.
                    </p>
                    <p>
                        Inspired by the elegance of royalty, Prins Company brings custom craftsmanship to everyone. Using modern technology and time-honored techniques, we create one-of-a-kind pieces without the long waits or high costs, making you the hero of your jewelry journey.
                    </p>
                </div>
            </div>
        </>
    );
};

export default OurStory;