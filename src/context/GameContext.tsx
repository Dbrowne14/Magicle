import {
  createContext,
  useState,
  useEffect, useContext,
  type SetStateAction,
  type Dispatch,
} from "react";
import type { ReturnStructure } from "../types/types";

const ROUND_LIMIT = 10;

export type GameContextType = {
  guess: string[];
  setGuess: Dispatch<SetStateAction<string[]>>;
  endGame: boolean;
  setEndGame: Dispatch<SetStateAction<boolean>>;
  round: number;
  setRound: Dispatch<SetStateAction<number>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  allCards: ReturnStructure[] | null;
  setAllCards: Dispatch<SetStateAction<ReturnStructure[] | null>>;
  todaysWord: ReturnStructure | null;
  setTodaysWord: Dispatch<SetStateAction<ReturnStructure | null>>;
  clueState: boolean;
  setClueState: Dispatch<SetStateAction<boolean>>;
  loadingState: boolean;
  setLoadingState: Dispatch<SetStateAction<boolean>>;
};

type GameProviderProps = {
  children: React.ReactNode;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: GameProviderProps) => {
  //Game
  const [guess, setGuess] = useState<string[]>([]);
  const [endGame, setEndGame] = useState(false);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState("");
  const [clueState, setClueState] = useState<boolean>(false);
  //data
  const [allCards, setAllCards] = useState<ReturnStructure[] | null>(null);
  const [todaysWord, setTodaysWord] = useState<ReturnStructure | null>(null);
  //ui
  const [loadingState, setLoadingState] = useState(true);

  //game conditions
  useEffect(() => {
    if (!todaysWord) return;
    if (round >= ROUND_LIMIT) {
      setEndGame(true);
      setResult("Lose");
    }
    if (guess.includes(todaysWord?.name)) {
      setEndGame(true);
      setResult("Win");
    }

    console.log("effect ran:", guess);
  }, [guess, round]);

  const value = {
  guess,
  setGuess,
  round,
  setRound,
  endGame,
  setEndGame,
  result,
  setResult,
  allCards,
  setAllCards,
  todaysWord,
  setTodaysWord,
  clueState,
  setClueState,
  loadingState,
  setLoadingState,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGameContext must be used inside provider");
  return context;
}
