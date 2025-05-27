"use client";
import { useStore } from "../store/useStore";
import ClipLoader from "react-spinners/ClipLoader";

const Loading: React.FC = () => {
  const { componentLoading } = useStore();

  return componentLoading ? (
    <div className="flex flex-col justify-center items-center bg-modalBlur absolute min-h-[100px] top-0 left-0 z-[350] w-full h-full">
      <ClipLoader
        size={56}
        color="#21AB68"
        loading={true}
        cssOverride={{}}
        aria-label="clip-loading"
      />
    </div>
  ) : null;
};

export default Loading;
