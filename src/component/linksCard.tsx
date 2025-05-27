import { createSlug } from './slug';
import Link from "next/link";
import Image from "next/image";

type LinkCardProps = {
  image: string;
  url: string;
  title: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ image, title, url }) => {
  return (
    <div className="w-full max-w-[264px] flex h-auto laptop:w-[31%] hover:bg-grey-50 text-16 font-medium focus:outline-none mb-6">
      <Link href={`/useful-links/${createSlug(title)}`} className="flex flex-col text-left gap-y-2 tablet:max-w-[528px]">
        <Image src={image} alt={title} width={264} height={278} className="w-[264px] h-[278px]" />
        <div>
          <p className="font-semibold w-full max-w-[255px] text-16 text-[#2E2E27] mb-1">{title}</p>
          <p className="text-16 text-[#64645F] font-normal underline break-all">{url}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;