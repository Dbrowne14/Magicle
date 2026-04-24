import { useEffect, type SetStateAction } from "react";
import dice from "../../../assets/dice.svg";


export const LoaderState = ({loadingState, setLoadingState}:{loadingState:boolean, setLoadingState: React.Dispatch<SetStateAction<boolean>> }) => {

 useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState(false);
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, [])

  return (
    <div className={`fixed bg-[#1a1a1a] z-10 w-full h-screen transition-opacity duration-500 ease-in-out
  ${loadingState ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="loader absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={dice}
          className=" relative z-20 top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20"
        />
      </div>
    </div>
  );
};
