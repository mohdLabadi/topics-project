import './SingleCard.css';

export default function SingleCard({card, handleChoice, flipped, disabled }) {
   const handleClick = () => {
      if (!disabled) {
         handleChoice(card);
      }
   };
   
   return (
      <div className="card">
         <div className={flipped ? 'flipped' : ''}>
            <img className="cardface front" src={card.src} alt="front" />
            <img onClick={handleClick} className="cardface back" src="/img/cover.png" alt="back" />
         </div>
      </div>
   );
}