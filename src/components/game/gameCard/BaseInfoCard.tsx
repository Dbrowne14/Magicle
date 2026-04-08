import type { ReturnStructure } from "../../../types/types";
import { capitalizeFirst } from "../../../utilities/utilityFns";

type CardName = {
  cardKey: string;
  guess: ReturnStructure;
  answer: ReturnStructure;
};

const handleType = (type: string[]) => {
  const capitalisedTypes = type.map((type) => capitalizeFirst(type));
  return capitalisedTypes.join(" ");
};

const GuessName = ({ cardKey, guess, answer }: CardName) => {
  const { rarity, type, name, islegendary } = guess;
  const hasMatch = type.some((t) => answer.type.includes(t));
  console.log("answer", answer);
  console.log("guess", guess);
  return (
    <div
      key={cardKey}
      className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4"
    >
      <img src={guess.img} className="h-[90%]"></img>
      <div className="flex flex-col gap-6 justify-end pb-4 h-full">
        <h2 className="h-fit w-full">{name}</h2>
        <div className="inline-flex flex-wrap gap-2 text-black">
          <h2
            className={`${rarity === answer.rarity ? "bg-green-800" : "bg-gray-400"} px-2 rounded-2xl`}
          >
            {capitalizeFirst(rarity)}
          </h2>
          <h2
            className={`${islegendary === answer.islegendary ? "bg-green-800" : "bg-gray-400"} px-2 rounded-2xl`}
          >
            {islegendary ? "Legendary": "Non-legendary"}
          </h2>
          <h2
            className={`${hasMatch ? "bg-green-800" : "bg-gray-400"} px-2 rounded-2xl`}
          >
            {handleType(type)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GuessName;

/*
 */
