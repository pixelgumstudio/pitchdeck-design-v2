import ImageStack from "../component/ImageStack";
import Link from "next/link";
import CardCarousel from "../component/CardCarousel";

const Features = () => {
  const images = ["/assets/scroll-image (1).webp","/assets/scroll-image (2).webp","/assets/scroll-image (3).webp","/assets/scroll-image (4).webp","/assets/scroll-image (5).webp","/assets/scroll-image (6).webp"];



  return (
    <div className="w-full bg-[#F8F8F1] ">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-left py-[40px] tablet:py-[80px] laptop:py-[100px]">
      <div className="flex flex-col gap-10 tablet:gap-[80px] laptop:gap-[100px]">
          <div>
          <h1 className='text-32 font-bold tablet:text-48 laptop:text-64 text-[#2E2E27] mb-2 w-full max-w-[600px]'>Features to help you 
          make your deck</h1>
          <h2 className='text-16 tablet:text-20 laptop:text-24 text-[#64645F] w-full max-w-[858px]'>Find handpicked pitch deck inspiration from founders that have raised $100bn, We can also help you make stunning pitch decks to help raise funds. <span className="block">Grab one today at $299</span></h2>
          </div>

          <div className="ipad:grid  ipad:grid-cols-2 justify-between gap-10">
          <div className="mb-10 ipad:mb-0 flex-1 aspect-[16/15]">
            <div className="flex aspect-[16/15] overflow-hidden justify-center items-center bg-[#E7F6EF] mb-6 ipad:mb-10">
            <CardCarousel />
          </div>
           {/* <LoadImage
           alt="Products Images"
           src={Products}
          height={undefined}
          style={`w-full h-full mb-6`}
        /> */}
          <div className='my-5'>
            <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 text-[#000] mb-6">
            Transform Your Product Idea Into a compelling pitch deck to raise funds
            </h2>
            <div className="flex flex-col justify-between">
               <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
            Our expertly crafted pitch deck is designed to support you in raising capital for your business.<span className="block">Get started at only $299</span>
            </p>
            <Link href='/make-deck' className="text:left w-fit cursor-pointer bg-white border-grey-100 border shadow-supportButton p-3 h-[52px] text-[#000]">
            Make a Pitch deck for me
            </Link>
            </div>
           
          </div>
          </div>
          {/* Section Card */}
          <div className="flex-1">
            <div className="border-[0.5px] flex aspect-[16/15] justify-center items-center bg-white p-6 !pb-12 laptop:!p-10 laptop:!pb-16 mb-6 ipad:mb-10">
            <ImageStack images={images} />
          </div>
          <div className='mb-5'>
            <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 text-[#000] mb-6">
            Handpicked pitch decks that have raised $100bn in funding
            </h2>
            <div className="flex flex-col justify-between">
            <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
            Browse a list of winning pitch deck examples from decks that have raised $100bn in funds.
            </p>
            <Link href='/' className="text:left w-fit cursor-pointer bg-white border-grey-100 border shadow-supportButton p-3 h-[52px] text-[#000]">
            Find Pitch deck inspiration
            </Link>
            </div>
          </div>
          </div>
          </div>
         
        

                </div>
      </div>
    </div>
  );
};

export default Features;
