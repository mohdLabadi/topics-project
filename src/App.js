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
            <h4>Yal3Ab</h4>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <h5>Score= 0</h5>
            </li>
          </ul>
        </div>
      </nav>
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
