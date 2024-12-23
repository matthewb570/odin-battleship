import Ship from "./Ship";

const GAME_BOARD_WIDTH_HEIGHT = 10;

class GameBoard {
    
    gameBoard;

    constructor() {
        this.gameBoard = new Array(GAME_BOARD_WIDTH_HEIGHT);
        for (let i = 0; i < this.gameBoard.length; i++) {
            this.gameBoard[i] = new Array(GAME_BOARD_WIDTH_HEIGHT);
            for (let j = 0; j < this.gameBoard[i].length; j++) {
                this.gameBoard[i][j] = [false, null];
            }
        }
    }

    placeShip(coordinates, length, orientation) {
        let ship = new Ship(length);

        if (!this.#isShipPlacementValid(coordinates, length, orientation)) {
            return false;
        }

        for (let i = 0; i < length; i++) {
            if (orientation === "vertical") {
                this.gameBoard[coordinates[0]][coordinates[1] + i][1] = ship;
            } else {
                this.gameBoard[coordinates[0] + i][coordinates[1]][1] = ship;
            }
        }
        return true;
    }

    receiveAttack(coordinates) {
        if (coordinates[0] < 0 || coordinates[0] >= GAME_BOARD_WIDTH_HEIGHT || coordinates[1] < 0 || coordinates[1] >= GAME_BOARD_WIDTH_HEIGHT || this.areCoordinatesAttacked(coordinates)) {
            return false;
        }
        this.gameBoard[coordinates[0]][coordinates[1]][0] = true;

        let ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
        if (ship !== undefined && ship !== null) {
            ship.hit();
        }
        return true;
    }

    areCoordinatesAttacked(coordinates) {
        return this.gameBoard[coordinates[0]][coordinates[1]][0];
    }

    #isShipPlacementValid(coordinates, length, orientation) {    
        let currentX = coordinates[0];
        let currentY = coordinates[1];
        for (let i = 0; i < length; i++) {
            if (currentX < 0 || currentX >= GAME_BOARD_WIDTH_HEIGHT ||
                currentY < 0 || currentY >= GAME_BOARD_WIDTH_HEIGHT ||
                this.gameBoard[currentX][currentY][1] !== null) {
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

    isShipSunk(coordinates) {
        let ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
        if (ship === undefined || ship === null) {
            return false;
        }
        return ship.isSunk();
    }
}

export default GameBoard;