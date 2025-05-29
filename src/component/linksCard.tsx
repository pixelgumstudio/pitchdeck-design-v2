import { createSlug } from './slug';
import Link from 'next/link';
import Image from 'next/image';

type LinkCardProps = {
  image: string;
  url: string;
  title: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ image, title, url }) => {
  return (
    <div className="w-full">
      <Link href={`/useful-links/${createSlug(title)}`} className="block group">
        <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        <div className="mt-3">
          <p className="font-semibold text-[#2E2E27] text-[16px] max-w-full mb-1">{title}</p>
          <p className="text-[#64645F] text-[16px] font-normal underline break-all">{url}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
