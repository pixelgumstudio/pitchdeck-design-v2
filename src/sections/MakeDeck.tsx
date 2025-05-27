import Link from "next/link";
import 'react-lazy-load-image-component/src/effects/blur.css';
import CardCarousel from "../component/CardCarousel";


const MakeDeck = () => {


  return (
    <div className='w-full bg-[#F8F8F1]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='grid ipad:grid-cols-2 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
       <div className='mb-5'>
        <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6">
        Transform Your Product Idea Into a compelling pitch deck to raise funds
          </h2>
          <p className=" text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
          Our expertly crafted pitch deck is designed to support you in raising capital for your business. Get started today at only $299
          </p>
          <Link href="/make-deck" className="text:left w-fit cursor-pointer bg-white border-grey-100 border shadow-supportButton p-3 h-[52px] text-[#000]">
          Make a Pitch deck
          </Link>
       </div>
        <div className="flex aspect-[16/15] overflow-hidden justify-center items-center bg-[#E7F6EF] mb-6 ipad:mb-10">
            <CardCarousel />
          </div>
        {/* <CardCarousel /> */}
        </div>
     </div>
    </div>
  )
}

export default MakeDeck