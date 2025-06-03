"use client";
import Testimonials from "../../../sections/Testimonials";
import TagsContent from "@/sections/Tags/TagsContent";
import TagsHero from "@/sections/Tags/TagsHero";


const PageFile = ({ title }: { title: string }) => {


  const tagParam: string =  title  || "";
  if (!tagParam) {
    return <div className="text-center mt-10">No tag provided</div>;
  }
  
  return (
    <div className="mt-[60px]">
       <TagsHero title={tagParam}/>
       <TagsContent title={tagParam}/>
      <Testimonials />
    </div>
  );
};

export default PageFile;
