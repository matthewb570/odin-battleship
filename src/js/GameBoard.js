import Ship from "./Ship.js";

const GAME_BOARD_WIDTH_HEIGHT = 10;

class GameBoard {
    
    gameBoard;
    ships;
    lastCoordinatesAttacked;
    lastHit; // TODO: Add tests for this

    constructor() {
        this.gameBoard = new Array(GAME_BOARD_WIDTH_HEIGHT);
        for (let i = 0; i < this.gameBoard.length; i++) {
            this.gameBoard[i] = new Array(GAME_BOARD_WIDTH_HEIGHT);
            for (let j = 0; j < this.gameBoard[i].length; j++) {
                this.gameBoard[i][j] = [false, null];
            }
        }

        this.ships = new Array();

        this.lastCoordinatesAttacked = new Array(-1, -1);
        this.lastHit = new Array(-1, -1);
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
        this.ships.push(ship);
        return true;
    }

    receiveAttack(coordinates) {
        if (coordinates[0] < 0 || coordinates[0] >= GAME_BOARD_WIDTH_HEIGHT || coordinates[1] < 0 || coordinates[1] >= GAME_BOARD_WIDTH_HEIGHT || this.areCoordinatesAttacked(coordinates)) {
            return false;
        }
        this.gameBoard[coordinates[0]][coordinates[1]][0] = true;
        this.lastCoordinatesAttacked = coordinates;

        let ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
        if (ship !== undefined && ship !== null) {
            ship.hit();
            this.lastHit = coordinates;
        }
        return true;
    }

    areCoordinatesAttacked(coordinates) {
        return this.gameBoard[coordinates[0]][coordinates[1]][0];
    }

    doesShipExist(coordinates) {
        let ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
        return ship !== undefined && ship !== null;
    }

    #isShipPlacementValid(coordinates, length, orientation) {    
        let currentX = coordinates[0];
        let currentY = coordinates[1];
        for (let i = 0; i < length; i++) {
            if (!this.#areCoordinatesInBounds([currentX, currentY]) ||
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

    #areCoordinatesInBounds(coordinates) {
        return coordinates[0] >= 0 && coordinates[0] < GAME_BOARD_WIDTH_HEIGHT && coordinates[1] >= 0 && coordinates[1] < GAME_BOARD_WIDTH_HEIGHT;
    }

    isShipSunk(coordinates) {
        let ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
        if (ship === undefined || ship === null) {
            return false;
        }
        return ship.isSunk();
    }

    areAllShipsSunk() {
        return this.ships.reduce((previous, current) => {
            if (!previous) {
                return previous;
            }
            return current.isSunk();
        }, true);
    }

    getGameBoardWidth() {
        return GAME_BOARD_WIDTH_HEIGHT;
    }

    getGameBoardHeight() {
        return GAME_BOARD_WIDTH_HEIGHT;
    }

    getNumNotAttackedSpacesInColumn(x) {
        if (x < 0 || x >= GAME_BOARD_WIDTH_HEIGHT) {
            return undefined;
        }

        let numNotAttackedSpacesInColumn = GAME_BOARD_WIDTH_HEIGHT;
        
        for (let y = 0; y < GAME_BOARD_WIDTH_HEIGHT; y++) {
            if (this.areCoordinatesAttacked([x, y])) {
                numNotAttackedSpacesInColumn--;
            }
        }

        return numNotAttackedSpacesInColumn;
    }

    getNumNotAttackedSpacesInRow(y) {
        if (y < 0 || y >= GAME_BOARD_WIDTH_HEIGHT) {
            return undefined;
        }

        let numNotAttackedSpacesInRow = GAME_BOARD_WIDTH_HEIGHT;
        
        for (let x = 0; x < GAME_BOARD_WIDTH_HEIGHT; x++) {
            if (this.areCoordinatesAttacked([x, y])) {
                numNotAttackedSpacesInRow--;
            }
        }

        return numNotAttackedSpacesInRow;
    }

    getAdjacentHits(coordinates) {
        const adjacentHits = new Array();

        const adjacentCoordinates = this.getAdjacentCoordinates(coordinates);

        for (let i = 0; i < adjacentCoordinates.length; i++) {
            if (adjacentCoordinates[i] !== null && this.areCoordinatesAttacked(adjacentCoordinates[i]) && this.doesShipExist(adjacentCoordinates[i])) {
                adjacentHits.push(adjacentCoordinates[i]);
            } else {
                adjacentHits.push(null);
            }
        }

        return adjacentHits;
        
    }

    getAdjacentCoordinates(coordinates) {
        if (!this.#areCoordinatesInBounds(coordinates)) {
            return new Array();
        }

        const adjacentCoordinates = new Array();
        
        const top = [coordinates[0], coordinates[1] - 1];
        const right = [coordinates[0] + 1, coordinates[1]];
        const bottom = [coordinates[0], coordinates[1] + 1];
        const left = [coordinates[0] - 1, coordinates[1]];

        if (top[1] >= 0) {
            adjacentCoordinates.push(top);
        } else {
            adjacentCoordinates.push(null);
        }

        if (right[0] < GAME_BOARD_WIDTH_HEIGHT) {
            adjacentCoordinates.push(right);
        } else {
            adjacentCoordinates.push(null);
        }

        if (bottom[1] < GAME_BOARD_WIDTH_HEIGHT) {
            adjacentCoordinates.push(bottom);
        } else {
            adjacentCoordinates.push(null);
        }

        if (left[0] >= 0) {
            adjacentCoordinates.push(left);
        } else {
            adjacentCoordinates.push(null);
        }

        return adjacentCoordinates;
    }
}

export default GameBoard;