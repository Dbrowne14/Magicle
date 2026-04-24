import GameInput from "./GameInput";
import GameOutput from "./GameOutput";
import { useEffect } from "react";
import EndState from "./alternateStates/EndState";
import { ClueState } from "./alternateStates/ClueState";
import logo from "/Staple_Favicon.png";
import { GameInformation } from "./GameInformation";
import { HowToPlay } from "./alternateStates/HowToPlay";
import { LoaderState } from "./alternateStates/LoaderState";
import { useGameContext } from "../../context/GameContext";

const ROUND_LIMIT = 10;
const baseUrl = "https://staple-backend.onrender.com"; //"http://localhost:3000 for test routes"

const Gameboard = () => {
  const {
    todaysWord,
    round,
    guess,
    setLoadingState,
    endGame,
    setEndGame,
    setResult,
    setTodaysWord,
    setAllCards,
  } = useGameContext();

  useEffect(() => {
    if (!todaysWord) return;
    if (round >= ROUND_LIMIT) {
      setEndGame(true);
      setResult("Lose");
    }
    if (guess.includes(todaysWord?.name)) {
      setEndGame(true);
      setResult("Win");
    }

    console.log("effect ran:", guess);
  }, [guess, round]);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(`${baseUrl}/todays_word`);
      if (!response.ok) {
        console.log("Fetch Error");
      }
      const data = await response.json();
      setTodaysWord(data);
    };
    setLoadingState(false)
    fetchWord();
  }, []);

  useEffect(() => {
    const fetchAllcards = async () => {
      try {
        const response = await fetch(`${baseUrl}/allCards`);
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
      <LoaderState
      />
      <div className="gameWidth flex flex-row items-center justify-center mt-10">
        <img src={logo} className="h-20" />
        <h1 className="text-headerOrange ">taple</h1>
      </div>
      <div className="flex flex-col h-full gameWidth gap-1">
        <GameInformation />
        <GameInput />
        <GameOutput />
        {round === 1 && <HowToPlay />}
        {round === 0 && (
          <div className="flex flex-center">
            {" "}
            <h3 className="text-center italic text-[0.9rem]">
              {" "}
              You have 10 guesses to find today’s Commander Staple — a card
              ranked among the top 1000 most-played non-land cards in MTG
              Commander.
            </h3>{" "}
          </div>
        )}
      </div>
      <ClueState
      />
      {endGame && <EndState  />}
    </div>
  );
};

export default Gameboard;
