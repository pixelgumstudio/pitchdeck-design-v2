"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useStore } from "../store/useStore";
import React, { ReactNode } from "react";

type SkeletonLoaderProps = {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ children, width = "100%", height }) => {
  const { componentLoading } = useStore();

  return componentLoading ? (
    <Skeleton width={width} height={height} containerClassName="flex-1" />
  ) : (
    <>{children}</>
  );
};

export default SkeletonLoader;