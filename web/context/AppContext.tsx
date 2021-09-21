import * as React from "react";

type AppContextType = {
  seconds: number;
  minutes: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
};
const AppContext = React.createContext<AppContextType>({
  seconds: 0,
  minutes: 0,
  setMinutes: () => {},
  setSeconds: () => {},
});

type AppProviderProps = {
  children: React.ReactChild;
};

function AppProvider({ children }: AppProviderProps) {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const value = { seconds, setSeconds, minutes, setMinutes };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
