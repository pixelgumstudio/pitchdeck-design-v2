"use client";
import { useEffect, useState } from "react";
import PitchCard from "../../component/pitchdeck/PitchCard";
import { useParams } from "next/navigation";
import { createSlug } from "../../component/slug";
import axios from "../../lib/axios";
import { useQuery } from "react-query";


type FooterPitchesProps = {
  pitchTag: { tag: string };
};

const loadPitches = async (): Promise<Pitch[]> => {
  try {
    const response = await axios.get(`/pitch/filter?tag=All`);
    const shuffledArray = [...response.data];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  } catch (error) {
    console.error("Error in sort function:", error);
    throw error;
  }
};

export default function FooterPitches({ pitchTag }: FooterPitchesProps) {
  const params = useParams();
  const [array, setArray] = useState<Pitch[]>([]);
  const { data: pitches } = useQuery("pitches", loadPitches);

  // Responsive: show 6 on large screens, 4 on small
  const [maxCards, setMaxCards] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      setMaxCards(window.innerWidth >= 1024 ? 6 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pitches) {
      const filteredPitches = pitches.filter(
        (pitch) => pitch.tag === pitchTag.tag
      );
      if (filteredPitches.length === 1) {
        setArray(pitches);
      } else {
        setArray(filteredPitches);
      }
    }
  }, [pitchTag.tag, pitches]);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto px-4 py-[40px] tablet:px-6 tablet:py-[80px] laptop:max-w-[1152px] laptop:px-8 laptop:py-[100px] desktop:px-0">
        <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
          More pitchdecks like this
        </p>
        <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
          {array &&
            array.map(
              (pitch, i) =>
                createSlug(pitch?.title) !== params?.pitch &&
                i < maxCards && (
                  <PitchCard key={pitch?._id} pitch={pitch} />
                )
            )}
        </div>
      </div>
    </div>
  );
}
