import GameBoardDisplay from "./GameBoardDisplay.js";

export default class GameDisplay {

    static draw(game, container) {
        let reDrawFunction = () => {
            game.nextTurn();
            GameDisplay.draw(game, container);
        }

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let divGame = document.createElement("div");
        divGame.classList.add("game");
        if (game.isOver()) {
            let divGameResult = document.createElement("div");
            divGameResult.classList.add("game-result");
            divGameResult.textContent = `${game.currentTurn === 0 ? game.player1.name : game.player2.name} wins!`;
            divGame.appendChild(divGameResult);
        }
        divGame.appendChild(this.#createLabeledGameBoardList(game, reDrawFunction));
        
        container.appendChild(divGame);
    }

    static #createLabeledGameBoardList(game, reDrawFunction) {
        let divLabeledGameBoardList = document.createElement("div");
        divLabeledGameBoardList.classList.add("labeled-game-board-list");
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player1.name, game.player1.gameBoard, reDrawFunction, game.currentTurn !== 1 || game.isOver()));
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player2.name, game.player2.gameBoard, reDrawFunction, game.currentTurn !== 0 || game.isOver()));
        return divLabeledGameBoardList;
    }

    static #createLabeledGameBoard(playerName, gameBoard, reDrawFunction, isDisabled) {
        let divPlayerName = document.createElement("div");
        divPlayerName.classList.add("player-name");
        divPlayerName.textContent = playerName;
        
        let divLabeledGameBoard = document.createElement("div");
        divLabeledGameBoard.classList.add("labeled-game-board");
        divLabeledGameBoard.appendChild(divPlayerName);
        GameBoardDisplay.draw(gameBoard, divLabeledGameBoard, reDrawFunction, isDisabled);

        return divLabeledGameBoard;
    }
}