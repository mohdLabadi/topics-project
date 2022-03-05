import "./Hangman.css";
function Hangman({
  first,

  changeFirst,

  scoreOne,
}) {
  return (
    <div className="hangman">
      <h1>Hangman game</h1>
      <h1>{first}</h1>

      <button
        onClick={() => {
          scoreOne += 100;
          changeFirst(scoreOne);
        }}
      >
        Change First Player
      </button>
    </div>
  );
}
export default Hangman;
