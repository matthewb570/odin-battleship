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
    const orientationOptions = ["horizontal", "vertical"];

    for (let i = 0; i < player.unplacedShips.length; i++) {
      const orientationIndex = NumberUtils.getRandomIntegerInRange(
        0,
        orientationOptions.length - 1
      );
      let randomX = NumberUtils.getRandomIntegerInRange(
        0,
        player.gameBoard.getGameBoardWidth()
      );
      let randomY = NumberUtils.getRandomIntegerInRange(
        0,
        player.gameBoard.getGameBoardHeight()
      );
      while (
        !player.gameBoard.placeShip(
          [randomX, randomY],
          player.unplacedShips[i].length,
          orientationOptions[orientationIndex]
        )
      ) {
        randomX = NumberUtils.getRandomIntegerInRange(
          0,
          player.gameBoard.getGameBoardWidth()
        );
        randomY = NumberUtils.getRandomIntegerInRange(
          0,
          player.gameBoard.getGameBoardHeight()
        );
      }
    }
    player.unplacedShips = new Array();
  }

  #performComputerMove(gameBoard) {
    const hasAttackBeenPerformed =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1;
    const isLastAttackMiss =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1 &&
      !gameBoard.doesShipExist(gameBoard.lastCoordinatesAttacked);
    const isAttackInProgress =
      gameBoard.lastHit[0] !== -1 &&
      gameBoard.lastHit[1] !== -1 &&
      !gameBoard.isShipSunk(gameBoard.lastHit);
    const didLastAttackSinkShip =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1 &&
      gameBoard.isShipSunk(gameBoard.lastCoordinatesAttacked);

    if (
      !hasAttackBeenPerformed ||
      (isLastAttackMiss && !isAttackInProgress) ||
      didLastAttackSinkShip
    ) {
      gameBoard.receiveAttack(this.#generateRandomAttackCoordinates(gameBoard));
    } else {
      const lastHitAdjacentHits = gameBoard.getAdjacentHits(gameBoard.lastHit);
      const validLastHitAdjacentHits = lastHitAdjacentHits.filter(
        (coordinates) =>
          coordinates !== null && !gameBoard.isShipSunk(coordinates)
      );
      if (validLastHitAdjacentHits.length === 0) {
        gameBoard.receiveAttack(
          this.#selectRandomAdjacentCoordinatesForAttack(
            gameBoard,
            gameBoard.lastHit
          )
        );
      } else {
        gameBoard.receiveAttack(
          this.#selectCoordinatesForAttackByAttackPath(
            gameBoard,
            lastHitAdjacentHits
          )
        );
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

    const randomX =
      eligibleColumns[
        NumberUtils.getRandomIntegerInRange(0, eligibleColumns.length - 1)
      ];

    const eligibleRows = new Array();
    for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
      if (!gameBoard.areCoordinatesAttacked([randomX, i])) {
        eligibleRows.push(i);
      }
    }

    const randomY =
      eligibleRows[
        NumberUtils.getRandomIntegerInRange(0, eligibleRows.length - 1)
      ];

    return [randomX, randomY];
  }

  #selectRandomAdjacentCoordinatesForAttack(gameBoard, startingCoordinates) {
    const adjacentCoordinates =
      gameBoard.getAdjacentCoordinates(startingCoordinates);
    const validAdjacentCoordinates = adjacentCoordinates.filter(
      (coordinates) =>
        coordinates !== null && !gameBoard.areCoordinatesAttacked(coordinates)
    );

    return validAdjacentCoordinates[
      NumberUtils.getRandomIntegerInRange(
        0,
        validAdjacentCoordinates.length - 1
      )
    ];
  }

  #selectCoordinatesForAttackByAttackPath(gameBoard, lastHitAdjacentHits) {
    let directionCounter = 0;
    while (
      directionCounter < lastHitAdjacentHits.length &&
      (lastHitAdjacentHits[directionCounter] === null ||
        gameBoard.isShipSunk(lastHitAdjacentHits[directionCounter]))
    ) {
      directionCounter++;
    }
    const oppositeDirectionCounter =
      (directionCounter + 2) % lastHitAdjacentHits.length;
    const perpendicularDirectionCounter =
      (directionCounter + 1) % lastHitAdjacentHits.length;
    const oppositePerpendicularDirectionCounter =
      (perpendicularDirectionCounter + 2) % lastHitAdjacentHits.length;

    const lastHitAdjacentCoordinates = gameBoard.getAdjacentCoordinates(
      gameBoard.lastHit
    );

    const attackOption1 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentHits[directionCounter],
      directionCounter
    );
    const attackOption2 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[oppositeDirectionCounter],
      oppositeDirectionCounter
    );
    const attackOption3 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[perpendicularDirectionCounter],
      perpendicularDirectionCounter
    );
    const attackOption4 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[oppositePerpendicularDirectionCounter],
      oppositePerpendicularDirectionCounter
    );

    if (attackOption1 !== null) {
      return attackOption1;
    } else if (attackOption2 !== null) {
      return attackOption2;
    } else if (attackOption3 !== null) {
      return attackOption3;
    } else {
      return attackOption4;
    }
  }

  #traverseAttackPath(gameBoard, startingCoordinates, direction) {
    if (
      startingCoordinates === null ||
      (gameBoard.areCoordinatesAttacked(startingCoordinates) &&
        (!gameBoard.doesShipExist(startingCoordinates) ||
          gameBoard.isShipSunk(startingCoordinates)))
    ) {
      return null;
    } else if (
      startingCoordinates !== null &&
      !gameBoard.areCoordinatesAttacked(startingCoordinates)
    ) {
      return startingCoordinates;
    }

    return this.#traverseAttackPath(
      gameBoard,
      gameBoard.getAdjacentCoordinates(startingCoordinates)[direction],
      direction
    );
  }

  placeShip(coordinates, unplacedShipIndex, orientation) {
    const currentPlayer = this.getCurrentPlayer();

    const success = currentPlayer.gameBoard.placeShip(
      coordinates,
      currentPlayer.unplacedShips[unplacedShipIndex].length,
      orientation
    );

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
    return (
      this.player1.gameBoard.areAllShipsSunk() ||
      this.player2.gameBoard.areAllShipsSunk()
    );
  }
}
