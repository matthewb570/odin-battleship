import GameBoardDisplay from "./GameBoardDisplay.js";

export default class GameDisplay {

    static draw(game, container) {
        const reDrawFunction = () => {
            GameDisplay.draw(game, container);
        }

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const divGame = document.createElement("div");
        divGame.classList.add("game");
        if (game.hasUnplacedShips()) {
            divGame.appendChild(this.#createShipPlacementPhaseDisplay(game, reDrawFunction));
        } else {
            divGame.appendChild(this.#createBattlePhaseDisplay(game, reDrawFunction));
        }
        
        container.appendChild(divGame);
    }

    static #createShipPlacementPhaseDisplay(game, reDrawFunction) {
        const divShipPlacementPhaseDisplay = document.createElement("div");
        divShipPlacementPhaseDisplay.classList.add("ship-placement-phase-display");

        const currentPlayer = game.getCurrentPlayer();

        const selectShips = this.#createShipDropdown(currentPlayer);
        const selectDirection = this.#createShipDirectionDropdown();

        const divShipPlacementDropdownGroup = document.createElement("div");
        divShipPlacementDropdownGroup.classList.add("ship-placement-dropdown-group");
        divShipPlacementDropdownGroup.appendChild(selectShips);
        divShipPlacementDropdownGroup.appendChild(selectDirection);

        divShipPlacementPhaseDisplay.appendChild(divShipPlacementDropdownGroup);

        const tileClickHandler = (x, y) => {
            if (game.placeShip([x, y], selectShips.value, selectDirection.value)) {
                reDrawFunction();
            }
        }

        divShipPlacementPhaseDisplay.appendChild(this.#createLabeledGameBoard(currentPlayer.name, currentPlayer.gameBoard, true, tileClickHandler, false));

        return divShipPlacementPhaseDisplay;
    }

    static #createShipDropdown(currentPlayer) {
        const selectShips = document.createElement("select");
        for (const shipIndex in currentPlayer.unplacedShips) {
            const ship = currentPlayer.unplacedShips[shipIndex];
            const optionShip = document.createElement("option");
            optionShip.textContent = `${ship.name} (${ship.length})`;
            optionShip.value = shipIndex;
            selectShips.appendChild(optionShip);
        }

        return selectShips;
    }

    static #createShipDirectionDropdown() {
        const optionHorizontal = document.createElement("option");
        optionHorizontal.value = "horizontal";
        optionHorizontal.textContent = "Horizontal";

        const optionVertical = document.createElement("option");
        optionVertical.value = "vertical";
        optionVertical.textContent = "Vertical";

        const selectDirection = document.createElement("select");
        selectDirection.appendChild(optionHorizontal);
        selectDirection.appendChild(optionVertical);

        return selectDirection;
    }

    static #createBattlePhaseDisplay(game, reDrawFunction) {
        const divBattlePhaseDisplay = document.createElement("div");
        divBattlePhaseDisplay.classList.add("battle-phase-display");

        if (game.isOver()) {
            const currentPlayer = game.getCurrentPlayer();
            const divGameResult = document.createElement("div");
            divGameResult.classList.add("game-result");
            divGameResult.textContent = `${currentPlayer.name} wins!`;
            divBattlePhaseDisplay.appendChild(divGameResult);
        }
        divBattlePhaseDisplay.appendChild(this.#createLabeledGameBoardList(game, reDrawFunction));

        return divBattlePhaseDisplay;
    }

    static #createLabeledGameBoardList(game, reDrawFunction) {
        const isPlayer1GameBoardDisabled = game.currentTurn !== 1 || game.isOver();
        const isPlayer2GameBoardDisabled = game.currentTurn !== 0 || game.isOver();
        
        const tileClickHandler = (isDisabled, x, y) => {
            if (!isDisabled) {
                game.receiveAttack([x, y]);
                reDrawFunction();
            }
        }

        const divLabeledGameBoardList = document.createElement("div");
        divLabeledGameBoardList.classList.add("labeled-game-board-list");
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player1.name,
            game.player1.gameBoard,
            isPlayer1GameBoardDisabled,
            (x, y) => tileClickHandler(isPlayer1GameBoardDisabled, x, y),
            isPlayer1GameBoardDisabled, !game.player2.isHuman && (!game.isOver() || game.currentTurn === 1)));
        divLabeledGameBoardList.appendChild(this.#createLabeledGameBoard(game.player2.name,
            game.player2.gameBoard,
            isPlayer2GameBoardDisabled,
            (x, y) => tileClickHandler(isPlayer2GameBoardDisabled, x, y),
            isPlayer2GameBoardDisabled, !game.player1.isHuman && (!game.isOver() || game.currentTurn === 0)));
        return divLabeledGameBoardList;
    }

    static #createLabeledGameBoard(playerName, gameBoard, highlightShips, tileClickHandler, isDisabled, flashLastCoordinatesAttacked) {
        const divPlayerName = document.createElement("div");
        divPlayerName.classList.add("player-name");
        divPlayerName.textContent = playerName;
        
        const divLabeledGameBoard = document.createElement("div");
        divLabeledGameBoard.classList.add("labeled-game-board");
        divLabeledGameBoard.appendChild(divPlayerName);
        GameBoardDisplay.draw(gameBoard, divLabeledGameBoard, highlightShips, tileClickHandler, isDisabled, flashLastCoordinatesAttacked);

        return divLabeledGameBoard;
    }
}