"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoadImage from "./LoadImage";
import Skeleton from "./Skeleton";
import { createSlug } from "./slug";
import { useStore } from "../store/useStore";

type BlogCardProps = {
  image: string;
  date: string;
  id: string;
  title: string;
  showDate?: boolean;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  id,
  title,
  showDate = true,
}) => {
  const { getBlogId, getBlogTitle } = useStore();

  const changeUrl = (id: string, title: string) => {
    getBlogId(id);
    getBlogTitle(title);
  };

  return (
    <div className="h-fit tablet:pb-[80px] laptop:pb-0">
      <LoadImage
        src={image}
        style={`mb-6 w-full h-full max-h-[342px]`}
        alt={title}
      />
      {showDate && title && (
        <p className="text-[#64645F] text-[16px] leading-6">
          <Skeleton>{date}</Skeleton>
        </p>
      )}
      <p
        className="my-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] laptop:text-[20px] laptop:font-bold laptop:leading-[28px] tracking-[-0.8px]"
        dangerouslySetInnerHTML={{
          __html:
            title?.length > 70
              ? `${title?.substring(0, 70)} ...`
              : title,
        }}
      ></p>
      <Link
        href={{
          pathname: `/blog/${createSlug(title)}`,
          query: { id },
        }}
        className="flex w-fit items-center"
        scroll={false}
        onClick={() => changeUrl(id, title)}
      >
        <p className="text-[#21AB68] text-[16px] font-medium leading-[22px]">
          Read more
        </p>
        <Image src={"../assets/arrowRight.svg"} alt="" width={24} height={24} />
      </Link>
    </div>
  );
};

export default BlogCard;