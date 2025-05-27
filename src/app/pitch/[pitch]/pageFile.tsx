"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Image from "next/image";
import SideSection from "../../../component/pitchdeck/SideSection";
import { useStore } from "../../../store/useStore";
import FooterPitches from "../../../sections/Pitch/FooterPitches";
import "react-loading-skeleton/dist/skeleton.css";
import LoadImage from "../../../component/LoadImage";
import ShareButton from "../../../component/ShareButton";


const PageFile: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [cookies] = useCookies(["pitch", "isLogged"]);
  const {
    fetchSinglePitch,
    getId,
    pitch,
    user,
    setCount,
    count,
    setShowLogin,
    share,
    setShare,
  } = useStore();
  const [counter, setCounter] = useState<number>(count);
  const [counted, setCounted] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();
    const pitchTitle = typeof params.pitch === "string" && params.pitch !== "" ? params.pitch : path || "";

    setLink(currentPathname);
    getId(pitchTitle);
    fetchSinglePitch(pitchTitle);

    if (!cookies.isLogged) {
      const timer = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [fetchSinglePitch, params.pitch, getId, cookies.isLogged, setShowLogin]);

  useEffect(() => {
    if (counter >= 0) setCount(counter);
    if (!cookies.isLogged && (counted || count === 0)) {
      setShowLogin(true);
      localStorage.setItem("counted", "true");
    } else {
      setShowLogin(false);
    }
    setCounted(!!localStorage.getItem("counted"));
  }, [count, counter, setCount, setShowLogin, cookies.isLogged, counted]);

  const handleContextMenu = (e: React.MouseEvent) => {
    if (user?.email !== "pixelgumstudio@gmail.com") {
      e.preventDefault();
    }
  };

  const closeShare = (res: boolean) => {
    setShare(res);
  };

  return (
    <div className="mt-[60px] w-full">
     

      {/* Top Section */}
      <div onContextMenu={handleContextMenu} className="bg-[#F2F1E8]">
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
                    alt={`${pitch.title}`}
                    src={pitch.coverImageUrl}
                    height={205}
                    style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                  />

                  {pitch.contentImagesUrls?.map((image: string, index: number) => (
                    <LoadImage
                      key={index}
                      alt={`${pitch.title} ${index}`}
                      src={image}
                      height={205}
                      style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {share && <ShareButton url={link} title={pitch.title} close={closeShare} />}
      {/* Recent Posts */}
      <FooterPitches pitchTag={pitch} />
    </div>
  );
};

export default PageFile;
