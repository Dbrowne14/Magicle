
import { cardsData } from "../../data/dummyData";

type GuessProps = {
  setGuessState: React.Dispatch<React.SetStateAction<string>>;
};

const GameInput = ({ setGuessState }:GuessProps) => {
  return (
    <div className="h-12 border-b border-b-white text-white">
      <form onSubmit={((e)=> {e.preventDefault; setGuessState(e.target.value)})} className="inline-flex">
        <input placeholder="Search..." />
        <button>Search</button>
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
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Load API data once
  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(items => setData(items));
  }, []);

  // Filter suggestions when typing
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const filtered = data
      .filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 10);

    setSuggestions(filtered);
  }, [query, data]);

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