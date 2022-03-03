import "./memoryGame.css";

class memoryGame{
  constructor(totalTime, cards){
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
  }
  startGame(){
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;
    setTimeout(() => {
      this.shuffleCards();
      this.countdown = this.startCountDown();
      this.busy = false;
    }, 500)
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
  }

  flipCard(card){
    if(this.canFlipCard(card)){
      this.totaClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add('visible');
      if(this.cardToCheck){
          this.checkForCardMatch(card);
      } else{
        this.cardToCheck = card;
      }
    }
  }

  checkForCardMatch(card){
      if(this.getCardType(card) === this.getCardType(this.cardToCheck)){
        this.cardMatch(card, this.cardToCheck);
      }
      else{
        this.cardMissMatch(card)
      }
      this.cardToCheck = card;
  }
  cardMatch(card1, card2){
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    if(this.matchedCards.length === this.cardsArray.length)
      this.victory();
  }

  cardMissMatch(card1, card2){
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove('visible');
      card2.classList.remove('visible');
      this.busy = false;
    }, 1000);
  }

  getCardType(card){
    return card.getElementsByClassName('card-value')[0].src;
  }

  gameOver() {
    clearInterval(this.countDown)
    document.getElementById('game-over-text').classList.add('visible');
  }

  victory(){
    clearInterval(this.countDown);
    document.getElementById('victory-text').classList.add('visible');
  }
  
  startCountDown() {
    return setInterval(() => {
      this.timeRemaining --;
      this.timer.innerText = this.timeReminaing;
      if(this.timeRemaining === 0){
        this.gameOver();
      }
    }, 1000);
  }
  shuffleCards(){
    for(let i = this.cardsArray.length - 1; i>0;i--){
      let randInd = Math.floor(Math.random() * (i+1));
      this.cardsArray(randInd).style.order = i;
      this.cardsArray[i].style.order = randInd;

    }
  }

  canFlipCard(card){
    return !this.busy && this.matchedCards.includes(card) && card !== this.cardToCheck;
  }
}

function ready(){
let overlays = Array.from(document.getElementsByClassName('overlay-text'));
let cards = Array.from(document.getElementsByClassName('card'));
let game = new memoryGame(100, cards);

overlays.forEach(overlay =>{
  overlay.addEventListener('click', () =>{
    overlay.classList.remove('visible');
    game.startGame();
  
  })
})

if(document.readyState === 'loading'){
  document.addEventListener('DOMKContentLoaded', ready());
}     else{
  ready();
}
}

function MemoryGame() {
  return (
    <html>
     
      <body>
        <div class="container">
        <h1 class="page-title"> Memory Game</h1>
       
        

        <div class="game-container">

          <div class="game-info-container">

            <div class="game-info">
              Time: <span id="time">100</span>
            </div>

          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>

          <div class="card ">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
              <img class="card-value" src="" alt=""></img>
            </div>
          </div>


        </div>
        </div>
      </body>
    </html>
  );
}





export default MemoryGame;
