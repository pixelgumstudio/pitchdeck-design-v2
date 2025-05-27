import LoadImage from "./LoadImage";

type PresentationCardProps = {
  image: string;
  title: string;
  description: string;
};

const PresentationCard: React.FC<PresentationCardProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center laptop:basis-1/3 max-w-[368px]">
      <div className="w-[80px] h-[80px] mb-6">
        <LoadImage src={image} alt="Presentation Icon" style="w-[80px] h-[80px] mb-6" />
      </div>
      <h3 className="font-semibold leading-[22px] text-[16px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8">
        {title}
      </h3>
      <p className="text-[16px] font-medium leading-[22px] text-[#64645F] laptop:text-[20px] laptop:leading-[28px]">
        {description}
      </p>
    </div>
  );
};

export default PresentationCard;