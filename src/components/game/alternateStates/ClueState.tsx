import clueHeading from "/clue/clueHeading.png";
import clueText from "/clue/clueText.png";
import closeBox from "/clue/close.svg";
import { useGameContext } from "../../../context/GameContext";



export const ClueState = () => {
  const {todaysWord, round, clueState, setClueState } = useGameContext()
  return (
    <div
      className={`fixed flex-col overlay bg-[rgba(1,1,1,1)] hover:cursor-pointer gameWidth h-110 rounded-2xl items-center justify-center gap-1 py-2 ${clueState && round !== 10 ? "flex" : "hidden"}`}
    >
      <div className="relative w-full ">
        <img src={clueHeading} className="w-full" />{" "}
        <img
          src={closeBox}
          className="absolute w-8 hover:scale-110 top-1/2 -translate-y-1/2 right-0 bg-gray-300 rounded-2xl"
          onClick={() => setClueState(false)}
        />
      </div>
      <div className="h-[50%] px-3 overflow-hidden flex flex-col ">
        <h2 className="text-sm  mb-1 shrink-0">Oracle Text</h2>

        <p className="text-[0.9rem] leading-tight overflow-hidden">
          {todaysWord?.oracle_text}
        </p>
      </div>
      <img src={clueText} className="w-full" />
    </div>
  );
};
