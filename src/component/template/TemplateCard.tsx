"use client";
import Link from "next/link";
import Image from "next/image";
import { createSlug } from "../slug";
import Skeleton from "../Skeleton";
import LoadImage from "../LoadImage";
import { useStore } from "../../store/useStore";
import type { Template } from "../../store/types";

type TemplateCardProps = {
  template: Template;
};

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const { address } = useStore();

  return (
    <Link
      href={{
        pathname: `/template/${createSlug(template.name)}`,
        query: { id: template._id },
      }}
      scroll={false}
    >
      <div className="flex flex-col h-full border border-[#D2D2CF] hover:border-[#21AB68] hover:border-[2px]">
        <LoadImage
          alt="Template deck"
          src={template?.templateCoverImageUrl}
          height={240}
          style="w-full max-h-[240px]"
        />

        <div className="p-3 laptop:p-[14px] desktop:p-4 bg-white">
          <div className="flex justify-between mb-1">
            <Skeleton>
              <h5 className="text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold">
                {template.name}
              </h5>
            </Skeleton>
            <Skeleton height={24} width={24}>
              <Image
                src={"/assets/arrowUp.svg"}
                alt="Arrow Up"
                width={24}
                height={24}
                className="hover:border-[#F2F1E8] hover:border hover:bg-[#F2F1E8]"
              />
            </Skeleton>
          </div>

          <p className="text-12 font-normal text-[#2E2E27] P-3 flex">
            <Skeleton>{template?.numberOfPages} pages </Skeleton>
            <Skeleton height={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
              </svg>
              {address === "Nigeria"
                ? (template.cost.naira as { nigeria?: string })?.nigeria
                : (template.cost.dollar as { foreign?: string })?.foreign
                 }
            </Skeleton>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;