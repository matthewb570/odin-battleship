import Player from "./Player.js";

export default class Game {
    
    player1;
    player2;
    currentTurn;

    constructor() {
        this.player1 = new Player("Player 1", true);
        this.player2 = new Player("Computer", false);

        this.player1.gameBoard.placeShip([0, 0], 5, "vertical");
        this.player1.gameBoard.placeShip([5, 5], 3, "horizontal");

        this.player2.gameBoard.placeShip([0, 0], 5, "horizontal");
        this.player2.gameBoard.placeShip([5, 5], 3, "vertical");

        this.currentTurn = 0;
    }

    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % 2;
        if (this.currentTurn === 0 && !this.player1.isHuman) {
            this.#performComputerMove(this.player2.gameBoard);
            this.nextTurn();
            
        } else if (this.currentTurn === 1 && !this.player2.isHuman) {
            this.#performComputerMove(this.player1.gameBoard);
            this.nextTurn();
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

    isOver() {
        return this.player1.gameBoard.areAllShipsSunk() || this.player2.gameBoard.areAllShipsSunk();
    }
}