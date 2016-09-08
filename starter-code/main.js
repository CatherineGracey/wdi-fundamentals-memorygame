var cards = ["jack", "ace", "queen", "king", "ace", "king", "queen", "jack"];

var cardsInPlay = [];

var board = document.getElementById("game-board");

function isTwoCards(){
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  var card = this.getAttribute('data-card');
  cardsInPlay.push(card);
  this.innerHTML = '<img src="' + card + '.svg" alt="' + card + '" />';

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
  if (cardsInPlay[0] === cardsInPlay[1]){
    result.innerHTML = "You found a match!";
  } else {
    result.innerHTML = "Sorry, try again.";
  }
  var cardDivs = document.getElementsByClassName("card");
  for (var i = 0; i < cardDivs.length; i++){
    cardDivs[i].innerHTML = "";
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
  for (var i = 0; i < cards.length; i++){
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("data-card", cards[i]);
    newCard.addEventListener('click', isTwoCards);
    board.appendChild(newCard);
  }
}

createBoard();
