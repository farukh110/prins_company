import Image from "next/image";

const ReasonSection: React.FC = () => {
    return (
        <section
            data-trk-type="view"
            data-trk-title="More Reasons to Shop"
            className="mb-12 desk:mb-14"
        >
            <div className="max-w-[810px] mx-auto">
                <h2 className="heading1 text-[22px] poppins-medium leading-8 tab:leading-12 mb-6 text-center">
                    More Reasons to Shop
                </h2>
                <div
                    className="flex overflow-x-auto no-scrollbar tab:overflow-hidden gap-6 tab:grid-cols-4 tab:grid tab:gap-5 lg:gap-14 tab:px-8 desk:px-0"
                >
                    <span className="flex justify-center items-center flex-col min-w-40 tab:min-w-0">

                        <Image
                            width={90}
                            height={0}
                            className="max-w-[90px]"
                            src="/images/icons/sourcing.webp"
                            alt="Ethical Sourcing"
                        />

                        <span className="block a2 whitespace-nowrap mt-1">
                            Ethical Sourcing
                        </span>
                    </span>
                    <span className="flex justify-center items-center flex-col min-w-40 tab:min-w-0">

                        <Image
                            width={90}
                            height={0}
                            className="max-w-[90px]"
                            src="/images/icons/guaranted.webp"
                            alt="Authenticity Guaranteed"
                        />

                        <span className="block a2 whitespace-nowrap mt-1">
                            Authenticity Guaranteed
                        </span>
                    </span>
                    <span className="flex justify-center items-center flex-col min-w-40 tab:min-w-0">

                        <Image
                            width={90}
                            height={0}
                            className="max-w-[90px]"
                            src="/images/icons/high_speed.webp"
                            alt="High Speed Service"
                        />
                        <span className="block a2 whitespace-nowrap mt-1">
                            High Speed Service
                        </span>
                    </span>
                    <span className="flex justify-center items-center flex-col min-w-40 tab:min-w-0">

                        <Image
                            width={90}
                            height={0}
                            className="max-w-[90px]"
                            src="/images/icons/pay_later.webp"
                            alt="Shine Now. Pay Later"
                        />
                        <span className="block a2 whitespace-nowrap mt-1">
                            Shine Now. Pay Later.
                        </span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ReasonSection;