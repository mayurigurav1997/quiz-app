import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("timeout set");
      onTimeout();
    }, timeout);

    return () => {
      console.log("removed timeout");
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("timeinterval set");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log("removed timeinterval");
      clearInterval(timerId);
    };
  }, []);

  return (
    <progress
      id="qusetion-time"
      value={remainingTime}
      max={timeout}
      className="mode"
    />
  );
};

export default QuestionTimer;
