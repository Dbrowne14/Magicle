import { useState, useEffect } from "react";
import { useGameContext } from "../../context/GameContext";

;

const GameInput = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [roundGuess, setRoundGuess] = useState<string>("");
  const {allCards, guess, setGuess, endGame, setRound} = useGameContext();

  useEffect(() => {
    if (!roundGuess) {
      setSuggestions([]);
      return;
    }

    if (!allCards) return;
    const data = allCards.map((card) => card.name);

    const dataNewSuggestions = data.filter(
      (item) => !guess.includes(item),
    );
    console.log("filtereddata", dataNewSuggestions);

    const filtered = dataNewSuggestions.filter((item) => {
      return item.toLowerCase().includes(roundGuess.toLowerCase());
    });

    setSuggestions(filtered.slice(0, 10));
  }, [roundGuess]);

  const handleGuess = (guess: string) => {
    setGuess((prev) => [guess, ...prev]);
    setRound((prev) => prev + 1);
    console.log("GuessState Input:", guess);
    setRoundGuess("");
  };

  return (
    <div className="h-10 text-white inline-flex mb-6">
      <div className="inline-flex relative w-full">
        <input
          type="text"
          name="SearchBar"
          value={roundGuess}
          disabled={endGame}
          placeholder="Type a guess here..."
          onChange={(e) => {
            e.preventDefault;
            setRoundGuess(e.target.value);
          }}
          className="w-full rounded-2xl border border-white pl-2"
        />

        {suggestions.length > 0 && (
          <ul className="absolute m-0 p-0 top-full bg-white text-black max-h-60 overflow-y-auto w-full">
            {suggestions.map((item, id) => (
              <li
                key={id}
                className="p-2 text-[1rem]"
                onClick={() => handleGuess(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
 
    </div>
  );
};

export default GameInput;
