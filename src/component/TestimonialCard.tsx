import LoadImage from "./LoadImage";
import StarRating from "./Rating";

type Testimony = {
  message: string;
  name: string;
  title: string;
  rating: number;
};

type TestimonialCardProps = {
  testimony: Testimony;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimony }) => {
  return (
    <div className="overflow-hidden relative py-5 px-[14px] laptop:py-6 laptop:px-4 desktop:px-6 border border-[#E8E6D7] bg-white bg-testimonial bg-no-repeat bg-right-top h-fit w-full laptop:max-w-[304px] desktop:max-w-[363px]">
      {/* <img src={Logo} alt="" className="absolute right-[-48px] top-[-40px] w-[160px] h-[140px] z-0"/> */}
      <p className="text-32 text-[#21AB68] tracking-[-2px]">&quot;</p>
      <p className="text-[#0B0B00] text-14 leading-5">{testimony.message}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-14 text-[#141415] font-medium mb-1">{testimony.name}</p>
          <p className="text-[#59595C] text-12">{testimony.title}</p>
        </div>
        <StarRating totalStars={testimony.rating} />
      </div>
    </div>
  );
};

export const SupportCard: React.FC = () => {
  return (
    <div className="w-full mt-10 max-w-[760px] mx-auto p-8 border border-[#E3E3E2] bg-[#FFFFFF] text-[#2E2E27] text-center flex flex-col desktop:flex-row justify-center items-center">
      <div className="flex flex-col desktop:flex-row w-fit justify-start gap-6">
        <div className="w-[120px] h-[120px]">
          <LoadImage alt="Telephone" src={"./../assets/phone.png"} />
        </div>
        <div>
          <h3 className="mb-6 text-[24px] font-bold leading-8 tracking-[-0.96px]">
            Have Questions for us?
          </h3>
          <p className="text-[#64645F] text-[16px] leading-6 tablet:text-[20px] tablet:leading-7">
            Learn more about how pitchdeck.design works and how it can help you.
          </p>
        </div>
      </div>
      <a
        href="https://cal.com/olayanjuidris/pptdesignercall"
        target="_blank"
        rel="noreferrer"
        className="w-full laptop:w-[138px] my-8 bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none "
      >
        Schedule a call
      </a>
    </div>
  );
};