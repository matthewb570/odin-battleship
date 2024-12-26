import GameBoard from "./GameBoard.js";

class Player {

    name;
    isHuman;
    gameBoard;

    constructor(name, isHuman) {
        this.name = name;
        this.isHuman = isHuman;
        this.gameBoard = new GameBoard();
    }
}

export default Player;