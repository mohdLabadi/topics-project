import "./Hangman.css";
import { useState } from "react";
function Hangman() {
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState();
  const [feedback, setFeedBack] = useState();
  const [allGuessed, setAllGuesssed] = useState(['A','D']);
  const [word, setWord] = useState("SIMPLE");

  const [letter, setLetter] = useState(["_", "_", "_", "_", "_", "_"]);

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
      setGuess("");
      
      
    } else {
      setFeedBack("Wrong -50");
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
      <div className="row letters">
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
          maxLength="1"
        />
      </div>
      <div className="row d-flex justify-content-center submitting">
        <h3 onClick={toClick} className="col-sm-2 input-submit">
          Guess
        </h3>
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
