"use client"
// import Hero from "../../sections/Pitch/PitchHero";
import PitchContent from "../../sections/Pitch/PitchContent";
import { useCookies } from "react-cookie";
// import ViewMore from "../../sections/Viewmore";
import MakeDeck from "../../sections/MakeDeck";
// import Discover from "../sections/Discover";
// import ScrollToTopButton from "../component/ScrollToTopButton";

const PageFile = () => {
  const [cookies] = useCookies(["pitch", "isLogged"]);

  return (
<div className="mt-[60px]">
        {/* {!cookies.isLogged && <Hero />} */}
        <PitchContent loggedIn={cookies.isLogged} />
        {/* {!cookies.isLogged && <ViewMore />} */}
        {/* <Discover /> */}
        <MakeDeck />
      </div>
 
  );
};

export default PageFile;
