"use client";
import { useParams, useRouter } from "next/navigation";
import { websiteLinks } from "../../../lib/links";
import { createSlug } from "../../../component/slug";
import Image from "next/image";

type WebsiteLink = {
  title: string;
  image: string;
  url: string;
  description: string;
};

const PageFile: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const pageName = typeof params.link === "string" ? params.link : "";

  const currentWebsite = websiteLinks.find(
    (website: WebsiteLink) => createSlug(website.title) === pageName
  );

  return (
    <div className="w-full bg-[#FFFFFF] py-[50px] tablet:py-[80px] laptop:py-[100px]">
      <div className="laptop:py-5 w-full max-w-[1150px] mx-auto bg-white px-4 tablet:px-6 laptop:px-8 desktop:px-0">
        <button
          className="mb-6 bg-white"
          onClick={() => router.back()}
          type="button"
        >
          <Image
            src={"/assets/back.svg"}
            alt="back button"
            width={24}
            height={24}
            className=""
          />
        </button>
      </div>

      <div className="relative px-4 tablet:px-6 laptop:px-8 desktop:px-0 max-w-[1152px] mx-auto text-left mb-8">
        <div className="relative w-full laptop:max-w-[1021px]">
          {currentWebsite && (
            <div className="grid gap-6 laptop:grid-cols-5 laptop:gap-8">
              <div className="laptop:col-span-2">
                <Image
                  src={currentWebsite.image}
                  alt={currentWebsite.title}
                  width={264}
                  height={278}
                  className="w-full h-auto max-h-[574px]"
                  style={{ objectFit: "none" }}
                  priority
                />
              </div>
              <div className="laptop:col-span-3 flex flex-col gap-3 w-full laptop:max-w-[555px]">
                <p className="font-semibold w-full max-w-[255px] text-16 tablet:text-24 text-[#1C1C1C] mb-1">
                  {currentWebsite.title}
                </p>
                <div
                  className="text-16 tablet:text-20 mb-6 tablet:mb-10"
                  // dangerouslySetInnerHTML={{
                  //   __html: currentWebsite.description,
                  // }}
                >
                  <p className="text-[#484848] text-left mb-6 tablet:mb-10">
                    {currentWebsite.description}
                  </p>
                </div>
                <a
                  href={currentWebsite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox flex items-center w-full text-center text-black hover:border-[#1C1C1C] hover:bg-[#FFF5C4] hover:border hover:shadow-darkbox py-[6px] px-2 text-16 font-medium"
                >
                  <span className="mx-auto">Visit Website</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageFile;
