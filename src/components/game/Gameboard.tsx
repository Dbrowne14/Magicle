import GameInput from "./GameInput"

const Gameboard = () => {
  return (
    <div className='h-full flex justify-center items-center'>
        <div className='h-160 w-260 border border-white'>
            <GameInput/>
        </div>
    </div>
  )
}

export default Gameboard
