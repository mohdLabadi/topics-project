function Memory({
  first,
  second,
  scoreOne,
  scoreTwo,
  changeFirst,
  changeSecond,
}) {
  return (
    <div className="hangman">
      <h1>memory game</h1>
      <h1>{first}</h1>
      <h2>{second}</h2>
      <button
        onClick={() => {
          scoreOne += 100;
          changeFirst(100);
        }}
      >
        Change First Player
      </button>
      <button
        onClick={() => {
          scoreTwo += 100;
          changeSecond(100);
        }}
      >
        Change First Player
      </button>
    </div>
  );
}
export default Memory;
