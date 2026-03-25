import { todaysAnswer } from "../../data/dummyData";
import type { Card } from "../../data/dummyData";

type CardKey = keyof Card;
type value = string | number;

export type Input = {
  cardKey: CardKey;
  value: value;
  label: string;
};

const variableOrange = {
  CMC: 2,
  Year: 5,
  Price: 5,
} as const;

type VariableOrange = keyof typeof variableOrange;

type validInCard = Extract<VariableOrange, keyof Card>;

const GameInfoCard = ({ cardKey, value, label }: Input) => {
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
    if (value === todaysAnswer[cardKey]) return "bg-green-800";

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



  return (
    <div key={cardKey} className={`border border-white h-[40%] w-25 text-center ${getColorByCard(cardKey, value, todaysAnswer[cardKey])} text-black rounded-2xl`}>
      <div className="h-[50%] font-bold">{label}</div>
      <div
        className="`h-[50%} "
      >
        {value}
      </div>
    </div>
  );
};

export default GameInfoCard;
