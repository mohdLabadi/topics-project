function Hangman({
  first,
  second,
  changeFirst,
  changeSecond,
  scoreOne,
  scoreTwo,
}) {
  return (
    <div className="hangman">
      <h1>Hangman game</h1>
      <h1>{first}</h1>
      <h2>{second}</h2>
      <button
        onClick={() => {
          scoreOne += 100;
          changeFirst(scoreOne);
        }}
      >
        Change First Player
      </button>
      
      <button
        onClick={() => {
          scoreTwo += 100;
          changeSecond(scoreTwo);
        }}
      >
        Change First Player
      </button>
    </div>
  );
}
export default Hangman;
