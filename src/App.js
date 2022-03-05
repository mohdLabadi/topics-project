import "./App.css";
import { useState } from "react";
import Games from "./Games";
import HomePage from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* The Navigation bar would go on here */}
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 className="navbar-brand">
              <a href="#">
                <img src="./img/Yal3ab.png"></img>
              </a>
              NoobyLoob and Llabadi Games
            </h3>

            <ul className="navbar navbar-nav navbar-right">
              <li>Score : SomeScore </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/game/:type">
          <Games></Games>
        </Route>
        <Route exact path="/"> 
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
