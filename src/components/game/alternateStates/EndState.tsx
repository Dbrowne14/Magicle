import { useGameContext } from "../../../context/GameContext";



const EndState = () => {
  const{result, todaysWord} = useGameContext()
  return (
    <div className="fixed flex flex-col overlay bg-[rgba(1,1,1,0.95)] w-80 h-100 rounded-2xl  items-center justify-center gap-4 p-4">
      <h2>You {result}</h2>

      <img src={todaysWord?.img} className="w-40" />
      <h2 className="w-fit text-center">Today's card is: <br></br><span className="font-bold text-headerOrange">{todaysWord?.name}</span></h2>
      <h2 className="bg-white py-1 px-2 rounded-2xl text-black">Edhrec Rank: <span className="font-semibold">#{todaysWord?.edhrec_rank}</span></h2>
    </div>
  );
};

export default EndState;
