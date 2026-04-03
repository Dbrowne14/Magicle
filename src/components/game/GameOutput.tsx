import GuessInfoCard from "./gameCard/GuessInfoCard";
import GuessName from "./gameCard/BaseInfoCard";
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
            <GuessName
              key={guess}
              cardKey={guess}
              guess={guessData[0]}
              answer={todaysWord}
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
                .map(([key, value]) => {
                  return (
                    <GuessInfoCard
                      key={key}
                      cardKey={key}
                      label={key}
                      value={value}
                      answer={todaysWord}
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
/*Hello I am a developer who is very interested in your volunteer posting. I have had experience building websites (at some level) since I was in my early teens, but as many do after university worked in finance for 8 or so years to earn a comfortable income in London, before in truth becoming disillusioned with the industry last year and focusing full time in software engineering.  I also have an eye for design and design principles both generally and in life - this is something I take a keen interest in, but also as I continue in my journey expanding my software capabilities.  I am also passionate about volunteering, I worked for the RSPCA for over a year while recovering from a serious operation and volunteer on a need case basis at UCLH, speaking to aftercare patients who went through similar traumatic ENT operations.
 */
