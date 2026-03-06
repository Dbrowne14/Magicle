import GameInput from "./GameInput"
import GameOutput from "./GameOutput"

const Gameboard = () => {
  return (
    <div className='h-full flex flex-col gap-8 justify-center items-center'>
      <h1 className="text-white">Header</h1>
        <div className='flex flex-col h-120 w-90 border border-white'>
            <GameInput/>
            <GameOutput/>
        </div>
    </div>
  )
}

export default Gameboard
