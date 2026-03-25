import { todaysAnswer } from "../../data/dummyData"; 
import type { Card } from "../../data/dummyData";

export type Input = {
  cardKey: keyof Card
  value: string | number;
  label: string
};

const GameInfoCard = ({ cardKey, value, label }: Input) => {

  return (
    <div key={cardKey} className="border border-white h-[40%] w-25 text-center">
      <div className='h-[50%] border-b border-b-white'>{label}</div>
      <div className= {`h-[50%] border-b border-b-white ${value === todaysAnswer[cardKey]? 'bg-green-800' : 'bg-none'}`}>{value}</div>
    </div>
  );
};

export default GameInfoCard;
