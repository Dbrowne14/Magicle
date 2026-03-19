import { cardsData } from "../../data/dummyData";
import { useState, useEffect } from "react";

type GuessProps = {
  guessState: string;
  setGuessState: React.Dispatch<React.SetStateAction<string>>;
};

const GameInput = ({ guessState, setGuessState }: GuessProps) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const data = Object.keys(cardsData);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const filtered = data.filter((item) => {
      return item.toLowerCase().includes(guessState.toLowerCase());
    });

    setSuggestions(filtered.slice(0, 10));
  }, [query, data]);

  return (
    <div className="h-12 border-b border-b-white text-white relative">
      <form
        onSubmit={(e) => {
          e.preventDefault;
          setGuessState(e.target.value);
        }}
        className="inline-flex"
      >
        <input
          type="text"
          value={query}
          placeholder="Search..."
          onChange={(e) => {
            e.preventDefault;
            setGuessState(e.target.value);
          }}
          className="width-[100%]"
        />

        {suggestions.length > 0 && (
          <ul className="absolute m-0 p-0 bg-white max-h-3 overflow-y-auto">
            {suggestions.map((item, id) => (
              <li key={id} className="p-2" onClick={() => setGuessState(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </form>
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
