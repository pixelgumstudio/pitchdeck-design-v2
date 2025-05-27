"use client";
import { useEffect, useState } from "react";
import EmptyPitch from "./EmptyPitch";
import TemplateCard from "./template/TemplateCard";
import PitchCard from "./pitchdeck/PitchCard";
import { useStore } from "../store/useStore";
import type { Pitch, Template } from "../store/types";


type ListItem = Pitch | Template;

const CategoryArray = () => {
  const { templates, category } = useStore();
  const [array, setArray] = useState<Pitch[]>([]);

  const mappedArray: ListItem[] = array?.flatMap((item, index) => {
    const additionalObject =
      templates && index % 5 === 1 && templates[Math.floor(index / 5)]
        ? [templates[Math.floor(index / 5)]]
        : [];
    return [item, ...additionalObject];
  });

  useEffect(() => {
    const shuffleArray = () => {
      if (category && category.length > 0) {
        const shuffledArray = [...category];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        setArray(shuffledArray);
      }
    };

    shuffleArray();
  }, [category]);

  if (!category || category.length === 0) {
    return <EmptyPitch />;
  }

  return (
    <>
      {mappedArray?.map((item, index) => (
        <div key={index}>
          {typeof item === "object" &&
            ("cost" in item ? (
              <TemplateCard template={item as Template} />
            ) : (
              <PitchCard pitch={item as Pitch} />
            ))}
        </div>
      ))}
    </>
  );
};

export default CategoryArray;
