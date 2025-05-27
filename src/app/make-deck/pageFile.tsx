import Hero from "../../sections/Hero";
import Carousel from "../../sections/Carousel";
import Presentation from "../../sections/Presentation";
import Pricing from "../../sections/Pricing";
import Faq from "../../sections/Faq";
import Testimonials from "../../sections/Testimonials";
import Features from "../../sections/Features";
import FeaturesOnly from "../../sections/FeaturesOnly";
import Discover from "../../sections/Discover";
import HandPick from "../../sections/HandPick";
import CustomDeck from "../../sections/CustomDeck";


const PageFile = () => {
  return (
    <>
  
      <div className="mt-[60px]">
        <Hero />
        <Carousel />
        <Features />
        <FeaturesOnly />
        <Presentation />
        <Pricing />
        <Faq />
        <CustomDeck />
        <Discover />
        <HandPick />
        <Testimonials />
      </div>
    </>
  );
};

export default PageFile;
