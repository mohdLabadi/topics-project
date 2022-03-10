import "./Games.css";
import { useState, useEffect } from "react";
import MemoryGame from "./MemoryGame";
import Hangman from "./Hangman";
import { FaGamepad, FaHeadset } from "react-icons/fa";
import { useParams } from "react-router-dom";


function Games() {
  //input first and last names
  const [firstName, setFirstName] = useState();

  //finalized last names
  const [finalizedName, setFinalizedName] = useState("Player");

  //what to display
  const [display, setDisplay] = useState("logo");

  //the scoring
  const [oneScore, setOneScore] = useState(0);

  const [games, setGames] = useState(false);
  const { type } = useParams();
  let game;
  useEffect(() => {
    setDisplay(type);
  }, []);

  let allgames = "";

  if (games == true) {
    allgames = (
      <div className="all-games">
        <p
          onClick={(e) => {
            setDisplay("memory-game");
          }}
        >
          Memory Game
        </p>

        <p
          onClick={(e) => {
            setDisplay("hangman");
          }}
        >
          Hangman
        </p>
      </div>
    );
  } else if (games == false) {
    allgames = "";
  }
  function toggleAllGames() {
    setGames(!games);
  }

  if (display == "hangman") {
    game = (
      <Hangman
        scoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></Hangman>
    );
  } else if (display == "memory-game") {
    game = (
      <MemoryGame
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame>
    );
  }

  return (
    <div className="entire-thing">
      {/* The main content with container fluid */}
      <div className="container-fluid  all">
        <div className="row ">
          <div className="col-xs-12  p-20">{game}</div>
        </div>
      </div>

      {/* There will be the scores here */}
      <div className="icon-bar">
        <div className="icon">
          <div className="text">
            <h5>Contact us </h5>{" "}
            <FaHeadset size={25} className="ic" id="about-us"></FaHeadset>
          </div>
        </div>
        

        <div
          className="icon"
          id="show-games"
          onMouseEnter={(e) => {
            toggleAllGames();
          }}
          onMouseLeave={(e) => {
            toggleAllGames();
          }}
        >
          <div className="text">
            <h5> &nbsp; Games</h5>
            <FaGamepad size={30} className="ic" id="game"></FaGamepad>
          </div>
          {allgames}
        </div>
      </div>
    </div>
  );
}

export default Games;