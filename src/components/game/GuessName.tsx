import defaultMTGCard from "../../assets/Magic_card_back.png"

const GuessName = () => {
  return <div className="h-40 border-b border-white inline-flex px-3 items-center">
    <img src={defaultMTGCard} className="h-[90%]"></img>
  </div>;
};

export default GuessName;
