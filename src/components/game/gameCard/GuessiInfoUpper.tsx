import type { ReturnStructure } from "../../../types/types";
import { capitalizeFirst } from "../../../utilities/utilityFns";
import { useState, useEffect } from "react";

type CardName = {
  cardKey: string;
  guess: ReturnStructure;
  answer: ReturnStructure | null;
  isLatest: boolean;
};

const handleType = (type: string[]) => {
  const capitalisedTypes = type.map((type) => capitalizeFirst(type));
  return capitalisedTypes.join(" ");
};

export const GuessInfoUpper = ({
  cardKey,
  guess,
  answer,
  isLatest,
}: CardName) => {
  const [flipBuckets, setFlipBuckets] = useState<string[]>([]);
  const { rarity, type, name, islegendary } = guess;
  if (!answer) return null;
  const isSame = (a: string[], b: string[]) => {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  };
  const hasMatch = type.some((t) => answer.type.includes(t));
  const typeClass = isSame(type, answer.type)
    ? "bg-highlightGreen"
    : hasMatch
      ? "bg-highlightYellow"
      : "bg-highlightGrey";

  const rarityClass =
    rarity === answer.rarity ? "bg-highlightGreen" : "bg-highlightGrey";
  const legendaryClass =
    islegendary === answer.islegendary
      ? "bg-highlightGreen"
      : "bg-highlightGrey";

  useEffect(() => {
    if (!isLatest) return;

    const bucketsToFlip: string[] = [];

    if (rarity === answer.rarity) bucketsToFlip.push("rarity");
    if (islegendary === answer.islegendary) bucketsToFlip.push("legendary");
    if (typeClass !== "bg-highlightGrey") bucketsToFlip.push("type");

    setFlipBuckets(bucketsToFlip);

    // Remove flip class after animation duration (1s)
    const timer = setTimeout(() => setFlipBuckets([]), 1000);
    return () => clearTimeout(timer);
  }, [isLatest, rarity, islegendary, typeClass]);
  return (
    <div
      key={cardKey}
      className="h-40 inline-flex items-center justify-center gap-6 pb-1"
    >
      <img src={guess.img} className="h-full"></img>
      <div className="flex flex-col gap-6 justify-end pb-4 h-full">
        <h2 className="h-fit w-full font-bold text-headerOrange">{name}</h2>
        <div className="inline-flex flex-wrap gap-2 text-black">
          <h2
            className={`${rarityClass} ${flipBuckets.includes("rarity") ? "flip-once" : ""} px-2 rounded-2xl`}
          >
            {capitalizeFirst(rarity)}
          </h2>
          <h2
            className={`${legendaryClass} ${flipBuckets.includes("legendary") ? "flip-once" : ""} px-2 rounded-2xl`}
          >
            {islegendary ? "Legendary" : "Non-legendary"}
          </h2>
          <h2
            className={`${typeClass} ${flipBuckets.includes("type") ? "flip-once" : ""} px-2 rounded-2xl`}
          >
            {handleType(type)}
          </h2>
        </div>
      </div>
    </div>
  );
};
