"use client";
import Link from "next/link";
import Image from "next/image";
import { createSlug } from "../slug";
import Skeleton from "../Skeleton";
import LoadImage from "../LoadImage";
import type { Pitch } from "../../store/types";

type PitchCardProps = {
  pitch: Pitch;
};

const PitchCard: React.FC<PitchCardProps> = ({ pitch }) => {
  return (
    <Link
      href={{
        pathname: `/pitch/${createSlug(pitch?.title)}`,
        query: { id: pitch._id },
      }}
      scroll={false}
    >
      <div className="flex flex-col h-full border border-[#D2D2CF] hover:border-[#21AB68]">
        <LoadImage
          alt="Pitch deck"
          src={pitch?.coverImageUrl}
          height={240}
          style="w-full h-[240px]"
        />
        <div className="p-3 laptop:p-[14px] desktop:p-4 bg-white">
          <div className="flex justify-between mb-1">
            <Skeleton>
              <h5 className="text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold">
                {pitch.title}
              </h5>
              <Image
                src={ "/assets/arrowUp.svg"}
                alt="Arrow Up"
                width={24}
                height={24}
                className="hover:border-[#F2F1E8] hover:border hover:bg-[#F2F1E8]"
              />
            </Skeleton>
          </div>

          <p className="text-12 font-normal text-[#2E2E27] P-3 flex">
            <Skeleton>{(pitch?.contentImagesUrls?.length ?? 0) + 1} pages </Skeleton>
            <Skeleton height={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
              </svg>{" "}
              Raised {pitch.amountRaised}
            </Skeleton>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PitchCard;