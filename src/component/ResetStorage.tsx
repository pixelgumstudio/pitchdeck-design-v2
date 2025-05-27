"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "../store/useStore";
import { useCookies } from "react-cookie";

// Helper to get ms until next midnight
const getMsUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
};

const ResetStorage: React.FC = () => {
  const { setCount, count, setShowLogin } = useStore();
  const [cookies] = useCookies(["pitch", "isLogged"]);
  const [counted, setCounted] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(count);

  // Reset count at midnight or if resetTime expired
  useEffect(() => {
    const resetCountDaily = () => {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const currentTime = now.getTime();
      const storedResetTime = localStorage.getItem("resetTime");

      if (!storedResetTime || currentTime > parseInt(storedResetTime)) {
        setCount(10);
        setCounter(10);
        localStorage.setItem("resetTime", (currentTime + 24 * 60 * 60 * 1000).toString());
        setCounted(false);
        localStorage.setItem("counted", "false");
      }
    };

    resetCountDaily();
  }, [setCount]);

  // Show login modal if not logged in and count is 0
  useEffect(() => {
    if (!cookies.isLogged && (!counted || counter === 0)) {
      setShowLogin(true);
      setCounted(true);
      localStorage.setItem("counted", "true");
    } else if (cookies.isLogged) {
      setShowLogin(false);
      setCounted(false);
      localStorage.setItem("counted", "false");
    }
  }, [counter, counted, cookies.isLogged, setShowLogin]);

  // Countdown timer if not logged in
  useEffect(() => {
    if (!cookies.isLogged && counter > 0) {
      const timer = setInterval(() => {
        setCounter((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cookies.isLogged, counter]);

  // Reset counter at midnight
  useEffect(() => {
    const msUntilMidnight = getMsUntilMidnight();
    const midnightTimeout = setTimeout(() => {
      setCounter(10);
      setCount(10);
      setCounted(false);
      localStorage.setItem("counted", "false");
    }, msUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, [setCount]);

  // If counter reaches 0 and not logged in, show login
  useEffect(() => {
    if (!cookies.isLogged && counter === 0) {
      setShowLogin(true);
    }
  }, [cookies.isLogged, counter, setShowLogin]);

  return null;
};

export default ResetStorage;