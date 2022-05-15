const GameBoard = require("./gameboard.js");
const readline = require("readline-sync");

class Player {
    constructor(marker) {
        this.marker = marker;
    }

    getMarker() {
        return this.marker;
    }
}

class Human extends Player {
    constructor() {
        super(GameBoard.HUMAN_MARKER);
    }
}

class Computer extends Player {
    constructor() {
      super(GameBoard.COMPUTER_MARKER);
    }
  }

class TTTGame {  
    static POSSIBLE_WINNING_ROWS = [
        [ "1", "2", "3" ],            // top row of board
        [ "4", "5", "6" ],            // center row of board
        [ "7", "8", "9" ],            // bottom row of board
        [ "1", "4", "7" ],            // left column of board
        [ "2", "5", "8" ],            // middle column of board
        [ "3", "6", "9" ],            // right column of board
        [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
        [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
    ];

    constructor() {
        this.humanPlayer = new Human();
        this.computerPlayer = new Computer();
    }

    runProgram() {
        console.clear();
        this.displayWelcomeMessage();

        while (true) {
            this.gameBoard = new GameBoard();
            this.playGameRound();
            if (!this.playAgain()) break;
        }

        this.displayGoodbyeMessage();
    }

    playGameRound() {
        while (true) {
            this.gameBoard.display();

            this.humanMove();
            debugger;
            if (this.isGameOver()) break;

            this.computerMove();
            if (this.isGameOver()) break;
            console.clear();
        }
        console.clear();
        this.gameBoard.display();
        let winner = this.checkGameWinner();
        if (winner === undefined) {
            console.log("A tie? That's no fun!");
        } else if (winner === GameBoard.COMPUTER_MARKER) {
            console.log("Computer wins! Sorry about that.");
        } else if (winner === GameBoard.HUMAN_MARKER) {
            console.log("You win! Congratulations!");
        } else {
            console.log("An unexpected winner has emerged. This shouldn't happen, please check your code.");
        }
    }

    displayWelcomeMessage() {
        console.log("Welcome to tic tac toe!");
    }

    displayGoodbyeMessage() {
        console.log("Goodbye, and thanks for playing!");
    }

    humanMove() {        
        let moveChoice = null;
        while (moveChoice === null) {
            let emptySpaces = this.gameBoard.emptySpaces();
            console.log("Which space would you like to select? Please select from the spaces below.");
            console.log(emptySpaces);

            let input = parseInt(readline.prompt());

            if (Number.isNaN(input) || !(input >= 1 && input <= 9)) {
                console.log("Sorry, that isn't a valid number. Please enter a number 1-9. \n");
            } else if (!emptySpaces.includes(String(input))) {
                console.log("Sorry, that space is taken. Please select a different space. \n");
            } else {
                moveChoice = input;
            }
        }
        console.log(`You have selected ${moveChoice}`);
        this.gameBoard.markSquareAt(moveChoice, this.humanPlayer.getMarker());
    }

    computerMove() {
        let emptySquares = this.gameBoard.emptySpaces();
        let choice = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        console.log(`Computer choice: ${choice}`);
        this.gameBoard.markSquareAt(choice, GameBoard.COMPUTER_MARKER);
    }

    isGameOver() {
        // STUB
        return this.checkGameWinner() !== undefined || this.gameBoard.isBoardFull();
    }

    checkGameWinner() {
        // go through each of the winning rows, check if all of them are filled
        let winningMarker;
        TTTGame.POSSIBLE_WINNING_ROWS.forEach(row => {
            // if we already found a solution, don't bother continuing the loop
            if (winningMarker !== undefined) return;

            // if every item in the row is the same value
            let checkedValue = this.gameBoard.boardSpaces[row[0]].marker;
            if (row.every(rowItem => this.gameBoard.boardSpaces[rowItem].marker === checkedValue)) {
                if (checkedValue !== GameBoard.EMPTY_SPACE) {
                    winningMarker = checkedValue;
                }
            }
        });
        return winningMarker; // will be either a player marker or undefined
    }

    playAgain() {
        console.log("");
        console.log("Do you want to play again?");
        let response = readline.prompt();
        let wantsToplay = response.toLowerCase() === "y" || response.toLowerCase() === "yes";
        if (wantsToplay) console.clear();
        return wantsToplay;
    }
}

let game = new TTTGame();
game.runProgram();
debugger;