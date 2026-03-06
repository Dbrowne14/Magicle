import GameInfoCard from "./GameInfoCard"

const GameOutput = () => {
   const n = new Array(8).fill(1)
  return (
    <div className="flex flex-1 flex-col h-full">
        <div className="h-40 border-b border-white"></div>
        <div className="flex-1 flex flex-wrap justify-center items-center">
            {n.map((input, key) => {
                return (
                    <GameInfoCard id={input} key={key}/>
                )
            })}
        </div>
    </div>
  )
}

export default GameOutput
