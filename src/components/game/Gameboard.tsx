import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import EndState from "./EndState";

const roundLimit = 10;

let todaysWord: { name: string; img: string } = {
  name: "",
  img: "",
};

const Gameboard = () => {
  const [guessState, setGuessState] = useState<string[]>([]);
  const [endGame, setEndgame] = useState(false);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (round >= roundLimit) {
      setEndgame(true);
      console.log("Lose conditon");
      console.log(endGame);
      setResult("Lose");
    }
    if (guessState.includes(todaysWord.name)) {
      console.log("Win conditon");
      setEndgame(true);
      setResult("Win");
    }

    console.log("effect ran:", guessState);
  }, [guessState, round]);

  useEffect(() => {
    console.log("load effect");
    const fetchWord = async () => {
      const response = await fetch("http://localhost:3000/todays_word");
      if (!response.ok) {
        console.log("Fetch Error");
      }
      const data = await response.json();
      todaysWord = data;
      console.log("todays word", data);
      console.log(todaysWord)
      console.log(todaysWord.name);
    };

    fetchWord();
  }, []);

  return (
    <div className="h-full flex flex-col gap-8 justify-center items-center">
      <h1 className="text-white">Staple</h1>
      <div className="flex flex-col h-120 w-90">
        <GameInput
          setGuessState={setGuessState}
          guessState={guessState}
          round={round}
          setRound={setRound}
          endGame={endGame}
        />
        <GameOutput guessState={guessState} />
      </div>
      {endGame && <EndState result={result} todaysWord = {todaysWord} />}
    </div>
  );
};

export default Gameboard;
