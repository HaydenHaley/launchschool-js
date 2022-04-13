function getFullDeck() {
  let deck = [];
  for (let i = 2; i <= 14; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push(i);
    }
  }
  return deck;
}

function checkHandValue(hand) {
  // sums up values twice, once treating aces as 1s and second treating them as 11s.
}

/* 
Player is shown their hand, 
*/