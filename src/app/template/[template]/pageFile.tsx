"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import SideSection from "../../../component/template/SideSection";
import { useStore } from "../../../store/useStore";
import { useCookies } from "react-cookie";
import LoadImage from "../../../component/LoadImage";
// import FooterPitches from "../sections/Pitch/FooterPitches";

const PageFile: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { fetchSingleTemplate, getId, template, user, setShowLogin } = useStore();
  const [cookies] = useCookies(["template", "isLogged"]);

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();
    const templateTitle =
      typeof params.template === "string" && params.template !== ""
        ? params.template
        : path || "";

    getId(templateTitle);
    fetchSingleTemplate(templateTitle);
    // if (!cookies.isLogged) setShowLogin(true);
  }, [cookies.isLogged, fetchSingleTemplate, getId, params.template, setShowLogin]);

  const handleContextMenu = (e: React.MouseEvent) => {
    if (user?.email !== "pixelgumstudio@gmail.com") {
      e.preventDefault();
    }
  };

  return (
    <div onContextMenu={handleContextMenu} className="mt-[60px] w-full">
      {/* Top Section */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className="sticky top-10 laptop:py-5 w-full max-w-[1272px] mx-auto desktop:ml-[144px] bg-white laptop:px-8 laptop:bg-[#F2F1E8] desktop:px-0">
            <button
              className="p-[6px] mt-6 bg-white"
              onClick={() => router.back()}
              type="button">
              <Image src={"/assets/back.svg"} alt="back button" width={24} height={24} />
              
            </button>
          </div>
          <div className="w-full max-w-[1272px] mx-auto laptop:px-8 desktop:px-0 desktop:ml-[144px] laptop:grid laptop:grid-cols-[1fr_304px] desktop:grid-cols-[1fr_479px] laptop:gap-6 desktop:gap-8 laptop:justify-end">
            <SideSection />
            <div className="bg-[#F2F1E8] order-first w-full ">
              <div className="mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
                <div className="mt-6 mb-8 desktop:mt-8 flex flex-col gap-8 laptop:w-fit desktop:ml-auto desktop:mr-0">
                  <LoadImage
                    alt={`${template?.name}`}
                    src={template?.templateCoverImageUrl}
                    style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                  />
                  {template?.templateImagesUrl?.map((image: string, index: number) => (
                    <LoadImage
                      key={index}
                      alt={`${template?.name} ${index}`}
                      src={image}
                      style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Posts */}
      {/* <FooterPitches /> */}
    </div>
  );
};

export default PageFile;
