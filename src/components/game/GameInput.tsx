import { cardsData } from "../../data/dummyData";
import { useState, useEffect } from "react";

type GuessProps = {
  guessState: string[];
  setGuessState: React.Dispatch<React.SetStateAction<string[]>>;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>
  endGame : boolean;
};

const GameInput = ({ guessState, setGuessState, round, setRound, endGame }: GuessProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [roundGuess, setRoundGuess] = useState<string>("");
  const data = Object.keys(cardsData);

  useEffect(() => {
    if (!roundGuess) {
      setSuggestions([]);
      return;
    }

   const dataNewSuggestions = data.filter(item => !guessState.includes(item))
   console.log('filtereddata',dataNewSuggestions)

    const filtered = dataNewSuggestions.filter((item) => {
      return item.toLowerCase().includes(roundGuess.toLowerCase());
    });

    setSuggestions(filtered.slice(0, 10));
  }, [roundGuess, data]);

  const handleGuess = (guess: string) => {
    setGuessState((prev)=> [guess, ...prev]);
    setRound((prev) => prev + 1);
      console.log('GuessState Input:',guessState)
    setRoundGuess("");
  }

  return (
    <div className="h-12 border-b border-b-white text-white inline-flex ">
      <div
        className="inline-flex relative w-[60%]"
      >
        <input
          type="text"
          name="SearchBar"
          value={roundGuess}
          disabled={endGame}
          placeholder="Search..."
          onChange={(e) => {
            e.preventDefault;
            setRoundGuess(e.target.value);
          }}
          className="w-full"
        />

        {suggestions.length > 0 && (
          <ul className="absolute m-0 p-0 bg-white text-black max-h-20 overflow-y-auto w-full">
            {suggestions.map((item, id) => (
              <li key={id} className="p-2 text-[1rem]" onClick={() => handleGuess(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center">
        <h2 className="text-center">Guess {round + 1} of 10</h2>
      </div>
    </div>
  );
};

export default GameInput;
