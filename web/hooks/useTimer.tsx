import * as React from "react";
import { AppContext } from "../context/AppContext";

type TimerOptions = {
  defaultSeconds: number;
  defaultMinutes: number;
};

export function useTimer({ defaultSeconds, defaultMinutes }: TimerOptions) {
  const { seconds, minutes, setSeconds, setMinutes } =
    React.useContext(AppContext);
  const [oldSeconds, setOldSeconds] = React.useState<number>(defaultSeconds);
  const [oldMinutes, setOldMinutes] = React.useState<number>(defaultMinutes);
  const [isFinish, setIsFinish] = React.useState<boolean>(false);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const id = React.useRef<number>(0);

  const onStart = () => {
    if (!isActive) {
      setTimeout(() => {
        if (seconds != 0) {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    setIsActive((prev) => !prev);
  };

  const onReset = () => {
    setSeconds(oldSeconds);
    setMinutes(oldMinutes);
    setIsFinish(false);
  };

  const tick = () => {
    if (seconds === 0 && minutes === 0) {
      setIsFinish(true);
      clearInterval(id.current);
      return;
    }

    if (seconds === 0) {
      setSeconds(60);
      setMinutes((prev) => prev - 1);
    }
    setSeconds((prev) => prev - 1);
  };

  React.useEffect(() => {
    if (!isActive) {
      clearInterval(id.current);
      return;
    }

    id.current = window.setInterval(tick, 1000);

    return () => {
      clearInterval(id.current);
    };
  });

  return { seconds, minutes, isActive, isFinish, onStart, onReset };
}
