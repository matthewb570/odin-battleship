import NumberUtils from "./NumberUtils.js";
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

        const currentPlayer = this.getCurrentPlayer();
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

    getCurrentPlayer() {
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
        // if (last attack was miss and no ship attack is in progress) or (last attack sunk ship)
        //   pick random space and attack
        // else
        //   if first hit has no adjacent hits
        //     pick random adjacent space and attack
        //   else
        //     traverse line of hits until reaching an empty space or a miss
        //     if space is empty
        //       attack
        //     if space is a miss
        //       traverse line of hits in other direction until reaching an empty space or a miss
        //       if space is empty
        //         attack
        //       if space is a miss, two ships are in play
        //     pick next space in line with hits and attack

        gameBoard.receiveAttack(this.#generateRandomAttackCoordinates(gameBoard));
    }

    #generateRandomAttackCoordinates(gameBoard) {
        const eligibleColumns = new Array();
        for (let i = 0; i < gameBoard.getGameBoardWidth(); i++) {
            if (gameBoard.getNumNotAttackedSpacesInColumn(i) > 0) {
                eligibleColumns.push(i);
            }
        }

        const randomX = eligibleColumns[NumberUtils.getRandomIntegerInRange(0, eligibleColumns.length - 1)];

        const eligibleRows = new Array();
        for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
            if (!gameBoard.areCoordinatesAttacked([randomX, i])) {
                eligibleRows.push(i);
            }
        }

        const randomY = eligibleRows[NumberUtils.getRandomIntegerInRange(0, eligibleRows.length - 1)];

        return [randomX, randomY];
    }

    placeShip(coordinates, unplacedShipIndex, orientation) {
        let success;
        
        let currentPlayer = this.getCurrentPlayer();

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