import type { ReturnStructure } from "../../../types/types";
import { CardValue } from "./CardValue";
import type { Value, Input } from "../../../types/types";

const renameLabel = (label: string) => {
  const labelCap = label.charAt(0).toUpperCase() + label.slice(1, label.length);
  if (label === "set_code") return "Set";
  else if (label === "edhrec_rank") return "Rank";
  else return labelCap;
};

const isSame = (a: string[], b: string[]) => {
  return a.length === b.length && a.every((valx, valy) => valx === b[valy]);
};

const isSimilar = (a: string[], b: string[]) => {
  return a.some((pip) => b.includes(pip));
};

const variableOrange = {
  cmc: 2,
  year: 3,
  price: 5,
  edhrec_rank: 50,
} as const;

type VariableOrange = keyof typeof variableOrange;

type validInCard = Extract<VariableOrange, keyof ReturnStructure>;

const GameInfoCard = ({ cardKey, value, label, answer }: Input) => {
  const lookUpKey = answer[cardKey];

  function checkforKeyName(key: string): key is validInCard {
    if (cardKey in variableOrange) {
      return true;
    }
    return false;
  }

  function getColorByCard(cardKey: string, value: Value, answer: Value) {
    if (cardKey === "pips") {
      if (
        Array.isArray(value) &&
        Array.isArray(lookUpKey) &&
        isSame(value, lookUpKey)
      ) {
        return "bg-green-800";
      }
      if (
        Array.isArray(value) &&
        Array.isArray(lookUpKey) &&
        isSimilar(value, lookUpKey)
      ) {
        return "bg-yellow-300";
      }
      return "bg-gray-400";
    }
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

  function higherOrLower(value: Value, answer: Value) {
    return typeof value === "number" &&
      typeof answer === "number" &&
      value > answer
      ? "Lower"
      : "Higher";
  }

  return (
    <div
      key={cardKey}
      className={`flex flex-col border border-white h-[40%] w-25 text-center ${getColorByCard(label, value, lookUpKey)} text-black rounded-2xl`}
    >
      <div className="h-[50%] ">{renameLabel(label)}</div>
      <div className="flex flex-row justify-center gap-0.5 font-bold h-[50%]">
        <CardValue label={label} value={value} />
        {checkforKeyName(label) && value !== lookUpKey && (
          <div className="font-normal">
            {higherOrLower(value, lookUpKey) === "Lower" ? "v" : "^"}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameInfoCard;
