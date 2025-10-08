import Image from "next/image";

const AwardsSection: React.FC = () => {
  return (
    <div className="bg-white">
      <div
        className="flex justify-center gap-6 items-baseline flex-wrap relative pt-8 tab:pt-4 pb-8 desk:pt-8 desk:pb-10"
        style={{ minHeight: 168 }}
      >
        <div className="basis-full w-full order-2">
          <h1 className="text-[22px] poppins-medium leading-8 tab:leading-12 mb-6 text-center">
            Awards &amp; Accolades
          </h1>
          <div className="flex w-full items-center desk:w-2/3 mx-auto justify-center gap-16 max-w-[98vw]">
            <div>
              <Image
                src="/images/awards/inc.png"
                className="max-w-[73px]"
                alt="Inc. Award"
                width={73}
                height={50}
              />
            </div>
            <div>
              <Image
                src="/images/awards/americans.webp"
                className="max-w-[134px]"
                alt="Americans Award"
                width={134}
                height={50} 
              />
            </div>
            <div>
              <Image
                src="/images/awards/excellence.png"
                className="max-w-[75px]"
                alt="Excellence Award"
                width={75}
                height={50} 
              />
            </div>
            <div>
              <Image
                src="/images/awards/bizrate.png"
                className="max-w-[130px]"
                alt="Bizrate Award"
                width={130}
                height={50} 
              />
            </div>
            <div>
              <Image
                src="/images/awards/fast_company.webp"
                className="max-w-[60px]"
                alt="Fast Company Award"
                width={60}
                height={50} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;