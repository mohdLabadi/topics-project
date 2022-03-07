import Games from "./Games/Games";
import "./App.css";
import HomePage from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* The header */}
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            {/* Put Logo somewhere here */}
             <h4> <a class="navbar-brand" href="/">
      
            <img src="/img/Yal3ab.png" class="img-fluid logo-image"></img>
      
</a></h4>
          </div>
         
          <ul class="nav navbar-nav">
            <li>
              <div class="score">
                <h5>Score =  0</h5>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="lines">
              <div className="box-sm black"></div>
              <div className="box-sm white"></div>
              <div className="box-sm green"></div>
              <div className="box-sm red"></div>
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
  );
}

export default App;
