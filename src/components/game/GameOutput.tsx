import GuessInfoCard from "./GuessInfoCard";
import GuessName from "./GuessName";
import { cardsData } from "../../data/dummyData";
import defaultMtgCard from "../../assets/Magic_card_back.png"

type CardKey = keyof typeof cardsData;

type Output = {
  guessState: string[];
  round:number
};

const GameOutput = ({guessState, round}: Output) => {
  const currentGuess = guessState[round];
  const guessData = (currentGuess as CardKey) ? cardsData[currentGuess as CardKey]: undefined;
  return (
    <div className="flex flex-1 flex-col h-full">
      <GuessName key={currentGuess} cardKey={currentGuess} name={currentGuess} img={guessData?.img || defaultMtgCard } />

      <div className="flex-1 flex flex-wrap justify-center items-center">
        {Object.entries(guessData ?? {})
          .filter(([key, _]) => key !== "img" && key !== "name")
          .map(([key, value]) => {
            return (
              <GuessInfoCard
                key={key}
                cardKey={key}
                label={key}
                value={value}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GameOutput;
   