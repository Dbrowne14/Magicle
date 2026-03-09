import GuessInfoCard from "./GuessInfoCard";
import GuessName from "./GuessName";
import { cardsData } from "../../data/dummyData";

const GameOutput = ({guessState}: {guessState: string}) => {
  const guessData = guessState ? cardsData[guessState]: undefined;
  return (
    <div className="flex flex-1 flex-col h-full">
      <GuessName key={guessState} cardKey={guessState} name={guessState} img={guessData.img} />

      <div className="flex-1 flex flex-wrap justify-center items-center">
        {Object.entries(guessData)
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
