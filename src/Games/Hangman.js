import "./Hangman.css";
import { useState } from "react";
function Hangman() {
  const [score, setScore] = useState(500);

  const [word, setWord] = useState("SIMPLE");

  const[letter,setLetter] = useState(['_','_','_','_','_','_',]);
 
  

  return (
    <div className="container-fluid hangman">
      <div className="row">
        <div className="col-sm-12">
          <h1>Points Deducted: {score} </h1>
        </div>
      </div>
      <div className="row">
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
    </div>
  );
}
export default Hangman;
