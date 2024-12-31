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
        let hasAttackBeenPerformed = gameBoard.lastCoordinatesAttacked[0] !== -1 && gameBoard.lastCoordinatesAttacked[1] !== -1;
        let isLastAttackMiss = gameBoard.lastCoordinatesAttacked[0] !== -1 && gameBoard.lastCoordinatesAttacked[1] !== -1 && !gameBoard.doesShipExist(gameBoard.lastCoordinatesAttacked);
        let isAttackInProgress = (gameBoard.lastHit[0] !== -1 && gameBoard.lastHit[1] !== -1) && !gameBoard.isShipSunk(gameBoard.lastHit);
        let didLastAttackSinkShip = gameBoard.lastCoordinatesAttacked[0] !== -1 && gameBoard.lastCoordinatesAttacked[1] !== -1 && gameBoard.isShipSunk(gameBoard.lastCoordinatesAttacked);
        
        if (!hasAttackBeenPerformed || (isLastAttackMiss && !isAttackInProgress) || didLastAttackSinkShip) {
            gameBoard.receiveAttack(this.#generateRandomAttackCoordinates(gameBoard));
        } else {
            const lastHitAdjacentHits = gameBoard.getAdjacentHits(gameBoard.lastHit);
            const validLastHitAdjacentHits = lastHitAdjacentHits.filter((coordinates) => coordinates !== null && !gameBoard.isShipSunk(coordinates));
            if (validLastHitAdjacentHits.length === 0) {
                const lastHitAdjacentCoordinates = gameBoard.getAdjacentCoordinates(gameBoard.lastHit);
                const validLastHitAdjacentCoordinates = lastHitAdjacentCoordinates.filter((coordinates) => coordinates !== null && !gameBoard.areCoordinatesAttacked(coordinates));
                gameBoard.receiveAttack(validLastHitAdjacentCoordinates[NumberUtils.getRandomIntegerInRange(0, validLastHitAdjacentCoordinates.length - 1)]);
            } else {
                let lastHitAdjacentHitsCounter = 0;
                while(lastHitAdjacentHitsCounter < lastHitAdjacentHits.length && (lastHitAdjacentHits[lastHitAdjacentHitsCounter] === null || gameBoard.isShipSunk(lastHitAdjacentHits[lastHitAdjacentHitsCounter]))) {
                    lastHitAdjacentHitsCounter++;
                }
                let oppositeLastHitAdjacentHitsCounter = (lastHitAdjacentHitsCounter + 2) % 4;
                let perpendicularLastHitAdjacentHitsCounter = (lastHitAdjacentHitsCounter + 1) % 4;
                let oppositePerpendicularLastHitAdjacentHitsCounter = (perpendicularLastHitAdjacentHitsCounter + 2) % 4;
                
                const lastHitAdjacentCoordinates = gameBoard.getAdjacentCoordinates(gameBoard.lastHit);

                let attackOption1 = this.#traverseAttackPath(gameBoard, lastHitAdjacentHits[lastHitAdjacentHitsCounter], lastHitAdjacentHitsCounter);
                let attackOption2 = this.#traverseAttackPath(gameBoard, lastHitAdjacentCoordinates[oppositeLastHitAdjacentHitsCounter], oppositeLastHitAdjacentHitsCounter);
                let attackOption3 = this.#traverseAttackPath(gameBoard, lastHitAdjacentCoordinates[perpendicularLastHitAdjacentHitsCounter], perpendicularLastHitAdjacentHitsCounter);
                let attackOption4 = this.#traverseAttackPath(gameBoard, lastHitAdjacentCoordinates[oppositePerpendicularLastHitAdjacentHitsCounter], oppositePerpendicularLastHitAdjacentHitsCounter);

                if (attackOption1 !== null) {
                    gameBoard.receiveAttack(attackOption1);
                } else if (attackOption2 !== null) {
                    gameBoard.receiveAttack(attackOption2);
                } else if (attackOption3 !== null) {
                    gameBoard.receiveAttack(attackOption3);
                } else {
                    gameBoard.receiveAttack(attackOption4);
                }
            }
        }
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

    #traverseAttackPath(gameBoard, startingCoordinates, direction) {
        if (startingCoordinates === null || (gameBoard.areCoordinatesAttacked(startingCoordinates) && (!gameBoard.doesShipExist(startingCoordinates) || gameBoard.isShipSunk(startingCoordinates)))) {
            return null;
        } else if (startingCoordinates !== null && !gameBoard.areCoordinatesAttacked(startingCoordinates)) {
            return startingCoordinates;
        }

        return this.#traverseAttackPath(gameBoard, gameBoard.getAdjacentCoordinates(startingCoordinates)[direction], direction);
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