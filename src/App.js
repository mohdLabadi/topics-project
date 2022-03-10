import Games from "./Games/Games";
import "./App.css";
import HomePage from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";

export const  currentUserInfo = createContext();

function App() {
  const [userName, setUserName] = useState("Name");
  const [useScore, setUserScore] = useState(0);

  return (
    <currentUserInfo.Provider
      value={{ userName, setUserName, useScore, setUserScore }}
    >
      <Router>
        {/* The header */}
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              {/* Put Logo somewhere here */}
              <h4>
                {" "}
                <a class="navbar-brand" href="/">
                  <img src="/img/Yal3ab.png" class="img-fluid logo-image"></img>
                </a>
              </h4>
            </div>

            <ul class="nav navbar-nav">
              <div>
                <li>
                  <div class="score">
                    <h5>Score = {useScore}</h5>
                  </div>
                </li>

                <li>
                  <div class="score">
                    <h5>Player: {userName}</h5>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="lines">
          <div className="box-sm orange"></div>
          <div className="box-sm green"></div>
          <div className="box-sm yellow"></div>
          <div className="box-sm lime"></div>
        </div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/game/:type">
            <Games></Games>
          </Route>
        </Switch>
      </Router>
    </currentUserInfo.Provider>
  );
}

export default App;
