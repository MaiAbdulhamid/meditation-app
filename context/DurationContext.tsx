import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface DurationContextProps {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

const DurationContext = createContext<DurationContextProps>({
  duration: 10,
  setDuration: () => {},
});

const DurationProvider = ({ children }: { children: ReactNode }) => {
  const [duration, setDuration] = useState<number>(10); // Default to 10 minutes

  return (
    <DurationContext.Provider value={{ duration, setDuration }}>
      {children}
    </DurationContext.Provider>
  );
};

export { DurationContext, DurationProvider };
