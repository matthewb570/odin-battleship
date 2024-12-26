export default class GameBoardDisplay {

    static draw(gameBoard, container, reDrawFunction, isDisabled) {
        let divGameBoard = document.createElement("div");
        divGameBoard.classList.add("game-board");
        if (isDisabled) {
            divGameBoard.classList.add("disabled");
        }
        divGameBoard.appendChild(this.#createTileList(gameBoard, reDrawFunction, isDisabled));

        container.appendChild(divGameBoard);
    }

    static #createTileList(gameBoard, reDrawFunction, isDisabled) {
        let divTileList = document.createElement("div");
        divTileList.classList.add("tile-list");
        for (let j = 0; j < gameBoard.getGameBoardWidth(); j++) {
            for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
                let clickHandler = () => {
                    if (!isDisabled) {
                        gameBoard.receiveAttack([i, j]);
                        reDrawFunction();
                    }
                };
                divTileList.appendChild(this.#createTile(gameBoard.areCoordinatesAttacked([i, j]), gameBoard.doesShipExist([i, j]), clickHandler));
            }
        }

        return divTileList;
    }

    static #createTile(isAttacked, containsShip, clickHandler) {
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
        divTile.onclick = clickHandler;

        return divTile;
    }
}