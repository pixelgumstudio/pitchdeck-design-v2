
"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
  }

  }, [seconds]);

  const formatTime = (time:number) => {
    return time < 10 ? `${time}` : time;
  };

  return (
    <>
      <p className='border rounded-full w-10 h-10 flex items-center justify-center'>{`${formatTime(seconds)}`}</p>
    </>
  );
};

export default CountdownTimer;
