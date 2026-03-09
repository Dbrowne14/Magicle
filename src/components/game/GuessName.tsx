
type CardName = {
    cardKey: string;
    name: string;
    img: string;
}


const GuessName = ({ cardKey, name, img }: CardName) => {
  return <div key={cardKey} className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4">
    <img src={img} className="h-[90%]"></img>
    <h2 className="h-fit text-wrap w-25">{name}</h2>
  </div>;
};

export default GuessName;
