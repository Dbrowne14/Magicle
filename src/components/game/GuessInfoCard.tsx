
export type Input = {
  cardKey: string
  value: string | number;
  label: string
};

const GameInfoCard = ({ cardKey, value, label }: Input) => {

  return (
    <div key={cardKey} className="border border-white h-[40%] w-22 text-center">
      <div className='h-[50%] border-b border-b-white'>{label}</div>
      <div className='h-[50%] border-b border-b-white'>{value}</div>
    </div>
  );
};

export default GameInfoCard;
