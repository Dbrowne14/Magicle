import React from "react";

const ClueDisabled = ({ round }: { round: number }) => {
  return (
    <div className="flex flex-row h-full justify-end items-center">
      <div className="h-fit">
        Clue token in{" "}
        <span className="text-gray-500 italic font-bold pl-0.5">{7 - round}</span>
      </div>
      <img src="/icons/locksymbol.svg" alt="lock" className="h-full py-1.5 pl-3 pr-1" />
    </div>
  );
};

const ClueRevealed = () => {
  return <span>Use your clue token</span>;
};

export const GameInformation = ({
  round,
  setClueState,
}: {
  round: number;
  setClueState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const revealRound = round > 6;
  const handleClick = () => {
    setClueState((prev) => !prev);
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="w-full">Guess {round + 1} of 10</h2>

      <div
        className="flex justify-end w-full pb-1"
      >
        <button
          onClick={handleClick}
          disabled={!revealRound}
          className={`
          ${revealRound ? " text-blue-300 border-blue-400/30  bg-blue-500/10 animate-pulse hover:bg-blue-500/20 transition-all duration-200 border" : "hover:cursor-auto text-gray-500 bg-[#3c3b3b3d] tracking-wide blur-[0.3px]"}
          text-[0.8rem]
          rounded-lg 
          h-9
          w-40
          p-1`}
        >
          {revealRound ? <ClueRevealed /> : <ClueDisabled round={round} />}
        </button>
      </div>
    </div>
  );
};
