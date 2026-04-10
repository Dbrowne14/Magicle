import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useState, useEffect } from "react";
import EndState from "./EndState";
import type { ReturnStructure } from "../../types/types";

const roundLimit = 10;

let todaysWord: ReturnStructure = {
  id: 0,
  scryfall_id: "",
  name: "",
  cmc: 0,
  type: [""],
  islegendary: false,
  img: "",
  year: 0,
  rarity: "",
  set_code: "",
  icon_svg_uri: "",
  set_name: "",
  price: 0,
  pips: [""],
  colors: 0,
  edhrec_rank: 0,
  oracle_text: ""
};

const Gameboard = () => {
  const [guessState, setGuessState] = useState<string[]>([]);
  const [endGame, setEndgame] = useState(false);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState("");
  const [allCards, setAllCards] = useState<ReturnStructure[] | null>(null);

  useEffect(() => {
    if (round >= roundLimit) {
      setEndgame(true);
      console.log("Lose conditon");
      console.log(endGame);
      setResult("Lose");
    }
    if (guessState.includes(todaysWord.name)) {
      console.log("Win conditon");
      setEndgame(true);
      setResult("Win");
    }

    console.log("effect ran:", guessState);
  }, [guessState, round]);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch("http://localhost:3000/todays_word");
      if (!response.ok) {
        console.log("Fetch Error");
      }
      const data = await response.json();
      todaysWord = data;
      console.log("tdays word is",todaysWord)
    };

    fetchWord();
  }, []);

  useEffect(() => {
    const fetchAllcards = async () => {
      try {
        const response = await fetch("http://localhost:3000/allCards");
        if (!response.ok) {
          console.log("Error returning fetch");
        }
        const data = await response.json();
        console.log(data);
        setAllCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllcards();
  }, []);

  return (
    <div className="h-full flex flex-col gap-8 justify-center items-center">
      <h1 className="text-white">Staple</h1>
      <div className="flex flex-col h-full w-90">
        <GameInput
          setGuessState={setGuessState}
          guessState={guessState}
          round={round}
          setRound={setRound}
          endGame={endGame}
          allCards = {allCards}
        />
        <GameOutput guessState={guessState} allCards = {allCards} todaysWord = {todaysWord}/>
      </div>
      {endGame && <EndState result={result} todaysWord={todaysWord} />}
    </div>
  );
};

export default Gameboard;
