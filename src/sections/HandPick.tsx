import Link from "next/link";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageStack from "../component/ImageStack";

const HandPick = () => {
  const images = ["/assets/scroll-image (1).webp","/assets/scroll-image (2).webp","/assets/scroll-image (3).webp","/assets/scroll-image (4).webp","/assets/scroll-image (5).webp","/assets/scroll-image (6).webp"];

  return (
    <div className='w-full bg-[#F8F8F1]'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='grid ipad:grid-cols-2 gap-6 ipad:gap-[30px] laptop:items-center laptop:gap-[30px]'>
          <div className='mb-5'>
            <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6">
            Handpicked pitch decks that have raised $100bn in funding
            </h2>
            <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
            Browse a list of winning pitch deck examples from decks that have raised $100bn in funds.
            </p>
            <Link href='/' className="text:left w-fit cursor-pointer bg-white border-grey-100 border shadow-supportButton p-3 h-[52px] text-[#000]">
            Find Pitch deck inspiration
            </Link>
          </div>
          <div className="border-[0.5px] flex justify-center items-center bg-white p-6 !pb-12 laptop:!p-10 laptop:!pb-16">
            <ImageStack images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandPick;
