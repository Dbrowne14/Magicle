
import type { Card } from "../../data/dummyData";
import type { ReturnStructure } from "../../types/types";

type CardKey = keyof ReturnStructure;
type value = string | number;

export type Input = {
  cardKey: CardKey;
  value: value;
  label: string;
};

const variableOrange = {
  CMC: 2,
  Year: 3,
  Price: 5,
} as const;

type VariableOrange = keyof typeof variableOrange;

type validInCard = Extract<VariableOrange, keyof ReturnStructure>;

const GameInfoCard = ({ cardKey, value, label }: Input) => {
  const lookUpKey = todaysAnswer[cardKey];
  function checkforKeyName(key: keyof Card): key is validInCard {
    if (cardKey in variableOrange) {
      return true;
    }
    return false;
  }

  function getColorByCard(
    cardKey: CardKey,
    value: value,
    answer: string | number,
  ) {
    if (value === lookUpKey) return "bg-green-800";

    if (checkforKeyName(cardKey)) {
      const boundary = variableOrange[cardKey];
      if (
        typeof value === "number" &&
        typeof answer === "number" &&
        Math.abs(value - answer) <= boundary
      ) {
        return "bg-yellow-300";
      }
    }

    return "bg-gray-400";
  }

  function higherOrLower(value: value, answer: string | number) {
    return typeof value === "number" &&
      typeof answer === "number" &&
      value > answer
      ? "Lower"
      : "Higher";
  }

  return (
    <div
      key={cardKey}
      className={`flex flex-col border border-white h-[40%] w-25 text-center ${getColorByCard(cardKey, value, lookUpKey)} text-black rounded-2xl`}
    >
      <div className="h-[50%] ">{label}</div>
      <div className="flex flex-row justify-center gap-0.5 font-bold">
        <div className="h-[50%}">{value}</div>
        {checkforKeyName(cardKey) && value !== lookUpKey && (
          <div className="font-normal">
            {higherOrLower(value, lookUpKey) === "Lower" ? "v" : "^"}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameInfoCard;
