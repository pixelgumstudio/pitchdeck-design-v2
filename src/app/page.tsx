import Hero from "../sections/Pitch/PitchHero";
import ViewMore from "../sections/Viewmore";
import Discover from "../sections/Discover";
import MakeDeck from "../sections/MakeDeck";
import PitchContent from "../sections/Pitch/PitchContent";

const Home = () => {
  return (
    <>
      <div className="mt-[60px]">
        <Hero />
        <PitchContent loggedIn={false} />
        <ViewMore />
        <Discover />
        <MakeDeck />
      </div>
    </>
  );
};

export default Home;
