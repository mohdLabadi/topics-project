import "./Home.css";

function HomePage() {
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
      <div className="row d-flex justify-content-center games-content">
        <div className="col-sm-6 one-game">
            <h1>Hangman</h1>
        </div>
        <div className="col-sm-6 one-game">
            <h1>Memory Card</h1>
        </div>
       
      </div>
    </div>
  );
}
export default HomePage;
