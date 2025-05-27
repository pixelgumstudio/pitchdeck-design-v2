"use client";
import { useParams } from "next/navigation";
import Testimonials from "../../../sections/Testimonials";
import TagsContent from "@/sections/Tags/TagsContent";
import TagsHero from "@/sections/Tags/TagsHero";


const PageFile = () => {

  const params = useParams();

  const tagParam: string = typeof params.tag === "string" ? params.tag : "";


  

  return (
    <div className="mt-[60px]">
       <TagsHero title={tagParam}/>
       <TagsContent title={tagParam}/>
      <Testimonials />
    </div>
  );
};

export default PageFile;
