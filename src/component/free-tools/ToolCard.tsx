import React from "react";
import Link from "next/link";

type ToolCardProps = {
  link: string;
  name: string;
  color: string;
};

const ToolCard: React.FC<ToolCardProps> = ({ link, name, color }) => {
  return (
    <div>
      <p
        className={`text-[#DFD5FF] text-32 leading-[42px] tracking-[-1.6px] pt-[72px] pb-[84px]`}
        style={{ background: color }}
      >
        {name}
      </p>
      <div className="flex justify-between mb-1">
        <p>{name}</p>
        <Link href={link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" fill="#F2F1E8" />
            <path
              d="M16 14.0731L16 8.47321M10.4001 8.47321L16 8.47321M16 8.47321L8 16.4732"
              stroke="#21AB68"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
        </Link>
      </div>
      <p className="text-[#C7C7CA] text-12">Free tools</p>
    </div>
  );
};

export default ToolCard;