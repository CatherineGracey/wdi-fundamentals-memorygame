var cards = ["jack", "ace", "queen", "king", "ace", "king", "queen", "jack"];
var cardsInPlay = [];

function isTwoCards(){
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  var card = this.getAttribute('data-card');
  cardsInPlay.push(this);
  this.innerHTML = '<img src="' + card + '.svg" alt="' + card + '" />';
  this.className = "card-shown";

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  } else {
    document.getElementById("result").innerHTML = "";
  }
}

function isMatch(){
  var result = document.getElementById("result");
  if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')){
    result.innerHTML = "You found a match!";
    cardsInPlay[0].removeEventListener("click", isTwoCards);
    cardsInPlay[1].removeEventListener("click", isTwoCards);
    isGameOver();
  } else {
    result.innerHTML = "Sorry, try again.";
    cardsInPlay[0].innerHTML = "";
    cardsInPlay[1].innerHTML = "";
    cardsInPlay[0].className = "card";
    cardsInPlay[1].className = "card";
  }
}

function isGameOver(){
  var unfound = document.getElementsByClassName("card");
  if (unfound.length === 0){
    createBoard();
  }
}

function shuffleCards(){
  var holding = [];
  while (cards.length > 0){
    var i = Math.floor(Math.random() * cards.length);
    var card = cards.splice(i, 1);
    holding.push(card[0]);
  }
  cards = holding;
}

function createBoard(){
  shuffleCards();
  var board = document.getElementById("game-board");
  board.innerHTML = "";
  for (var i = 0; i < cards.length; i++){
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("data-card", cards[i]);
    newCard.addEventListener("click", isTwoCards);
    board.appendChild(newCard);
  }
}

createBoard();
