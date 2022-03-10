import "./Hangman.css";
import { useState, useContext } from "react";
import {currentUserInfo} from "../App";
function Hangman() {
  
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState();
  const [feedback, setFeedBack] = useState();
  const [allGuessed, setAllGuesssed] = useState([]);
  const [word, setWord] = useState("SIMPLE");
  const [letter, setLetter] = useState(["-", "-", "-", "-", "-", "-"]);
  
  const handleSubmit = e => {
    e.preventDefault();
    toClick();
  };
  const value = useContext(currentUserInfo)
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
  };

  function toClick() {
    let appearance = [];
    if (word.includes(guess)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
          appearance.push(i);
        }
      }
      console.log(appearance);
      let arrx = letter;
      for (let i = 0; i < appearance.length; i++) {
        arrx[appearance[i]] = guess;
      }
      setFeedBack("Correct +50");
      setLetter(arrx);
      let x = value.useScore; 
      x+=50;
      console.log(x);
      value.setUserScore(x)
      setGuess("");
      
      
    } else {
      
      setFeedBack("Wrong -50");
      value.setUserScore(value.useScore-50)
      allGuessed.push(guess);
      setGuess("")
      console.log(allGuessed);
    }    
    

    
}



  return (
    <div className="container-fluid hangman">
      <div className="row">
        <div className="col-sm-12 score-hangman">
          <h1 className="comp">Total Points: {score} </h1>
          <hr />
        </div>
      </div>
      
      <div className="row letters-container">
        <div className="col-sm-2">
          <h1>{letter[0]}</h1>
        </div>
        <div className="col-sm-2">
          <h1>{letter[1]}</h1>
        </div>
        <div className="col-sm-2">
          <h1>{letter[2]}</h1>
        </div>
        <div className="col-sm-2">
          <h1>{letter[3]}</h1>
        </div>
        <div className="col-sm-2">
          <h1>{letter[4]}</h1>
        </div>
        <div className="col-sm-2">
          <h1>{letter[5]}</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center  ">
        
        <input
          className="col-sm-1 input-guess"
          type="text"
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          value={guess}

          onKeyPress={handleKeypress}

          maxLength="1"
        />
      </div>
      <div className="row d-flex justify-content-center submitting">
        <button onClick={toClick}  type="submit" className="col-sm-2 input-submit">
          Guess
        </button>
      </div>
      <div className="row d-flex justify-content-center feedback">
        <h3 className="col-sm-5">{feedback}</h3>
      </div>
      <div className="hello">
        {allGuessed.map((e) => (
          <div className="one-word" key={e}>
          <h3>{e}</h3>
        </div>

        )
          
        )}
      </div>
    </div>
  );
}
export default Hangman;
