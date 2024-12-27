import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";

class Player {

    name;
    isHuman;
    unplacedShips;
    gameBoard;

    constructor(name, isHuman) {
        this.name = name;
        this.isHuman = isHuman;
        this.gameBoard = new GameBoard();

        this.unplacedShips = new Array(new Ship("Carrier", 5),
            new Ship("Battleship", 4),
            new Ship("Destroyer", 3),
            new Ship("Submarine", 3),
            new Ship("Patrol Boat", 2));
    }

    hasUnplacedShips() {
        return this.unplacedShips.length >= 0;
    }
}

export default Player;