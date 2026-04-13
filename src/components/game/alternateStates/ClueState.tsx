import clueHeading from "../../../assets/clue/clueHeading.png";
import clueText from "../../../assets/clue/clueText.png";
import closeBox from "../../../assets/clue/close.svg";
import type { ReturnStructure } from "../../../types/types";

interface ClueStateProps {
  setClueState: React.Dispatch<React.SetStateAction<boolean>>;
  todaysWord: ReturnStructure | null;
  clueState: boolean;
}

export const ClueState = ({ setClueState, todaysWord, clueState }: ClueStateProps) => {
  return (
    <div
      className={`fixed  flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[rgba(1,1,1,0.95)] w-80 h-100 rounded-2xl items-center justify-center gap-1 py-2 ${clueState ? "flex" : "hidden"}`}
    >
      <div className="relative w-full">
        <img src={clueHeading} className="w-full" />{" "}
        <img
          src={closeBox}
          className="absolute w-8  top-1/2 -translate-y-1/2 right-0 bg-gray-300 rounded-2xl"
          onClick={() => setClueState(false)}
        />
      </div>
      <div className="h-[50%] px-3 overflow-hidden flex flex-col">
        <h2 className="text-sm mb-1 shrink-0">Oracle Text</h2>

        <p className="text-[0.8rem] leading-tight overflow-hidden">
          {todaysWord?.oracle_text}
        </p>
      </div>
      <img src={clueText} className="w-full" />
    </div>
  );
};
