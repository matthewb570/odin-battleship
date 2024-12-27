import GameBoardDisplay from "./GameBoardDisplay.js";

export default class GameDisplay {

    static draw(game, container) {
        let reDrawFunction = () => {
            GameDisplay.draw(game, container);
        }

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let divGame = document.createElement("div");
        divGame.classList.add("game");
        if (game.hasUnplacedShips()) {
            divGame.appendChild(this.#createShipPlacementPhaseDisplay(game, reDrawFunction));
        } else {
            divGame.appendChild(this.#createBattlePhaseDisplay(game, reDrawFunction));
        }
        
        container.appendChild(divGame);
    }

    static #createShipPlacementPhaseDisplay(game, reDrawFunction) {
        // TODO: Add ability for computer ship placement
        let divShipPlacementPhaseDisplay = document.createElement("div");
        divShipPlacementPhaseDisplay.classList.add("ship-placement-phase-display");

        let selectShips = document.createElement("select");
        for (const shipIndex in game.player1.unplacedShips) {
            const ship = game.player1.unplacedShips[shipIndex];
            const optionShip = document.createElement("option");
            optionShip.textContent = `${ship.name} (${ship.length})`;
            optionShip.value = shipIndex;
            selectShips.appendChild(optionShip);
        }
        divShipPlacementPhaseDisplay.appendChild(selectShips);

        let optionHorizontal = document.createElement("option");
        optionHorizontal.value = "horizontal";
        optionHorizontal.textContent = "Horizontal";

        let optionVertical = document.createElement("option");
        optionVertical.value = "vertical";
        optionVertical.textContent = "Vertical";

        let selectDirection = document.createElement("select");
        selectDirection.appendChild(optionHorizontal);
        selectDirection.appendChild(optionVertical);
        divShipPlacementPhaseDisplay.appendChild(selectDirection);

        let tileClickHandler = (x, y) => {
            if (game.placeShip([x, y], selectShips.value, selectDirection.value)) {
                reDrawFunction();
            }
        }

        divShipPlacementPhaseDisplay.appendChild(this.#createLabeledGameBoard(game.player1.name, game.player1.gameBoard, tileClickHandler, false));

        return divShipPlacementPhaseDisplay;
    }

    static #createBattlePhaseDisplay(game, reDrawFunction) {
        let divBattlePhaseDisplay = document.createElement("div");
        divBattlePhaseDisplay.classList.add("battle-phase-display");

        if (game.isOver()) {
            let divGameResult = document.createElement("div");
            divGameResult.classList.add("game-result");
            divGameResult.textContent = `${game.currentTurn === 0 ? game.player1.name : game.player2.name} wins!`;
            divBattlePhaseDisplay.appendChild(divGameResult);
        }
        divBattlePhaseDisplay.appendChild(this.#createLabeledGameBoardList(game, reDrawFunction));

        return divBattlePhaseDisplay;
    }

    static #createLabeledGameBoardList(game, reDrawFunction) {
        let isPlayer1GameBoardDisabled = game.currentTurn !== 1 || game.isOver();
        let isPlayer2GameBoardDisabled = game.currentTurn !== 0 || game.isOver();
        
        let tileClickHandler = (gameBoard, isDisabled, x, y) => {
            if (!isDisabled) {
                gameBoard.receiveAttack([x, y]);
                reDrawFunction();
            }
        }
        
        let divLabeledGameBoardList = document.createElement("div");
        divLabeledGameBoardList.classList.add("labeled-game-board-list");
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player1.name,
            game.player1.gameBoard,
            (x, y) => tileClickHandler(game.player1.gameBoard, isPlayer1GameBoardDisabled, x, y),
            reDrawFunction, isPlayer1GameBoardDisabled));
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player2.name,
            game.player2.gameBoard,
            (x, y) => tileClickHandler(game.player2.gameBoard, isPlayer2GameBoardDisabled, x, y),
            reDrawFunction, isPlayer2GameBoardDisabled));
        return divLabeledGameBoardList;
    }

    static #createLabeledGameBoard(playerName, gameBoard, tileClickHandler, isDisabled) {
        let divPlayerName = document.createElement("div");
        divPlayerName.classList.add("player-name");
        divPlayerName.textContent = playerName;
        
        let divLabeledGameBoard = document.createElement("div");
        divLabeledGameBoard.classList.add("labeled-game-board");
        divLabeledGameBoard.appendChild(divPlayerName);
        GameBoardDisplay.draw(gameBoard, divLabeledGameBoard, tileClickHandler, isDisabled);

        return divLabeledGameBoard;
    }
}