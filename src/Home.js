import "./Home.css";
import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {currentUserInfo} from './App';
function HomePage() {
  const [Display, setDisplay] = useState();
  let moreInfo;
  const [name, setName] = useState("");

  function changeHangman() {
    setDisplay("hangman");
  }
  function changeMemoryGame() {
    setDisplay("memory-game");
  }
  const {setUserName} =useContext(currentUserInfo);
  const history = useHistory();
  function redirecting(){
    setUserName(name);
    history.push(`/game/${Display}`);

  }
  if (Display == "hangman") {
    moreInfo = (
      <div className="row hangman-information">
        <div className="game-title">
          <h1>HANGMAN</h1>
        </div>
        <div className="col-sm-6">
          <p>
            {" "}
            This is a simple hangman game, where you guess the word and if it is
            right, you get deducted points, and guess correctly, gain points.
          </p>
        </div>
        <div className="col-sm-6 image">
          <img
            src="https://media.istockphoto.com/photos/wooden-block-with-the-number-401k-with-some-money-around-concept-in-picture-id1304783217?b=1&k=20&m=1304783217&s=170667a&w=0&h=Ztu3NJzQJF-lq45TYQzwawlhbaOgwR7UR4YZqs6y3kE="
            alt="hangman picture"
          />
        </div>
        <span>
          <label>Name:</label>
          <input
            maxLength={5}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </span>
        <hr className="divider" />
        <button onClick={redirecting} classsName="row">Play</button>
      </div>
    );
  } else if (Display == "memory-game") {
    moreInfo = (
      <div className="row memoryGame-information">
        <div className="game-title">
          <h1>Memory Game</h1>
        </div>
        <div className="col-sm-6">
          <p>
            {" "}
            This is a simple memorygame, where you have to flip 2 cards a time
            to match the pictures that have the same animal picture on them.
            This game enhances the memory of the player because it helps them
            rememebr the places of the images of the animals that the player
            needs to find a pair for. points.
          </p>
        </div>
        <div className="col-sm-6 image">
          <img
            className="image"
            src="./img/memory-game-icon.png"
            alt="memory game picture"
          />
        </div>
        <span>
          <label>Name:</label>
          <input
          maxLength={5}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </span>
        <hr className="divider" />
        <button onClick={redirecting} classsName="row" >Play</button>
      </div>
    );
  }
  return (
    <div className="container-fluid all-page">
      <div className="row d-flex justify-content-center main-content">
        <div className="col-sm-12 main-text align-self-center">
          <h1>Come and Play Games</h1>
          <p>
            See our two collection of games that Muhamamd Mushoffa and Llabadi.
            Choose one of the two games below, and earn points.{" "}
          </p>
          <div className="lines">
            <div className="box-sm black"></div>
            <div className="box-sm white"></div>
            <div className="box-sm green"></div>
            <div className="box-sm red"></div>
          </div>
        </div>
      </div>
      {/* games selection  */}
      <div className="row d-flex justify-content-center games-content">
        <div onClick={changeHangman} className="col-sm-6 one-game">
          <h1>Hangman</h1>
        </div>
        <div onClick={changeMemoryGame} className="col-sm-6 one-game">
          <h1>Memory Card</h1>
        </div>
      </div>

      <hr className="divider" />
      {/* Type of game */}
      {moreInfo}
      <hr className="divider" />
    </div>
  );
}
export default HomePage;
