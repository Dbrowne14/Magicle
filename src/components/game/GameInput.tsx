import Select from "react-select"

type GuessProps = {
  setGuessState: React.Dispatch<React.SetStateAction<string>>;
};

const GameInput = ({ setGuessState }:GuessProps) => {
  return (
    <div className="h-12 border-b border-b-white text-white">
      <form onSubmit={((e)=> {e.preventDefault; setGuessState(e.target.value)})} className="inline-flex">
        <Select placeholder="Search..." options={}/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default GameInput;
