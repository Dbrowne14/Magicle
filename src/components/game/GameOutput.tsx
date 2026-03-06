import GuessInfoCard from "./GuessInfoCard"
import GuessName from "./GuessName"

const GameOutput = () => {
   const n = new Array(8).fill(1)
  return (
    <div className="flex flex-1 flex-col h-full">
        <GuessName/>
        <div className="flex-1 flex flex-wrap justify-center items-center">
            {n.map((input, key) => {
                return (
                    <GuessInfoCard id={input} key={key}/>
                )
            })}
        </div>
    </div>
  )
}

export default GameOutput
