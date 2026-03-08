import GuessInfoCard from "./GuessInfoCard";
import GuessName from "./GuessName";
import { cardsData } from "../../data/dummyData";

const GameOutput = () => {
  const guess = "Last March of the Ents";
  const guessData = cardsData[guess];
  return (
    <div className="flex flex-1 flex-col h-full">
      <GuessName key={guess} cardKey={guess} name={guess} img={guessData.img} />

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
