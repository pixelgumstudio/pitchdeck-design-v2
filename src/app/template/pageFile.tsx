import Hero from "../../sections/Template/TemplateHero";
import TemplateContent from "../../sections/Template/TemplateContent";
import Features from "../../sections/FeaturedTemplate";

const PageFile = () => {

  return (
 
      <div className="mt-[60px]">
        <Hero />
       <TemplateContent/>
       <Features />
      </div>
  );
};

export default PageFile;
