import Link from "next/link";

const Waitlist: React.FC = () => {
  return (
    <div className='bg-[#061F13]' id='waitlist'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:pt-[100px]'>
        <div className='w-fit mx-auto'>
          <h2 className='mx-auto w-[288px] tablet:w-[524px] desktop:w-[655px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#FFF] mb-6'>
            Ready to start creating presentation
          </h2>
          <p className='w-full max-w-[400px] laptop:max-w-[558px] mx-auto text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#FFF] mb-[40px] font-normal'>
            Subscribe and see how we turn your presentation into wonderful visuals
          </p>
          <Link
            href="/make-deck#pricing"
            className="bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-3 h-[52px] text-[#ffffff] font-sm leading-5 font-medium focus:outline-none"
          >
            Subscribe to a plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;