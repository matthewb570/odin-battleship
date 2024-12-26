import GameBoardDisplay from "./GameBoardDisplay.js";

export default class GameDisplay {

    static draw(game, container) {
        let divGame = document.createElement("div");
        divGame.classList.add("game");
        divGame.appendChild(this.#createLabeledGameBoardList(game));
        
        container.appendChild(divGame);
    }

    static #createLabeledGameBoardList(game) {
        let divLabeledGameBoardList = document.createElement("div");
        divLabeledGameBoardList.classList.add("labeled-game-board-list");
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player1.name, game.player1.gameBoard));
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player2.name, game.player2.gameBoard));
        return divLabeledGameBoardList;
    }

    static #createLabeledGameBoard(playerName, gameBoard) {
        let divPlayerName = document.createElement("div");
        divPlayerName.classList.add("player-name");
        divPlayerName.textContent = playerName;
        
        let divLabeledGameBoard = document.createElement("div");
        divLabeledGameBoard.classList.add("labeled-game-board");
        divLabeledGameBoard.appendChild(divPlayerName);
        GameBoardDisplay.draw(gameBoard, divLabeledGameBoard);

        return divLabeledGameBoard;
    }
}