import "./App.css";
import { useState } from "react";
import Hangman from "./options/Hangman";

import MemoryGame from "./options/MemoryGame";

function App() {
  //input and finalized first and last names

  const [firstName, setFirstName] = useState();

  //what to display
  const [display, setDisplay] = useState("logo");

  //the scoring
  const [oneScore, setOneScore] = useState(0);
  const [twoScore, setTwoScore] = useState(0);
  let game;

  if (display == "logo") {
    game = <img src="./Yal3ab.png" alt="Logo" className="img-fluid game" />;
  } else if (display == "game-1") {
    game = (
      <Hangman
        scoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></Hangman>
    );
  } else if (display == "game-3") {
    game = (
      <MemoryGame
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame>
    );
  }

  return (
    <div className="container-fluid all">
      <h1 className="Jumbotron row text-center  main-text">
        <div className="col-xs-12">NoobyLoob and LLabadi Games</div>
      </h1>
      <div className="row">
        <div className="col-lg-2 players ">
          <div className="player">
            <h4>Player 1</h4>
            <input
              className="input-player"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <h4>Score: {oneScore}</h4>
          </div>
        </div>
        <div className="col-lg-8 game">{game}</div>

        <div className="col-lg-2 ">
          <div className="buttons">
            <button
              onClick={() => {
                setDisplay("game-1");
              }}
            >
              Hangman
            </button>

            <button
              onClick={() => {
                setDisplay("game-3");
              }}
            >
              Memory Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
