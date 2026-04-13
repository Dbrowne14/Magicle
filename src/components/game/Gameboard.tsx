import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import EndState from "./alternateStates/EndState";
import type { ReturnStructure } from "../../types/types";
import { ClueState } from "./alternateStates/ClueState";
import logo from "../../../public/Mgicle_Favicon.png"

const roundLimit = 10;

const Gameboard = () => {
  const [guessState, setGuessState] = useState<string[]>([]);
  const [endGame, setEndgame] = useState(false);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState("");
  const [allCards, setAllCards] = useState<ReturnStructure[] | null>(null);
  const [todaysWord, setTodaysWord] = useState<ReturnStructure | null>(null);
  const [clueState, setClueState] = useState<boolean>(false);

  useEffect(() => {
    if (!todaysWord) return;
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
      <div className="w-full flex flex-row items-center justify-center mt-10">
        <img src={logo} className="h-20"/>
        <h1 className="text-[#ceac5e] ">taple</h1>
      </div>
      <div className="flex flex-col h-full w-90">
        {round > 6 && (
          <div className={`flex justify-end w-full  ${round === 7 ? "animate-pulse" : "animate-none"}`}>
            <h2 className="pr-2" onClick={() => setClueState(true)}>
              Use your clue token?
            </h2>
          </div>
        )}

        <ClueState setClueState={setClueState} todaysWord={todaysWord} clueState={clueState} round={round}/>

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
