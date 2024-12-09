import Ship from "./Ship";

const GAME_BOARD_WIDTH_HEIGHT = 10;

class GameBoard {
    
    gameBoard;

    constructor() {
        this.gameBoard = new Array(GAME_BOARD_WIDTH_HEIGHT);
        for (let i = 0; i < this.gameBoard.length; i++) {
            this.gameBoard[i] = new Array(GAME_BOARD_WIDTH_HEIGHT);
        }
    }

    placeShip(coordinates, length, orientation) {
        let ship = new Ship(length);

        if (!this.#isShipPlacementValid(coordinates, length, orientation)) {
            return false;
        }

        for (let i = 0; i < length; i++) {
            if (orientation === "vertical") {
                this.gameBoard[coordinates[0]][coordinates[1] + i] = ship;
            } else {
                this.gameBoard[coordinates[0] + i][coordinates[1]] = ship;
            }
        }
        return true;
    }

    #isShipPlacementValid(coordinates, length, orientation) {    
        let currentX = coordinates[0];
        let currentY = coordinates[1];
        for (let i = 0; i < length; i++) {
            if (currentX < 0 || currentX >= GAME_BOARD_WIDTH_HEIGHT ||
                currentY < 0 || currentY >= GAME_BOARD_WIDTH_HEIGHT ||
                this.gameBoard[currentX][currentY] !== undefined) {
                return false;
            }
            
            if (orientation === "vertical") {
                currentY++;
            } else {
                currentX++;
            }
        }
        return true;
    }
}

export default GameBoard;