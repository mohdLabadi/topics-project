import { useEffect, useState } from 'react';
import './MemoryGame2.css';
import SingleCard from "./SingleCard";

const cardImages = [
   { "src": './img/elephant.png', matched: false },
   { "src": './img/cat.png', matched: false },
   { "src": '../public/img/dog.png', matched: false },
   { "src": './img/goat.png', matched: false },
   { "src": './img/rabbit.png', matched: false },
   { "src": './img/horse.png', matched: false },
   { "src": './img/duck.png', matched:false},
   { "src": './img/monkey.png', matched:false}
];

function MemoryGame2() {
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);
   const [choiceOne, setChoiceOne] = useState(null);
   const [choiceTwo, setChoiceTwo] = useState(null);
   const [disabled, setDisabled] = useState(false);

   // shuffle cards
   const shuffleCard = () => {
      const shuffledCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
   };

   // Handle choice
   const handleChoice = (card) => {
      choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);
   };

   // to reset the turns and card choice
   const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns((prev) => prev + 1);
      setDisabled(false);
   };

   useEffect(() => {
      if (choiceOne && choiceTwo) {
         setDisabled(true);
         if (choiceOne.src === choiceTwo.src) { 
            setCards((prevCards) => {
               return prevCards.map((card) => {
                  if (card.src === choiceOne.src) {
                     return { ...card, matched: true };
                  } else {
                     return card;
                  }
               });
            });
            resetTurn();
         } else {
            setTimeout(() => {
               resetTurn();
            }, 750);
         }
      }
   }, [choiceOne, choiceTwo]);



   // start the game automatically
   useEffect(() => {
      shuffleCard();
   }, []);

   return (
      <div className="App">
         <h1>Yal3ab Memory Game </h1>
         <h2>Flips : {turns}</h2>

         <button onClick={shuffleCard}>New Game</button>
         <div className="card-grid">
            {cards.map((card) => (
               <SingleCard
                  flipped={card === choiceOne || card === choiceTwo || card.matched}
                  handleChoice={handleChoice}
                  card={card}
                  key={card.id}
                  disabled={disabled}
               />
            ))}
         </div>
      </div>
   );
}

export default MemoryGame2;