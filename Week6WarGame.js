// Array of cards
var cards = ['a', 'a', 'a', 'a', 'k', 'k', 'k', 'k', 'q', 'q', 'q', 'q', 'j', 'j', 'j', 'j', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2];
// Shuffle the cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//Assign value to face cards
let cardValue;

if (cards === "a") {
  cardValue = 14;
} else if (cards === "k") {
  cardValue = 13;
} else if (cards === "q") {
  cardValue = 12;
} else if (cards === "j") {
  cardValue = 11;
} else {
  cardValue = cards;
}

// Begin the game by shuffling and dividing cards in half

shuffle(cards);
let halfCards = cards.length/2;
var player1Cards = cards.slice(0, halfCards);
var player2Cards = cards.slice(halfCards);
console.log("Player 1 Cards: ", player1Cards);
console.log("Player 2 Cards: ", player2Cards);

// Keep track of the points for each player
let player1Points = 0;
let player2Points = 0;

// Loop through game play
while (player1Cards.length > 0 && player2Cards.length > 0) {

  // Take the first card from each player's deck
  let player1Card = player1Cards.shift();
  let player2Card = player2Cards.shift();
  
  // Compare the cards
  if (player1Card > player2Card) {
    // Player 1 wins and gets a point
    player1Points++;
  } else if (player1Card < player2Card) {
    // Player 2 wins and gets a point
    player2Points++;
  } else {
    // It's a tie, no points are given
  }
}

console.log(`Player 1: ${player1Points} points`);
console.log(`Player 2: ${player2Points} points`);

// Display the winner of the game
if (player1Points > player2Points) {
  console.log("Player 1 wins!");
} else if (player1Points < player2Points) {
  console.log("Player 2 wins!");
} else {
  console.log("It's a tie!");
}
