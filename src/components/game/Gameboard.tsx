import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import EndState from "./EndState";
import type { ReturnStructure } from "../../types/types";

const roundLimit = 10;


const Gameboard = () => {
  const [guessState, setGuessState] = useState<string[]>([]);
  const [endGame, setEndgame] = useState(false);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState("");
  const [allCards, setAllCards] = useState<ReturnStructure[] | null>(null);
  const [todaysWord, setTodaysWord] = useState<ReturnStructure | null>(null);

  useEffect(() => {
    if (!todaysWord) return
    if (round >= roundLimit) {
      setEndgame(true);
      console.log("Lose conditon");
      console.log(endGame);
      setResult("Lose");
    }
    if (guessState.includes(todaysWord?.name)) {
      console.log("Win conditon");
      setEndgame(true);
      setResult("Win");
    }

    console.log("effect ran:", guessState);
  }, [guessState, round]);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch("http://localhost:3000/todays_word");
      if (!response.ok) {
        console.log("Fetch Error");
      }
      const data = await response.json();
      setTodaysWord(data);
    };

    fetchWord();
  }, []);

  useEffect(() => {
    const fetchAllcards = async () => {
      try {
        const response = await fetch("http://localhost:3000/allCards");
        if (!response.ok) {
          console.log("Error returning fetch");
        }
        const data = await response.json();
        console.log(data);
        setAllCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllcards();
  }, []);

  return (
    <div className="h-full flex flex-col gap-8 justify-center items-center">
      <h1 className="text-white mt-10">Staple</h1>
      <div className="flex flex-col h-full w-90">
        <div className="flex justify-end w-full">
          <h2 className="pr-2">Want a hint?</h2>
        </div>
        <div className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[rgba(1,1,1,0.9)] w-80 h-80 rounded-2xl  items-center justify-center gap-4">
          <h2>Hint</h2>
          <p>{todaysWord?.oracle_text}</p>
        </div>
        <GameInput
          setGuessState={setGuessState}
          guessState={guessState}
          round={round}
          setRound={setRound}
          endGame={endGame}
          allCards={allCards}
        />
        <GameOutput
          guessState={guessState}
          allCards={allCards}
          todaysWord={todaysWord}
        />
      </div>
      {endGame && <EndState result={result} todaysWord={todaysWord} />}
    </div>
  );
};

export default Gameboard;
