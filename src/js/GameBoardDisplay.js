export default class GameBoardDisplay {
  static draw(
    gameBoard,
    container,
    highlightShips,
    tileClickHandler,
    isDisabled,
    flashLastCoordinatesAttacked
  ) {
    const divGameBoard = document.createElement("div");
    divGameBoard.classList.add("game-board");
    if (isDisabled) {
      divGameBoard.classList.add("disabled");
    }
    divGameBoard.appendChild(
      this.#createTileList(
        gameBoard,
        highlightShips,
        tileClickHandler,
        flashLastCoordinatesAttacked
      )
    );

    container.appendChild(divGameBoard);
  }

  static #createTileList(
    gameBoard,
    highlightShips,
    tileClickHandler,
    flashLastCoordinatesAttacked
  ) {
    const divTileList = document.createElement("div");
    divTileList.classList.add("tile-list");
    for (let j = 0; j < gameBoard.getGameBoardWidth(); j++) {
      for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
        divTileList.appendChild(
          this.#createTile(
            gameBoard.areCoordinatesAttacked([i, j]),
            gameBoard.doesShipExist([i, j]),
            gameBoard.isShipSunk([i, j]),
            highlightShips,
            () => tileClickHandler(i, j),
            flashLastCoordinatesAttacked &&
              i === gameBoard.lastCoordinatesAttacked[0] &&
              j === gameBoard.lastCoordinatesAttacked[1]
          )
        );
      }
    }

    return divTileList;
  }

  static #createTile(
    isAttacked,
    containsShip,
    containsSunkenShip,
    highlightShip,
    clickHandler,
    flash
  ) {
    const divTile = document.createElement("div");
    divTile.classList.add("tile");

    let colorClass;
    let alternateClass;
    if (isAttacked && containsSunkenShip) {
      colorClass = "sunk";
      alternateClass = highlightShip ? "ship" : "neutral";
    } else if (isAttacked && containsShip) {
      colorClass = "hit";
      alternateClass = highlightShip ? "ship" : "neutral";
    } else if (isAttacked) {
      colorClass = "miss";
      alternateClass = "neutral";
    } else if (containsShip && highlightShip) {
      colorClass = "ship";
      alternateClass = "ship";
    } else {
      colorClass = "neutral";
      alternateClass = "neutral";
    }
    if (flash) {
      this.#flashClass(divTile, colorClass, alternateClass);
    } else {
      divTile.classList.add(colorClass);
    }

    divTile.onclick = clickHandler;

    return divTile;
  }

  static #flashClass(element, finalClass, alternateClass) {
    element.classList.add(alternateClass);
    if (finalClass !== alternateClass) {
      setTimeout(() => {
        element.classList.add(finalClass);
        element.classList.remove(alternateClass);
      }, 1000);
      setTimeout(() => {
        element.classList.remove(finalClass);
        element.classList.add(alternateClass);
      }, 1700);
      setTimeout(() => {
        element.classList.add(finalClass);
        element.classList.remove(alternateClass);
      }, 2400);
    }
  }
}
