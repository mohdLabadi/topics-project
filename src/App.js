import "./App.css";
import { useState } from "react";
import Hangman from "./options/Hangman";
import Memory from "./options/memoryCard";
import MemoryGame from "./options/MemoryGame";


function App() {
  //input and finalized first and last names
  const [secondName, setSecondName] = useState();
  const [firstName, setFirstName] = useState();

  //what to display
  const [display, setDisplay] = useState("logo");

  //the scoring
  const [oneScore, setOneScore] = useState(0);
  const [twoScore, setTwoScore] = useState(0);
  let game;

  if (display == "logo") {
    game = (
      <img
        src="./Yal3ab.png"
        alt="Logo"
        className="img-fluid game"
      />
    );
  } else if (display == "game-1") {
    game = (
      <Hangman
        scoreOne={oneScore}
        scoreTwo={twoScore}
        changeFirst={setOneScore}
        changeSecond={setTwoScore}
        first={firstName}
        second={secondName}
      ></Hangman>
    );
  } else if (display == "game-2") {
    game = (
      <Memory
        fscoreOne={oneScore}
        scoreTwo={twoScore}
        changeFirst={setOneScore}
        changeSecond={setTwoScore}
        first={firstName}
        second={secondName}
      ></Memory>
    );
  }
    else if (display == "game-3") {
      game = (
        <MemoryGame
          fscoreOne={oneScore}
          scoreTwo={twoScore}
          changeFirst={setOneScore}
          changeSecond={setTwoScore}
          first={firstName}
          second={secondName}
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
          <div className="player"></div>

          <h4>Player 2</h4>
          <input
            className="input-player"
            type="text"
            value={secondName}
            onChange={(e) => {
              setSecondName(e.target.value);
            }}
          />
          <h4>Score: {twoScore}</h4>
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
                setDisplay("game-2");
              }}
            >
              Tic Tac Toe
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
