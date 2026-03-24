import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import { cardsData } from "../../data/dummyData";

const todaysAnswer = Object.keys(cardsData)[0];
const roundLimit = 10

const Gameboard = () => {
  const [guessState, setGuessState] = useState<string[]>([]);
  const [endGame, setEndgame] = useState(false);
  const [round, setRound] = useState<number>(0);

  useEffect(() => {
    if (round >= roundLimit) {
      setEndgame(true);
      console.log("Lose conditon");
      console.log(endGame);
    }
    if (guessState.includes(todaysAnswer)) {
      console.log("Win conditon");
      setEndgame(true);
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
          endGame ={endGame}
        />
        <GameOutput guessState={guessState} round={round} />
      </div>
    </div>
  );
};

export default Gameboard;

//<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[rgba(1,1,1,0.8)] w-80 h-80 rounded-2xl"></div>
