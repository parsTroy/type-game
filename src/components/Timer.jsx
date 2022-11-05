import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { startCounting } from '../pages/Home';

const Timer = (props) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { correctWords, startCounting } = props;

  const minutes = timeElapsed / 60;

  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [props.startCounting]);

  return (
    <>
      <div className="text-center text-3xl font-bold py-4">Time: {timeElapsed}</div>
      <div className="text-center text-3xl font-bold py-4">
        Speed: {(correctWords / minutes || 0).toFixed(2)} W/PM
      </div>
    </>
  );
};

export default Timer;
