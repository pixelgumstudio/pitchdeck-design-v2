"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useMediaQuery } from "react-responsive";
import BlogCard from "../../../component/BlogCard";
import { createSlug } from "../../../component/slug";
import Image from "next/image";
import type { Blog } from "../../../store/types";

const SinglePost = () => {
  const params = useParams();
  const router = useRouter();

  const [post, setPost] = useState<Blog>({} as Blog);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [postLists, setPostList] = useState<Blog[]>([]);
  const postsCollectionRef = collection(db, "posts");
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const list: Blog[] = data.docs.map((doc) => ({ ...doc.data() } as Blog));
      setPostList(list);
      const found = list.find((p) => createSlug(p.title) === params.post);
      if (found) setPost(found);
      setIsLoading(false);
    };
    getPosts();
  }, [params.post]);

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-[#EEFCF5]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <button
            className="flex w-fit items-center bg-white p-3 rounded-[8px] border border-[#D2D2CF] shadow-backButton mb-8"
            onClick={() => router.back()}
            type="button"
          >
            <Image
              src={"/assets/arrowRight.svg"}
              alt=""
              className="rotate-[180deg]"
              width={24}
              height={24}
            />
            <p>Back</p>
          </button>
          <p className="capitalize text-24 font-bold tablet:text-32 laptop:text-48 text-[#2E2E27] w-fit">
            {post?.title}
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <div className="">
            <div className="my-6">
              <p
                className="singlePost"
                dangerouslySetInnerHTML={{ __html: post.postText }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
            Most Recent
          </p>
          <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
            {postLists &&
              postLists.map(
                (recent, i) =>
                  (isBigScreen ? i < 3 : i < 2) &&
                  createSlug(recent.title) !== params.post && (
                    <BlogCard
                      key={recent._id}
                      id={recent._id}
                      date={recent.updatedAt}
                      image={recent.coverImageUrl}
                      title={recent.title}
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;