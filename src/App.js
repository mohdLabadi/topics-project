import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [xx, setxx] = useState(1);

  let x =1;
  return (
    <div className="App">
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <div className="players">
          <h3>Player One</h3>
          <h3>Player Two</h3>
        </div>
      </div>
      <div className="class"><table><tr></tr><tr></tr><tr></tr></table></div>
    </div>
    
  );
}

export default App;
