import GameInput from "./GameInput"
import GameOutput from "./GameOutput"
import { useState } from "react"



const Gameboard = () => {
  const [guessState,setGuessState] = useState<string[]>([]);
  const [round, setRound] = useState<number>(0);
  return (
    <div className='h-full flex flex-col gap-8 justify-center items-center'>
      <h1 className="text-white">Magicle</h1>
        <div className='flex flex-col h-120 w-90 border border-white'>
            <GameInput setGuessState={setGuessState} guessState={guessState} round={round} setRound = {setRound}/>
            <GameOutput guessState={guessState} round={round}/>
        </div>
    </div>
  )
}

export default Gameboard
