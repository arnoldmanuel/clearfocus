import * as React from "react";
import { useTimer } from "../hooks/useTimer";
import { Button } from "./Button";
import { Cog } from "./Icons";

type TimerProps = {
  defaultSeconds: number;
  defaultMinutes: number;
  openModal: () => void;
};

export function Timer({
  defaultSeconds,
  defaultMinutes,
  openModal,
}: TimerProps) {
  const { seconds, minutes, isActive, isFinish, onStart, onReset } = useTimer({
    defaultSeconds,
    defaultMinutes,
  });
  console.log("Rerender", defaultMinutes, minutes);
  return (
    <div
      data-testid="display-time"
      className="md:mt-72 mt-48 text-center space-y-12"
    >
      <div className="text-9xl">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Button onClick={onStart}>{isActive ? "Stop" : "Start"}</Button>
        <Button onClick={onReset}>Reset</Button>
        <Button size="small" onClick={() => openModal()}>
          <Cog />
        </Button>
      </div>
    </div>
  );
}
