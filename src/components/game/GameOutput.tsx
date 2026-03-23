import GuessInfoCard from "./GuessInfoCard";
import GuessName from "./GuessName";
import { cardsData } from "../../data/dummyData";
import type { Card } from "../../data/dummyData";

type Output = {
  guessState: string[];
  round: number;
};

const GameOutput = ({ guessState }: Output) => {
  console.log("GuessState Ourput:", guessState);
  return (
    <div className="flex flex-col gap-10">
      {guessState.map((guess, key) => {
        const guessData: Card | undefined = cardsData[guess];

        if (!guessData) return null;

        return (
          <div className="flex flex-1 flex-col h-full" key={key}>
            <GuessName
              key={guess}
              cardKey={guess}
              name={guess}
              guess={guessData}
            />

            <div className="flex-1 flex flex-wrap justify-center items-center">
              {Object.entries(guessData ?? {})
                .filter(
                  ([key, _]) =>
                    key !== "img" &&
                    key !== "name" &&
                    key !== "Rarity" &&
                    key !== "CardType",
                )
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
      })}
    </div>
  );
};

export default GameOutput;
