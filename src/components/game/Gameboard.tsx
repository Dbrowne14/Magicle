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
import { fetchAllcards, fetchWord } from "../../data/dataFetches";

const MIN_LOADING_TIME = 1500;

const Gameboard = () => {
  const {
    round,
    setLoadingState,
    endGame,
    setTodaysWord,
    setAllCards,
  } = useGameContext();

  //fetch todays word and allcard data from database
  useEffect(() => {
    const loadData = async () => {
      setLoadingState(true);
      const start = Date.now();

      const word = await fetchWord();
      setTodaysWord(word);

      const allCards = await fetchAllcards();
      setAllCards(allCards);

      const elapsed = Date.now() - start;
      const remaining = MIN_LOADING_TIME - elapsed;

      //setting a minimum loading state dependent on time to fetch
      if (remaining > 0) {
        setTimeout(() => {
          setLoadingState(false);
        }, remaining);
      } else {
        setLoadingState(false);
      }
    };

    setLoadingState(false);
    loadData();
  }, []);

  return (
    <div className="h-full flex flex-col gap-8 justify-center items-center">
      <LoaderState />
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
      <ClueState />
      {endGame && <EndState />}
    </div>
  );
};

export default Gameboard;
