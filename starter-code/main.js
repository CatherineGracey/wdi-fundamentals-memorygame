var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

/*if (cardTwo === cardFour){
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

if (cardTwo === cardThree){
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

if (cardOne === cardFour){
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}*/

var board = document.getElementById("game-board");

function createBoard(cards){
  for (var i = 0; i < cards; i++){
    var newCard = document.createElement("div");
    newCard.className = "card";
    board.appendChild(newCard);
  }
}

createBoard(4);
