import "./App.css";
import { useState } from "react";
import Hangman from "./Hangman";
import MemoryGame2 from "./MemoryGame2";
import { FaHome, FaGamepad,FaHeadset } from "react-icons/fa";

function App() {
  //input first and last names
  const [firstName, setFirstName] = useState();
  
  //finalized last names
  const [finalizedName, setFinalizedName] = useState("Player");

  //what to display
  const [display, setDisplay] = useState("logo");

  //the scoring
  const [oneScore, setOneScore] = useState(0);

  const [games, setGames] = useState(false);

  let game;
  let allgames = "";

  if (games == true) {
    allgames = (
      <div className="all-games">
        <p>Memory Game</p>

        <p>Hangman</p>
      </div>
    );
  } else if (games == false) {
    allgames = "";
  }
  function toggleAllGames() {
    setGames(!games);
  }

  if (display == "logo") {
    //game = <img src="./Yal3ab.png" alt="Logo" className="img-fluid game" />;
    game = (
      <MemoryGame2
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame2>
    );
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
      <MemoryGame2
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame2>
    );
  }

  return (
    <div className="entire-thing">
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 className="navbar-brand">
              <a >
                <img href="/img/Yal3ab.png">
                </img>
              </a>
              NoobyLoob and Llabadi Games</h3>
          </div>
          <ul className="navbar navbar-nav navbar-right">
            <li>This is for the very long list of names </li>
            <li>Score : {oneScore}</li>
          </ul>
        </div>
      </nav>
      {/* The main content with container fluid */}
      <div className="container-fluid  all">
        {/* <h1 className="Jumbotron row no-gutters text-center  main-text">
          <div className="col-xs-12">NoobyLoob and LLabadi Games</div>
        </h1> */}

        <div className="row ">
          <div className="col-xs-12  p-20">{game}</div>
        </div>
      </div>

      {/* There will be the scores here */}
      <div className="icon-bar">
        <div className="icon">
          <div className="text">
            <h5>Contact us </h5> <FaHeadset size={25} className="ic" id="about-us"></FaHeadset>
          </div>
        </div>
        <div className="icon">
          <div className="text">
            <h5>Home </h5> <FaHome size={25} className="ic" id="home"></FaHome>
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
            <div className="contain">
              <h5> Games</h5>
              {allgames}
            </div>
            <FaGamepad size={30} className="ic" id="game"></FaGamepad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
