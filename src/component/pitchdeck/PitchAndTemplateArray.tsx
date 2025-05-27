"use client";
import { useEffect, useState } from "react";
import EmptyPitch from "../EmptyPitch";
import TemplateCard from "../template/TemplateCard";
import PitchCard from "./PitchCard";
import { useStore } from "../../store/useStore";
import SkeletonCard from "../SkeletonCard";
import type { Pitch, Template } from "../../store/types";

type DynamicListComponentProps = {
  loggedIn: boolean;
  loading: boolean;
};

type ListItem = Pitch | Template;

const DynamicListComponent = ({ loggedIn, loading }: DynamicListComponentProps) => {
  const { templates, pitches } = useStore();
  const [array, setArray] = useState<Pitch[]>([]);

  // Interleave templates into the shuffled pitches array
  const mappedArray: ListItem[] = array?.flatMap((item, index) => {
    const additionalObject =
      templates && index % 5 === 1 && templates[Math.floor(index / 5)]
        ? [templates[Math.floor(index / 5)]]
        : [];
    return [item, ...additionalObject];
  });

  useEffect(() => {
    const shuffleArray = () => {
      if (pitches && pitches.length > 0) {
        const shuffledArray = [...pitches];
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
  }, [pitches]);

  if (loading) {
    return (
      <>
        {[1, 2, 3].map((card) => (
          <SkeletonCard key={card} />
        ))}
      </>
    );
  }

  if (!pitches || pitches.length === 0) {
    return <EmptyPitch />;
  }

  return (
    <>
      {mappedArray.map((item, index) => {
        const shouldShow = !loggedIn ? index <= 11 : true;
        if (!shouldShow || typeof item !== "object") return null;

        const isTemplate = "cost" in item;

        return (
          <div key={index}>
            {isTemplate ? (
              <TemplateCard template={item as Template} />
            ) : (
              <PitchCard pitch={item as Pitch} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default DynamicListComponent;
