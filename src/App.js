import "./App.css";
import { useState } from "react";
import MemoryGame2 from "./MemoryGame2";
import Hangman from "./Hangman";
import { FaHome, FaGamepad, FaHeadset } from "react-icons/fa";

import HomePage from "./Home";

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

  if (display == "home") {
    game = (
      <HomePage
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></HomePage>
    );
  } else if (display == "hangman") {
    game = (
      <Hangman
        scoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></Hangman>
    );
  } else if (display == "memory-game") {
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
    
      <nav className="navbar navbar-expand-sm navbar-light ">

        
          <a className="navbar-brand" href="./Home.js">
            <img src="./img/Yal3ab.png" width="30" height="30" class="d-inline-block align-middle" alt=""></img>
            <span>Yal3ab</span>
          </a>
          
        
          <div className="topnav-right">
            <p>
              <span>Score : {oneScore} </span>
            </p>
          </div>
        
        
        </nav>

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
        <div className="icon">
          <div className="text">
            <h5 id="home-text" onClick={e => {setDisplay("home")}}>Home </h5>{" "}
            <FaHome size={25} className="ic" id="home"></FaHome>
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
            <h5> Games</h5>
            <FaGamepad size={30} className="ic" id="game"></FaGamepad>
          </div>
          {allgames}
        </div>
      </div>
    </div>
  );
}

export default App;
