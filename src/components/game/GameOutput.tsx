import GuessInfoCard from "./GuessInfoCard";
import GuessName from "./GuessName";
import type { ReturnStructure } from "../../types/types";

type Output = {
  guessState: string[];
  allCards: ReturnStructure[] | null;
  todaysWord: ReturnStructure;
};

const GameOutput = ({ guessState, allCards, todaysWord }: Output) => {
  console.log("GuessState Output:", guessState);

  function typedEntries<T extends object>(obj: T) {
    return Object.entries(obj) as {
      [K in keyof T]: [K, T[K]];
    }[keyof T][];
  }

  return (
    <div className="flex flex-col gap-10 border border-white">
      {guessState.map((guess, key) => {
        if (!allCards) return;

        const guessData: ReturnStructure | undefined = allCards.filter(
          (card) => card.name === guess,
        );

        if (!guessData) return null;

        return (
          <div
            className="flex flex-1 flex-col h-full border border-white"
            key={key}
          >
            <GuessName key={guess} cardKey={guess} guess={guessData} answer={todaysWord} />

            <div className="flex-1 flex flex-wrap justify-center items-center">
              {typedEntries(guessData ?? {})
                .filter(
                  ([key]) =>
                    key !== "img" &&
                    key !== "name" &&
                    key !== "rarity" &&
                    key !== "type",
                )
                .map(([key, value]) => {
                  return (
                    <GuessInfoCard
                      key={key}
                      cardKey={key}
                      label={key}
                      value={value}
                      guess={guessData.name}
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
