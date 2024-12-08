import GameBoard from "../js/GameBoard";

describe("game board", () => {
    test("ship is placed when specified coordinates are available", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 0], 5, "vertical")).toBeTruthy();
    });

    test("ship is not placed when specified coordinates are occupied", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 5, "vertical");
        expect(gameBoard.placeShip([0, 1], 5, "horizontal")).toBeFalsy();
    });

    // TODO: Add more tests
});