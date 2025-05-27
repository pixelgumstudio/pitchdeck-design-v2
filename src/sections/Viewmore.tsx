"use client";
import { useCookies } from "react-cookie";
import { useStore } from "../store/useStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ViewMore: React.FC = () => {
  const [cookies] = useCookies(["pitch", "isLogged"]);
  const [mounted, setMounted] = useState(false);
  const setShowLogin = useStore((state) => state.setShowLogin);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const view = () => {
    if (!cookies.isLogged) {
      setShowLogin(true);
    } else {
      router.push("/pitchdecks");
    }
  };

  if (!mounted) return null; // or a placeholder if needed

  return (
    <div className="bg-white relative">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
        <div className="w-fit mx-auto">
          <h2 className="mx-auto w-[288px] tablet:w-[524px] desktop:w-[655px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6">
            Need More Ideas?
          </h2>
          <p className="w-full max-w-[400px] laptop:max-w-[658px] mx-auto text-16 tablet:text-20 laptop:text-20 text-[#000] mb-10 font-normal">
            {!cookies.isLogged
              ? "Signup today to get more access to pitch decks and industries without barriers"
              : "Check out our full list of pitch deck inspirations from founders that have raised successfully"}
          </p>
          <p
            onClick={view}
            className="cursor-pointer bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-3 h-[52px] text-[#fff] font-sm leading-5 font-medium focus:outline-none"
          >
            {!cookies.isLogged ? "Get more inspiration" : "View All Pitch decks"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
