import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [xx, setxx] = useState(1);

  let x = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1
          onClick={() => {
            setxx(1);
          }}
        >
          Click me again
        </h1>
        <button
          onClick={() => {
            setxx(xx + 1);
          }}
        >
          press me
        </button>
        <h1>{xx}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <div className="class">

        <table border="5px, dashed">
          <tr>
            <td>df</td>
          </tr>
          <tr>
            <td>td</td>
            <td>td</td>
          </tr>
          <tr><td>sd</td></tr>
        </table>

      </div>
    </div>
  );
}

export default App;
