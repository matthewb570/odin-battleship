import Player from "./Player.js";

export default class Game {
    
    player1;
    player2;
    currentTurn;

    constructor() {
        this.player1 = new Player("Player 1", true);
        this.player2 = new Player("Computer", false);

        this.currentTurn = 0;
    }

    nextTurn() {
        if (!this.isOver()) {
            this.currentTurn = (this.currentTurn + 1) % 2;
            if (this.currentTurn === 0 && !this.player1.isHuman) {
                this.#performComputerMove(this.player2.gameBoard);
                this.nextTurn();
            } else if (this.currentTurn === 1 && !this.player2.isHuman) {
                this.#performComputerMove(this.player1.gameBoard);
                this.nextTurn();
            }
        }
    }

    #performComputerMove(gameBoard) {
        for (let j = 0; j < gameBoard.getGameBoardHeight(); j++) {
            for (let i = 0; i < gameBoard.getGameBoardWidth(); i++) {
                if (!gameBoard.areCoordinatesAttacked([i, j])) {
                    gameBoard.receiveAttack([i, j]);
                    return;
                }
            }
        }   
    }

    hasUnplacedShips() {
        return this.player1.hasUnplacedShips() || this.player2.hasUnplacedShips();
    }

    isOver() {
        return this.player1.gameBoard.areAllShipsSunk() || this.player2.gameBoard.areAllShipsSunk();
    }
}