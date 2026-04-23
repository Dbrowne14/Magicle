import React from "react";

const clueDisabled = (round: number) => {
  return (
    <div className="flex flex-row h-full justify-center items-center gap-0.5">
      <div className="h-fit">
        Clue token in{" "}
        <span className="text-gray-500 italic pl-0.5">{7 - round}</span>
      </div>
      <img src="/icons/locksymbol.svg" alt="lock" className="h-full p-1" />
    </div>
  );
};

const clueRevealed = () => {
  <span>Use your clue token</span>
}

export const GameInformation = ({
  round,
  setClueState,
}: {
  round: number;
  setClueState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const revealRound = round < 7;
  const handleClick = () => {
    setClueState((prev) => !prev);
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="w-full">Guess {round + 1} of 10</h2>

      <div
        className={`flex justify-end w-full pb-1 ${
          !revealRound ? "animate-pulse" : ""
        }`}
      >
        <button
          onClick={handleClick}
          disabled={revealRound}
          className="
        text-blue-300 
        text-[0.8rem]
        bg-blue-500/10 
        border border-blue-400/30 
        rounded-lg 
        hover:bg-blue-500/20 
        transition-all 
        duration-200
        h-10
        w-40
        "
        >
          {revealRound ? clueDisabled(round) : clueRevealed}
        </button>
      </div>
    </div>
  );
};
