export default class GameBoardDisplay {

    static draw(gameBoard, container, highlightShips, tileClickHandler, isDisabled) {
        let divGameBoard = document.createElement("div");
        divGameBoard.classList.add("game-board");
        if (isDisabled) {
            divGameBoard.classList.add("disabled");
        }
        divGameBoard.appendChild(this.#createTileList(gameBoard, highlightShips, tileClickHandler));

        container.appendChild(divGameBoard);
    }

    static #createTileList(gameBoard, highlightShips, tileClickHandler) {
        let divTileList = document.createElement("div");
        divTileList.classList.add("tile-list");
        for (let j = 0; j < gameBoard.getGameBoardWidth(); j++) {
            for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
                divTileList.appendChild(this.#createTile(gameBoard.areCoordinatesAttacked([i, j]),
                gameBoard.doesShipExist([i, j]),
                highlightShips,
                () => tileClickHandler(i, j)));
            }
        }

        return divTileList;
    }

    static #createTile(isAttacked, containsShip, highlightShip, clickHandler) {
        const divTile = document.createElement("div");
        divTile.classList.add("tile");
        if (isAttacked && containsShip) {
            divTile.classList.add("hit");
        } else if (isAttacked) {
            divTile.classList.add("miss");
        } else if (containsShip && highlightShip) {
            divTile.classList.add("ship");
        } else {
            divTile.classList.add("neutral");
        }
        divTile.onclick = clickHandler;

        return divTile;
    }
}