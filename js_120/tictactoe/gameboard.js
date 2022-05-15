class GameBoard {
    static EMPTY_SPACE = " ";
    static HUMAN_MARKER = "X";
    static COMPUTER_MARKER = "O";

    constructor() {
        this.boardSpaces = {};
        for (let index = 1; index <= 9; index++) {
            this.boardSpaces[index] = new Square();
        }
    }

    markSquareAt(squareNum, marker) {
        this.boardSpaces[squareNum].setMarker(marker);
    }

    emptySpaces() {
        // selects only empty spaces, and returns the numbers of those spaces.
        return Object.entries(this.boardSpaces)
        .filter(([_, value]) => value.isEmpty())
        .map(([key, _]) => key);
    }

    isBoardFull() {
        return this.emptySpaces().length === 0;
    }

    display() {    
        console.log("");
        console.log("     |     |");
        console.log(`  ${this.boardSpaces["1"]}  |  ${this.boardSpaces["2"]}  |  ${this.boardSpaces["3"]}`);
        console.log("     |     |");
        console.log("-----+-----+-----");
        console.log("     |     |");
        console.log(`  ${this.boardSpaces["4"]}  |  ${this.boardSpaces["5"]}  |  ${this.boardSpaces["6"]}`);
        console.log("     |     |");
        console.log("-----+-----+-----");
        console.log("     |     |");
        console.log(`  ${this.boardSpaces["7"]}  |  ${this.boardSpaces["8"]}  |  ${this.boardSpaces["9"]}`);
        console.log("     |     |");
        console.log("");
    }
}

class Square {
    constructor(marker = GameBoard.EMPTY_SPACE) {
        this.marker = marker;
    }

    setMarker(marker) {
        this.marker = marker;
    }

    isEmpty() {
        return this.marker === GameBoard.EMPTY_SPACE;
    }

    toString() {
        return this.marker;
    }
}

module.exports = GameBoard;