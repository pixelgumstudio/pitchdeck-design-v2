import Link from "next/link";

const CustomDeck: React.FC = () => {
  return (
    <div className="bg-[#03331B] text-white">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:py-[100px]">
        <div className="w-[288px] tablet:w-[524px] laptop:w-[815px] mx-auto">
          <h1 className="text-32 font-bold tablet:text-48 mb-2">
            Transform your product idea into a compelling pitch deck for fundraise
          </h1>
          <h2 className="text-16 tablet:text-20 mb-10 w-[80%] mx-auto">
            Our expertly crafted pitch deck is designed to support you in raising capital for your business. Get started making one today starting at $299
          </h2>
          <Link
            href="/make-deck#pricing"
            className="bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center py-3 px-4 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none"
          >
            Get a custom deck starting at $299
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomDeck;