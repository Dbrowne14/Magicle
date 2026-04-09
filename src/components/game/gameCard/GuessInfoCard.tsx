import type { ReturnStructure } from "../../../types/types";
import { CardValue } from "./CardValue";
import type { Value, Input } from "../../../types/types";
import { renameLabel, isSame, isSimilar } from "../../../utilities/utilityFns";
import { useState, useEffect } from "react";

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
  const [isActive, setIsActive] = useState(false);

  /*----handling color changes ----*/
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
        return "bg-highlightGreen";
      }
      if (
        Array.isArray(value) &&
        Array.isArray(lookUpKey) &&
        isSimilar(value, lookUpKey)
      ) {
        return "bg-highlightYellow";
      }
      return "bg-highlightGrey";
    }

    if (value === lookUpKey) {
      return "bg-highlightGreen";
    }

    if (checkforKeyName(cardKey)) {
      const boundary = variableOrange[cardKey];
      if (
        typeof value === "number" &&
        typeof answer === "number" &&
        Math.abs(value - answer) <= boundary
      ) {
        return "bg-highlightYellow";
      }
    }
    return "bg-highlightGrey";
  }

  useEffect(() => {
    const active =
      getColorByCard(cardKey, value, lookUpKey) !== "bg-highlightGrey";

    if (active) {
      setIsActive(false);
      setTimeout(() => setIsActive(true), 1000);
    } else {
      setIsActive(false);
    }
  }, [cardKey, value, lookUpKey]);

  /*----handling arrow changes ----*/
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
      className={`flex flex-col border border-white h-[40%] w-25 text-center ${getColorByCard(label, value, lookUpKey)} ${isActive ? "flip-once" : ""} text-black rounded-2xl backface-hidden`}
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
