import { useEffect, useState } from "react";
import Controls from "../Controls/Controls";
import calculateTimer from "../../Helpers/calculateTimer";
import "./Timer.scss";

const Timer = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main>
      <section className="timer-container">
        <p className="timer-values">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-values">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-values">{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
};

export default Timer;
