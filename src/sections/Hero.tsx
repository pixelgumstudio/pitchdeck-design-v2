import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F2F1E8] text-[#141415]">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:py-[100px]">
        <div className="w-full max-w-[288px] tablet:!max-w-[524px] laptop:!max-w-[1000px] mx-auto">
          <h1 className="text-32 font-bold tablet:text-32 laptop:text-64 mb-6">
            Transform Your Ideas into Compelling Pitch Decks with Ease
          </h1>
          <h2 className="text-[#414143] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 mb-[40px]">
            Need expert help? Let&apos;s help you create stunning and effective pitch decks that convert investors!
          </h2>
          <Link
            href="/make-deck#pricing"
            className="bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center py-3 px-4 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#21AB68]"
          >
            Make your deck
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;