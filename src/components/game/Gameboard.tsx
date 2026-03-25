import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import EndState from "./EndState";
import { todaysName } from "../../data/dummyData";

const roundLimit = 10;

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
    if (guessState.includes(todaysName)) {
      console.log("Win conditon");
      setEndgame(true);
      setResult("Win");
    }

    console.log("effect ran:", guessState);
  }, [guessState, round]);

  return (
    <div className="h-full flex flex-col gap-8 justify-center items-center">
      <h1 className="text-white">Staple</h1>
      <div className="flex flex-col h-120 w-90 border border-white">
        <GameInput
          setGuessState={setGuessState}
          guessState={guessState}
          round={round}
          setRound={setRound}
          endGame={endGame}
        />
        <GameOutput guessState={guessState} />
      </div>
      {endGame && <EndState result={result} />}
    </div>
  );
};

export default Gameboard;
