import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";

export default class Player {

    name;
    isHuman;
    unplacedShips;
    gameBoard;

    constructor(name, isHuman) {
        this.name = name;
        this.isHuman = isHuman;
        this.gameBoard = new GameBoard();

        this.unplacedShips = new Array(new Ship(5, "Carrier"),
            new Ship(4, "Battleship"),
            new Ship(3, "Destroyer"),
            new Ship(3, "Submarine"),
            new Ship(2, "Patrol Boat"));
    }

    hasUnplacedShips() {
        return this.unplacedShips.length > 0;
    }
}