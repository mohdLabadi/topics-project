import "./App.css";
import { useState } from "react";
import Hangman from "./options/Hangman";
import { GiCardRandom } from "react-icons/gi";
import MemoryGame from "./options/MemoryGame";

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
  let allgames ="";

 
 if(games == true){
  allgames = (
    <div className="all-games">
      <p>Memory Game</p>
      <p>Hangman</p>
    </div>
  );
 }
 else if(games == false){
   allgames = "";
 }
 function toggleAllGames(){
   setGames(!games);
 }






  if (display == "logo") {
    //game = <img src="./Yal3ab.png" alt="Logo" className="img-fluid game" />;
    game = (
      <MemoryGame
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame>
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
      <MemoryGame
        fscoreOne={oneScore}
        changeFirst={setOneScore}
        first={firstName}
      ></MemoryGame>
    );
  }

  return (
    <div className="entire-thing">
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 className="navbar-brand">NoobyLoob and Llabadi Games</h3>
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
        <div className="icon" id="game-2s">
          <h5>score: {oneScore}</h5>
        </div>
        <div className="icon">
          <h5>About Us</h5>
        </div>
        <div className="icon">
          <h5 onClick={(e) => {
            toggleAllGames();
          }}>All games</h5>
          {allgames}
        </div>
      </div>
    </div>
  );
}

export default App;
