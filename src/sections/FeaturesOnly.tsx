import FeaturedOnly from "../component/FeaturedOnly";

const FeaturesOnly: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-left pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
        <div className="grid tablet:grid-cols-2 tablet:!gap-x-10 laptop:!gap-x-20 gap-10 tablet:gap-[80px] laptop:gap-[100px]">
          <FeaturedOnly
            title="PCRopsis Sales deck"
            desc="Unparalleled Direct PCR technologies for clinical testing"
            image={"/assets/PCRopsis.webp"}
            link="https://drive.google.com/file/d/1s03eTijZitV1_bgQwl5cGJD9FgghJLuM/view"
          />
          <FeaturedOnly
            title="Wattpricer Sales deck"
            desc="Making credit facilities available for immigrants"
            image={"/assets/Wattpricer.webp"}
            link="https://drive.google.com/file/d/17c3HyJGvbReace-peULyrLwCkmQDi0sp/view"
          />
          <FeaturedOnly
            title="BaristerFinder Pitch deck"
            desc="Finding the next generation of freelance barista"
            image={"/assets/BaristerFinder.webp"}
            link="https://drive.google.com/file/d/1XzqNHSm8az5eRdyNSRoSPWNd0ZOJRQ1-/view"
          />
          <FeaturedOnly
            title="FrontierYields Pitch deck"
            desc="Making credit facilities available for immigrants"
            image={"/assets/FrontierYields.webp"}
            link="https://drive.google.com/file/d/1b8gpNmmivwtEcKN8-HNXAfTL9itFFMd6/view"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesOnly;
