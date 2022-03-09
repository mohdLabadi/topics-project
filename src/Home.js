import "./Home.css";
import { useState } from "react";
function HomePage() {
  const [Display, setDisplay] = useState();
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
        <div className="col-sm-6 one-game">
          <h1>Hangman</h1>
        </div>
        <div className="col-sm-6 one-game">
          <h1>Memory Card</h1>
        </div>
      </div>

      <hr className="divider" />
      {/* Type of game */}

      <div className="hangman-info">
        <div className="main-text">
         <h1>
           HANGMAN
         </h1>
        </div>
        <div className="row information">
          <div className="col-sm-6 info">
            <h3>
              {" "}
              This is a simple hangman game, where you guess the word and if it
              is right, you get deducted points, and guess correctly, gain
              points.
            </h3>
          </div>
          <div className="col-sm-6 image">
            <img
              src="https://media.istockphoto.com/photos/wooden-block-with-the-number-401k-with-some-money-around-concept-in-picture-id1304783217?b=1&k=20&m=1304783217&s=170667a&w=0&h=Ztu3NJzQJF-lq45TYQzwawlhbaOgwR7UR4YZqs6y3kE="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
