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

export const GuessInfoLower = ({ cardKey, value, label, answer, isLatest }: Input) => {
  const lookUpKey = answer[cardKey];
  const [flip, setFlip] = useState(false);

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

  const colorClass = getColorByCard(cardKey, value, lookUpKey);

  // Only trigger flip on the latest guess OR when key changes (new guess)
  useEffect(() => {
    if (isLatest && colorClass !== "bg-highlightGrey") {
      setFlip(true);

      // reset flip after animation duration (1s)
      const timer = setTimeout(() => setFlip(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [cardKey, value, lookUpKey, isLatest]); // key things that change per guess


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
      className={`flex flex-col border border-white h-[40%] w-25 text-center ${getColorByCard(label, value, lookUpKey)} ${flip ? "flip-once" : ""} text-black rounded-2xl backface-hidden`}
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

