import { useEffect, useState } from "react";
import EmptyPitch from "./EmptyPitch";
import TemplateCard from "./template/TemplateCard";
import PitchCard from "./pitchdeck/PitchCard";
import { useStore } from "../store/useStore";
import type { Pitch, Template } from "../store/types";

type TagsArrayProps = {
  tag: string;
};

type ListItem = Pitch | Template;

const TagsArray: React.FC<TagsArrayProps> = ({ tag }) => {
  const { templates, pitches } = useStore();
  const [array, setArray] = useState<Pitch[]>([]);
  const [filterPitches, setFilterPitches] = useState<Pitch[]>([]);

  // Filter based on the tag of the page
  useEffect(() => {
    const filter = pitches?.filter((pitch) => pitch.tag === tag) ?? [];
    setFilterPitches(filter);
  }, [pitches, tag]);

  // Shuffle filtered pitches
  useEffect(() => {
    if (filterPitches && filterPitches.length > 0) {
      const shuffledArray = [...filterPitches];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      setArray(shuffledArray);
    }
  }, [filterPitches]);

  // Interleave templates into the shuffled pitches array
  const mappedArray: ListItem[] = array?.flatMap((item, index) => {
    const additionalObject =
      templates && index % 5 === 1 && templates[Math.floor(index / 5)]
        ? [templates[Math.floor(index / 5)]]
        : [];
    return [item, ...additionalObject];
  });

  if (!filterPitches || filterPitches.length === 0) {
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

export default TagsArray;
