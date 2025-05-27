import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 text-center pt-[40px] tablet:pt-[80px]">
        <div className="w-full laptop:max-w-[850px] text-left text-32 font-bold tablet:text-48 desktop:text-64">
          <h1 className="text-[#0B0B00]">
            Handpicked Pitch Deck Inspirations that have Raised $100bn.
          </h1>
          <Link href="/make-deck/#pricing" className="underline text-[#10894E] mb-6">
            Grab Yours Today Starting at $299
          </Link>
          <div className="w-full max-w-[800px] mt-8 font-normal">
            <h2 className="text-[#414143] text-16 tablet:text-20 laptop:text-24">
              Browse a list of winning pitch deck examples from decks that have raised $100bn in funds. Make your pitch deck and Purchase templates
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;