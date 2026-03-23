import type { Card } from "../../data/dummyData";

type CardName = {
  cardKey: string;
  name: string;
  guess: Card;
};

const GuessName = ({ cardKey, name, guess }: CardName) => {
  return (
    <div
      key={cardKey}
      className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4"
    >
      <img src={guess.img} className="h-[90%]"></img>
      <h2 className="h-fit text-wrap w-25">{name}</h2>
    </div>
  );
};

export default GuessName;
