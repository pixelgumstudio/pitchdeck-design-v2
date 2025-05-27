"use client";
import { useState, ChangeEvent } from "react";
import Image from "next/image";

type SearchPitchProps = {
  enterSearch: (value: string) => void;
};

export default function SearchPitch({ enterSearch }: SearchPitchProps) {
  const [search, setSearch] = useState("");

  const searchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    enterSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="flex gap-2 p-3 bg-white w-[80%] tablet:!w-[50%] max-w-[560px] border-[#C1C9C8] hover:border-myGreen-400 border">
      <Image src={"../../assets/search.svg"} alt="search icon" width={24} height={24} />
      <input
        type="text"
        placeholder="Search for a pitchdeck"
        value={search}
        onChange={searchInput}
        className="outline-none w-full"
      />
    </div>
  );
}