"use client"
import CategoryHero from "../../../sections/Category/CategoryHero";
import CategoryContent from "../../../sections/Category/CategoryContent";
import { useParams } from "next/navigation";
import Testimonials from "../../../sections/Testimonials";
import { useEffect, useState } from "react";
import { categories } from "../../../lib/category";

type CategoryType = {
  title: string;
  desc: string;
  tag: string;
};

const PageFile = () => {
  const params = useParams();
  const title = typeof params.category === "string" ? params.category : "";

  const [, setTag] = useState<CategoryType | null>(null);

  useEffect(() => {
    const found = categories.find(
      (cat) => cat.title.toLowerCase() === title.replace(/-/g, " ")
    );
    if (found) setTag(found);
  }, [title]);

  return (

      <div className="mt-[60px]">
        <CategoryHero title={title} />
        <CategoryContent title={title} />
        <Testimonials />
      </div>
  );
};

export default PageFile;
