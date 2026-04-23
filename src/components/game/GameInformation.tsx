import React from "react";

export const GameInformation = ({round, setClueState}: {round: number, setClueState: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const handleClick = () => {
  setClueState(prev=> !prev)
  }
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="w-full">Guess {round + 1} of 10</h2>
{round > 6 && (
  <div
    className={`flex justify-end w-full pb-1 ${
      round > 6 ? "animate-pulse" : ""
    }`}
  >
    <button
      onClick={handleClick}
      className="
        text-blue-300 
        text-[0.8rem]
        bg-blue-500/10 
        border border-blue-400/30 
        rounded-lg 
        hover:bg-blue-500/20 
        transition-all 
        duration-200
      "
    >
      Use your clue token
    </button>
  </div>
)}
    </div>
  );
};

