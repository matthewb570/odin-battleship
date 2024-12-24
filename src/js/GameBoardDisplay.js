export default class GameBoardDisplay {

    static draw(gameBoard, container) {
        let divGameBoard = document.createElement("div");
        divGameBoard.classList.add("game-board");
        divGameBoard.appendChild(this.#createTileList(gameBoard));

        container.appendChild(divGameBoard);
    }

    static #createTileList(gameBoard) {
        let divTileList = document.createElement("div");
        divTileList.classList.add("tile-list");
        for (let i = 0; i < gameBoard.getGameBoardWidth(); i++) {
            for (let j = 0; j < gameBoard.getGameBoardHeight(); j++) {
                divTileList.appendChild(this.#createTile(gameBoard.areCoordinatesAttacked([i, j]), gameBoard.doesShipExist([i, j])));
            }
        }

        return divTileList;
    }

    static #createTile(isAttacked, containsShip) {
        const divTile = document.createElement("div");
        divTile.classList.add("tile");
        if (isAttacked) {
            if (containsShip) {
                divTile.classList.add("hit");
            } else {
                divTile.classList.add("miss");
            }
        } else {
            divTile.classList.add("neutral");
        }

        return divTile;
    }
}