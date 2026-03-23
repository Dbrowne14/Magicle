import type { Card } from "../../data/dummyData";

type CardName = {
  cardKey: string;
  guess: Card;
};

const GuessName = ({ cardKey, guess }: CardName) => {
  return (
    <div
      key={cardKey}
      className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4"
    >
      <img src={guess.img} className="h-[90%]"></img>
      <div className="flex flex-col gap-2">
        <h2 className="h-fit text-wrap w-25">{guess?.name}</h2>
        <div className="inline-flex gap-2">
          <h2>{guess.Rarity}</h2>
          <h2>{guess.CardType}</h2>
        </div>
      </div>
    </div>
  );
};

export default GuessName;
