import * as React from "react";
import { Button } from "./Button";

type TimerConfigModalProps = {
  seconds: number;
  minutes: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TimerConfigModal({
  seconds,
  minutes,
  setSeconds,
  setMinutes,
  setOpen,
}: TimerConfigModalProps) {
  const setDefaultSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSeconds = Number.parseInt(e.currentTarget.value);
    if (currentSeconds > 59) {
      setSeconds(59);
    } else if (currentSeconds < 0) {
      setSeconds(0);
    } else {
      setSeconds(currentSeconds);
    }
  };

  const setDefaultMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentMinutes = Number.parseInt(e.currentTarget.value);
    if (currentMinutes > 240) {
      setMinutes(240);
    } else if (currentMinutes < 0) {
      setMinutes(0);
    } else {
      setMinutes(currentMinutes);
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-white"
                  id="modal-title"
                >
                  How long do you want to focus?
                </h3>
                <div className="mt-2">
                  <label htmlFor="minutes">Minutes:</label>
                  <input
                    className="p-2 bg-transparent w-16"
                    id="minutes"
                    type="number"
                    value={minutes}
                    onChange={(e) => setDefaultMinutes(e)}
                  />
                  <label htmlFor="seconds">Seconds</label>
                  <input
                    className="p-2 bg-transparent w-16"
                    id="seconds"
                    type="number"
                    value={seconds}
                    onChange={(e) => setDefaultSeconds(e)}
                  />
                </div>
                <div className="mt-4">
                  <Button onClick={() => setOpen((prev) => !prev)}>Go!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
