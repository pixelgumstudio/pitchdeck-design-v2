"use client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SearchPitch from "../../component/pitchdeck/SearchPitch";
import DynamicListComponent from "../../component/pitchdeck/PitchAndTemplateArray";
import { useStore } from "../../store/useStore";
import { loadPitches, loadTags, loadTemplates } from "../../lib/functions";
import { Tag } from "../../store/types";
import TagSkeleton from "@/component/SkeletonTags";
import { useCookies } from "react-cookie";
import ViewMore from "../Viewmore";

type PitchContentProps = {
  loggedIn: boolean;
};

const PitchContent: React.FC<PitchContentProps> = ({ loggedIn }) => {
  const [searchInput, setSearch] = useState<string>("");
  const [activeTag, setActiveTag] = useState<string>("All decks");
  const [tags, setTags] = useState<Tag[]>([]);

  const {
    fetchTemplates,
    setIsComponentLoading,
    fetchPitches,
    componentLoading,
  } = useStore();

  // Get Tag
  const sortTag = (tag: string) => {
    setActiveTag(tag);
    setSearch("");
  };

  // Get Input from search component
  const search = (res: string) => setSearch(res);

  // Fetch Pitch based on query
  const { data: loadedPitches, isLoading } = useQuery("pitches", loadPitches);

  // Fetch All Templates
  const { data: loadedTemplates } = useQuery("templates", loadTemplates);

  const { data: loadedTags } = useQuery("tags", loadTags);
  const [cookies] = useCookies(["pitch", "isLogged"]);

  useEffect(() => {
    if (!Array.isArray(loadedTags)) return; // SAFEST check
    const uniqueMap = new Map<string, Tag>();
    for (const t of loadedTags) {
      if (!uniqueMap.has(t.tag)) {
        uniqueMap.set(t.tag, t);
      }
    }
    setTags(Array.from(uniqueMap.values()));
  }, [loadedTags]);

  useEffect(() => {
    setIsComponentLoading(isLoading);
    const wordsArray = searchInput?.split(/\s+/);
    const sortPitchesByTagOrSearchInput = () => {
      if (activeTag === "All decks" && !searchInput) {
        return loadedPitches;
      }
      if (activeTag && !searchInput) {
        return loadedPitches?.filter((pitch: Pitch) => pitch.tag === activeTag);
      }
      if (searchInput) {
        setActiveTag("All decks");
        const newArray = loadedPitches?.filter((pitch: Pitch) =>
          wordsArray.some(
            (word: string) =>
              pitch.tag.toLowerCase().includes(word) ||
              pitch.amountRaised.includes(word) ||
              pitch.title.toLowerCase().includes(word) ||
              (pitch.about.includes(word) && word.length > 2)
          )
        );
        return newArray;
      }
      if (!searchInput && !activeTag) {
        return loadedPitches;
      }
      if (searchInput) {
        setActiveTag("All decks");
        return loadedPitches?.filter((pitch: Pitch) =>
          wordsArray.some((word: string) =>
            pitch.title.toLowerCase().includes(word)
          )
        );
      }
      return loadedPitches;
    };

    fetchTemplates(loadedTemplates);
    fetchPitches(sortPitchesByTagOrSearchInput());
  }, [
    componentLoading,
    fetchPitches,
    fetchTemplates,
    isLoading,
    loadedPitches,
    loadedTemplates,
    searchInput,
    setIsComponentLoading,
    activeTag,
  ]);

  return (
    <>
      <div className="relative z-20 w-full bg-white" id="pricing">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px]">
          <div className="flex flex-col gap-4 tablet:!flex-row tablet:!gap-10 justify-between items-center mb-6">
            <p className="text-20 font-bold whitespace-nowrap tablet:text-32 text-[#000]">
              Pitch decks
            </p>
            <SearchPitch enterSearch={search} />
          </div>
          <div className="flex flex-wrap justify-center tablet:!justify-start gap-x-2 gap-y-[10px] mb-6 desktop:gap-x-6">
            {isLoading ? (
              <TagSkeleton count={10} />
            ) : (
              tags?.map((tag: Tag) => (
                <p
                  key={tag._id}
                  onClick={() => sortTag(tag.tag)}
                  className={`cursor-pointer bg-white text-14 font-medium rounded-[9999px] px-3 py-[6px] border hover:border-[#21AB68] capitalize ${
                    activeTag === tag.tag
                      ? "border-[#21AB68]"
                      : "border-[#d2d2cf]"
                  }`}
                >
                  {tag.tag}
                </p>
              ))
            )}
          </div>
          <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px] min-h-[200px] relative h-fit">
            <DynamicListComponent loggedIn={loggedIn} loading={isLoading} />
          </div>
        </div>
        {!loggedIn && (
          <div className="absolute bottom-0 tablet:bottom-[50px] laptop:bottom-[70px]  left-0 w-full h-24 bg-gradient-to-b from-[rgba(243, 244, 246, 0.3)] to-white  filter blur-[2px] backdrop-blur-0"></div>
        )}
      </div>
      {!cookies.isLogged && <ViewMore />}
    </>
  );
};

export default PitchContent;
