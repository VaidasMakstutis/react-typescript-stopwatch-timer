import React, { useState } from "react";
import "./Controls.scss";

type ITimeProps = {
  setTimeInSeconds: React.Dispatch<React.SetStateAction<number>>;
};

const Controls = (props: ITimeProps) => {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handleStartButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((prevState: number) => prevState + 1);
    }, 1000);
    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <section className="controls-container">
      <button onClick={handleStartButton}>Start</button>
      <button onClick={handleStopButton}>Stop</button>
      <button onClick={handleResetButton}>Reset</button>
    </section>
  );
};

export default Controls;
