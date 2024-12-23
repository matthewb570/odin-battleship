import GameBoard from "./GameBoard";

class Player {

    isHuman;
    gameBoard;

    constructor(isHuman) {
        this.isHuman = isHuman;
        this.gameBoard = new GameBoard();
    }
}

export default Player;