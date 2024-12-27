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
        if (this.hasUnplacedShips() || !this.isOver()) {
            this.currentTurn = (this.currentTurn + 1) % 2;
        }

        const currentPlayer = this.#getCurrentPlayer();
        if (!currentPlayer.isHuman) {
            if (this.hasUnplacedShips()) {
                this.#performComputerShipPlacements(currentPlayer);
                this.nextTurn();
            } else if (!this.isOver()) {
                if (this.currentTurn === 0) {
                    this.#performComputerMove(this.player2.gameBoard);
                    this.nextTurn();
                } else if (this.currentTurn === 1) {
                    this.#performComputerMove(this.player1.gameBoard);
                    this.nextTurn();
                }
            }
        }
    }

    #getCurrentPlayer() {
        if (this.currentTurn === 0) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    #getCurrentPlayerOpponent() {
        if (this.currentTurn === 0) {
            return this.player2;
        } else {
            return this.player1;
        }
    }

    #performComputerShipPlacements(player) {
        for (let i = 0; i < player.unplacedShips.length; i++) {
            player.gameBoard.placeShip([i, i], player.unplacedShips[i].length, "horizontal");
        }
        player.unplacedShips = new Array();
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

    placeShip(coordinates, unplacedShipIndex, orientation) {
        let success;
        
        let currentPlayer = this.#getCurrentPlayer();

        success = currentPlayer.gameBoard.placeShip(coordinates, currentPlayer.unplacedShips[unplacedShipIndex].length, orientation);
        
        if (success) {
            currentPlayer.unplacedShips.splice(unplacedShipIndex, 1);
            if (!currentPlayer.hasUnplacedShips()) {
                this.nextTurn();
            }
        }

        return success;
    }

    receiveAttack(coordinates) {
        const currentPlayerOpponent = this.#getCurrentPlayerOpponent();
        if (currentPlayerOpponent.gameBoard.receiveAttack(coordinates)) {
            this.nextTurn();
        }
    }

    hasUnplacedShips() {
        return this.player1.hasUnplacedShips() || this.player2.hasUnplacedShips();
    }

    isOver() {
        return this.player1.gameBoard.areAllShipsSunk() || this.player2.gameBoard.areAllShipsSunk();
    }
}