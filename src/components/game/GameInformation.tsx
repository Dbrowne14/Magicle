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
          className={`flex justify-end w-full hover:cursor-pointer ${round === 7 ? "animate-pulse" : "animate-none"}`}
        >
          <h2 className="pr-2 text-white" onClick={handleClick}>
            Use your clue token?
          </h2>
        </div>
      )}
    </div>
  );
};

