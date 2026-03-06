import defaultMTGCard from "../../assets/Magic_card_back.png"

const GuessName = () => {
  return <div className="h-40 border-b border-white inline-flex px-3 items-center justify-center gap-4">
    <img src={defaultMTGCard} className="h-[90%]"></img>
    <h2 className="h-fit text-wrap w-25">Default Card Name XXXX</h2>
  </div>;
};

export default GuessName;
