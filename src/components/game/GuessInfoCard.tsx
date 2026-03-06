type Input = {
  id: string;
  key: number;
};

const GameInfoCard = ({ id, key }: Input) => {
  return (
    <div id={id} key={key} className="border border-white h-[40%] w-22"></div>
  );
};

export default GameInfoCard;
