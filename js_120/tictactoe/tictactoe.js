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
    constructor() {
        this.gameBoard = new GameBoard();
        this.humanPlayer = new Human();
        this.computerPlayer = new Computer();
    }

    runProgram() {
        this.displayWelcomeMessage();

        while (true) {
            this.playGameRound();
            this.gameBoard.display();
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
        return this.gameBoard.isBoardFull();
    }

    playAgain() {
        // STUB
        return false;
    }
}

let game = new TTTGame();
game.runProgram();
debugger;