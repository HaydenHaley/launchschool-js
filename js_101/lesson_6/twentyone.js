const readline = require('readline-sync');

function getFullDeck() {
  let deck = [];
  for (let i = 2; i <= 14; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push(i);
    }
  }
  deck = shuffle(deck);
  return deck;
}

function shuffle(deck) {  
  let currentIndex = deck.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}

function dealCard(hand, deck) {
  let drawnCard = deck.pop();
  hand.push(drawnCard);
  return drawnCard;
}

function displayHands(playerHand, dealerHand) {
  console.log('Dealer hand: ' + dealerHand.map(card => getCardString(card)).join(', '));
  console.log('Your hand: ' + playerHand.map(card => getCardString(card)).join(', '));
}

function checkHandMinimum(hand) {
  let sum = 0;
  hand.forEach(card => {
    if (card === 14) {
      sum += 1;
    } else {
      // 11, 12, and 13 (jack, queen, king) are still worth 10.
      sum += Math.min(card, 10);
    }
  });
  return sum;
}

function checkHandMaximum(hand) {
  let sum = 0;
  let aces = 0;
  hand.forEach(card => {
    if (card === 14) {
      sum += 11;
      aces++;
    } else {
      // 11, 12, and 13 (jack, queen, king) are still worth 10.
      sum += Math.min(card, 10);
    }
  });

  // if over 21, treat one ace at a time as 1 until no longer bust.
  while (aces > 0 && sum > 21) {
    aces--;
    sum -= 10;
  }
  return sum;
}

function getCardString(cardValue) {
  switch (cardValue) {
    case 14:
      return 'Ace';
    case 13:
      return 'King';
    case 12:
      return 'Queen';
    case 11:
      return 'Jack';
    default:
      return cardValue;
  }
}

function getHitOrStay() {
  console.log('Hit or stay?');
  let response;

  while (!response) {
    response = readline.prompt().toLowerCase();

    if (!['hit', 'stay'].includes(response)) {
      console.log("Sorry, that isn't a valid input. You can either 'hit' to draw another card or 'stay' to finish your turn.");
      response = null;
    }
  }
  return response;
}

// returns the winner?
function runGame() {
  let deck = getFullDeck();

  let playerHand = [];
  dealCard(playerHand, deck);
  dealCard(playerHand, deck);

  let dealerHand = [];
  dealCard(dealerHand, deck);
  dealCard(dealerHand, deck);

  displayHands(playerHand, dealerHand);

  let response = getHitOrStay();
  while (response === 'hit') {

    dealCard(playerHand, deck);
    displayHands(playerHand, dealerHand);
    console.log(checkHandMinimum(playerHand));

    if (checkHandMinimum(playerHand) > 21) {
      console.log("Oooh, bust! Sorry about that, but you lose!");
      // ends the game overall, put this in later
      break;
    } else {
      response = getHitOrStay();
    }
  }

  if (checkHandMinimum(playerHand) > 21) {
    return;
  }

  while (checkHandMinimum(dealerHand) < 17) {
    let dealtCard = dealCard(dealerHand, deck);
    console.log(`\nDealer draws a ${getCardString(dealtCard)}...`);
    displayHands(playerHand, dealerHand);
  }

  if (checkHandMinimum(dealerHand) > 21) {
    console.log("Dealer goes bust! You win!");
    return;
  }

  let dealerTotal = checkHandMaximum(dealerHand);
  let playerTotal = checkHandMaximum(playerHand);

  console.log('Dealer total: ' + dealerTotal);
  console.log('Your total: ' + playerTotal);

  if (playerTotal < dealerTotal) {
    console.log("Dealer wins! Sorry about that.");
    // deducts player points
  } else if (playerTotal > dealerTotal) {
    console.log("You win! Congratulations!");
    // adds player points
  } else {
    console.log("A tie! Nobody wins, I guess.");
  }
}

/* 
Player is shown their hand, offered the ability to hit or stay.
Every hit, the minimum value is checked. If it exceeds 21, the player goes bust.
When the player finishes, the PC hits until the minimum is at leasy 17. If the minimum exceeds 21, the PC goes bust.
If neither has gone bust, the maximum values are compared, attempting to fit as many 11-value aces as can fit.
Whether a tie or win, the game ends, the hands are emptied, and the deck is replaced.
*/

let playAgain = false;

do {
  runGame();

  console.log('Want to play another round?');
  // asks if player wants to continue
  let inputValid;
  while (!inputValid) {
    let repeatRequest = readline.prompt();
    inputValid = ['yes', 'y', 'no', 'n'].includes(repeatRequest);
    if (!inputValid) {
      console.log("Sorry, that's not a valid input.");
    } else {
      playAgain = ['yes', 'y'].includes(repeatRequest);
    }
  }

} while (playAgain);
console.log('Thanks for playing!');