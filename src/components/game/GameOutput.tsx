import {GuessInfoLower} from "./gameCard/GuessInfoLower";
import { GuessInfoUpper } from "./gameCard/GuessiInfoUpper";
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

        const guessData: ReturnStructure[] | undefined = allCards.filter(
          (card) => card.name === guess,
        );

        if (!guessData) return null;

        console.log(guessData);

        return (
          <div
            className="flex flex-1 flex-col h-full border border-white"
            key={key}
          >
            <GuessInfoUpper
              key={guess}
              cardKey={guess}
              guess={guessData[0]}
              answer={todaysWord}
              isLatest={key === 0}
            />

            <div className="flex-1 flex flex-wrap justify-center items-center">
              {typedEntries(guessData[0] ?? {})
                .filter(
                  ([key]) =>
                    key === "cmc" ||
                    key === "year" ||
                    key === "set_code" ||
                    key === "price" ||
                    key === "pips" ||
                    key === "edhrec_rank",
                )
                .map(([cardKey, value], guessIndex) => {
                  return (
                    <GuessInfoLower
                      key={`${cardKey} - ${guessIndex}`}
                      cardKey={cardKey}
                      label={cardKey}
                      value={value}
                      answer={todaysWord}
                      isLatest={key === 0}
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
