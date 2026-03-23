import { cardsData } from "../../data/dummyData";
import { useState, useEffect } from "react";

type GuessProps = {
  guessState: string[];
  setGuessState: React.Dispatch<React.SetStateAction<string[]>>;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>
};

const GameInput = ({ guessState, setGuessState, round, setRound }: GuessProps) => {
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
    setGuessState((prev)=> [...prev, guess]);
    setRound((prev) => prev + 1);
      console.log('GuessState Input:',guessState)
    setRoundGuess("");
  }

  return (
    <div className="h-12 border-b border-b-white text-white relative">
      <div
        className="inline-flex"
      >
        <input
          type="text"
          value={roundGuess}
          placeholder="Search..."
          onChange={(e) => {
            e.preventDefault;
            setRoundGuess(e.target.value);
          }}
          className="width-[100%]"
        />

        {suggestions.length > 0 && (
          <ul className="absolute m-0 p-0 bg-white text-black max-h-20 overflow-y-auto">
            {suggestions.map((item, id) => (
              <li key={id} className="p-2 text-[1rem]" onClick={() => handleGuess(item)}>
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

/* 

hel[ful code to workd this out - for dummy data only need two states 

import React, { useState, useEffect } from "react";

export default function AutoComplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div style={{ width: "300px", position: "relative" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          boxSizing: "border-box"
        }}
      />

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            borderTop: "none",
            position: "absolute",
            width: "100%",
            background: "white",
            maxHeight: "200px",
            overflowY: "auto"
          }}
        >
          {suggestions.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "8px",
                cursor: "pointer"
              }}
              onClick={() => {
                setQuery(item.name);
                setSuggestions([]);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} */
