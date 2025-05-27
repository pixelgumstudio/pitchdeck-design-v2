import { TestimonialCard } from '../component/TestimonialCard';

type Testimony = {
  rating: number;
  name: string;
  title: string;
  message: string;
};

const Testimonials: React.FC = () => {
  const testimonies: Testimony[] = [
    { rating: 5, name: "Olawale", title: "Co-Founder, Maxim", message: "Pitchdeck design is something that i would highly recommend. They helped us make our first pitch deck and our landing page which helps us raise our friends and family round. Wonderful guys , Wonderful service" },
    { rating: 5, name: "Gabriel", title: "Growth lead", message: "You're welcome! Pitch deck is awesome, I will follow your journey." },
    { rating: 5, name: "Nafiu Sofiat", title: "Designer, Niyo Group", message: "Pitchdeck.design is a valuable resource for individuals seeking the ideal pitch deck template. With a diverse selection of professionally designed templates, this platform assists entrepreneurs and businesses in crafting visually appealing presentations that leave a lasting impression on investors and stakeholders. Tailored to various industries and presentation styles, the templates available on pitchdeck.design cater to a wide range of needs. If you are searching for the perfect pitch deck template to represent your brand effectively, exploring pitchdeck.design is highly recommended." },
    { rating: 5, name: "Stefan Ginev", title: "Developer, Toptal", message: "Pitchdeck.design is exactly the kind of service I need!" },
    { rating: 5, name: "Nick", title: "Founder, Baked Design", message: "This is fire, Thanks for sharing." },
    { rating: 5, name: "Simon Smith", title: "Founder", message: "Pitchdeck design templates is my lifesaver, Their templates help me with making my pitch deck for investors, I used their powerpoint pitch deck template to make my first deck , Great service, You should purchase one." },
    { rating: 5, name: "Igor aka Momentum", title: "CMO, Paralect", message: "Looks great!  Even thought that I raised some money haha" },
    { rating: 5, name: "Dike Goodluck", title: "Founder , instantApply.co", message: "I've struggled getting interests from investors with previous  pitch deck I used for my new startup , but since I came across pitch deck and utilized their templates, I have been getting positive responses from investors." },
  ];

  return (
    <div className='bg-[#F2F1E8]'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-[13px] pb-5 tablet:pb-10 laptop:pb-[50px] '>
          <h2 className='text-center text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>
            What our customers are saying
          </h2>
          <p className='text-center text-[#2E2E27] text-[20px] leading-8 tracking-[-0.96px] laptop:w-[831px] mx-auto'>
            Find out from people who love our product, they love using us to Make their deck and 
            find pitchdeck inspiration
          </p>
        </div>
        <div className='tablet:grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3 desktop:gap-x-8 h-fit'>
          <div className='flex flex-col tablet:flex-row laptop:flex-col gap-8 laptop:mt-8'>
            {testimonies.map((testimony, index) =>
              (index + 1) % 3 === 1 && <TestimonialCard key={index} testimony={testimony} />
            )}
          </div>
          <div className={'mt-8 tablet:mt-0 flex flex-col tablet:flex-row laptop:flex-col gap-8'}>
            {testimonies.map((testimony, index) =>
              (index + 1) % 3 === 2 && <TestimonialCard key={index} testimony={testimony} />
            )}
          </div>
          <div className={"last-test mt-8 tablet:mt-0 flex flex-col tablet:flex-row laptop:flex-col gap-8 col-span-2 laptop:col-span-1"}>
            {testimonies.map((testimony, index) =>
              (index + 1) % 3 === 0 && <TestimonialCard key={index} testimony={testimony} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;