import { useGameContext } from "../../context/GameContext";
import {GuessInfoLower} from "./gameCard/GuessInfoLower";
import { GuessInfoUpper } from "./gameCard/GuessiInfoUpper";
import type { ReturnStructure } from "../../types/types";



const GameOutput = () => {
  const {guess, allCards} = useGameContext()
  console.log("GuessState Output:", guess);

  function typedEntries<T extends object>(obj: T) {
    return Object.entries(obj) as {
      [K in keyof T]: [K, T[K]];
    }[keyof T][];
  }

  return (
    <div className="flex flex-col gap-10">
      {guess.map((guess, key) => {
        if (!allCards) return;

        const guessData: ReturnStructure[] | undefined = allCards.filter(
          (card) => card.name === guess,
        );

        if (!guessData) return null;
        
        const guessStructure = guessData[0]
        const {cmc, year, icon_svg_uri, price, pips, edhrec_rank, name, set_name, islegendary, type, img, oracle_text, rarity, colors } =  guessStructure

        const structuredObject = {
          cmc,
          year,
          price,
          pips,
          icon_svg_uri, 
          edhrec_rank,
          name,
          set_name,
          islegendary,
          type,
          img,
          oracle_text,
          rarity,
          colors
        }

        return (
          <div
            className="flex flex-1 flex-col h-full "
            key={key}
          >
            <GuessInfoUpper
              key={guess}
              cardKey={guess}
              guess={guessStructure}
              isLatest={key === 0}
            />

            <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 w-full h-full auto-rows-fr justify-center items-center">
              {typedEntries(structuredObject ?? {})
                .filter(
                  ([key]) =>
                    key === "cmc" ||
                    key === "year" ||
                    key === "icon_svg_uri" ||
                    key === "price" ||
                    key === "pips" ||
                    key === "edhrec_rank",
                )
                .map(([cardKey, value], guessIndex) => {
                  return (
                    <GuessInfoLower
                      key={`${cardKey} - ${guessIndex} -${guess}`}
                      cardKey={cardKey}
                      label={cardKey}
                      value={value}
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
