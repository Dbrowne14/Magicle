import type { Card } from "../../data/dummyData";
import { todaysAnswer } from "../../data/dummyData";

type CardName = {
  cardKey: string;
  guess: Card;
};

const GuessName = ({ cardKey, guess }: CardName) => {
  const {Rarity, CardType, name} = guess

  return (
    <div
      key={cardKey}
      className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4"
    >
      <img src={guess.img} className="h-[90%]"></img>
      <div className="flex flex-col gap-6 justify-end pb-4 h-full ">
        <h2 className="h-fit text-wrap w-25 text-center">{name}</h2>
        <div className="inline-flex gap-2 text-black">
          <h2 className={`${Rarity === todaysAnswer.Rarity ? "bg-green-800" : "bg-gray-400"} px-2 rounded-2xl`}>{Rarity}</h2>
          <h2 className={`${CardType === todaysAnswer.CardType ? "bg-green-800" : "bg-gray-400"} px-2 rounded-2xl`}>{CardType}</h2>
        </div>
      </div>
    </div>
  );
};

export default GuessName;
