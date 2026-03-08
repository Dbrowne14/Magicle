import GuessInfoCard from "./GuessInfoCard"
import GuessName from "./GuessName"
import { dummyData } from "../../data/dummyData"

const GameOutput = () => {

  return (
    <div className="flex flex-1 flex-col h-full">
        <GuessName/>
        <div className="flex-1 flex flex-wrap justify-center items-center">
            {Object.entries(dummyData).filter(([key,_])=> key!== "img").map(([key, value]) => {
                return (
                    <GuessInfoCard key={key} label={key} value={value}/>
                )
            })}
        </div>
    </div>
  )
}

export default GameOutput
