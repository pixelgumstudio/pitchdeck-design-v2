"use client";
import { useStore } from "../store/useStore";

const Loading: React.FC = () => {
  const { loading } = useStore();

  return loading ? (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
      <p className="text-48 font-bold tablet:text-24 mb-6 text-white"></p>
    </div>
  ) : null;
};

export default Loading;