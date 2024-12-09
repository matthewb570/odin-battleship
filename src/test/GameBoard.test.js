import GameBoard from "../js/GameBoard";

describe("game board - ship placement", () => {
    test("ship is placed when specified coordinates are available - vertical", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 0], 5, "vertical")).toBeTruthy();
    });

    test("ship is placed when specified coordinates are available - horizontal", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 0], 5, "horizontal")).toBeTruthy();
    });

    test("ship is placed when specified coordinates are available and other ships have already been placed - vertical", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 5, "vertical");
        expect(gameBoard.placeShip([1, 0], 5, "vertical")).toBeTruthy();
    });

    test("ship is placed when specified coordinates are available and other ships have already been placed - horizontal", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 5, "horizontal");
        expect(gameBoard.placeShip([0, 1], 5, "horizontal")).toBeTruthy();
    });

    test("ship is not placed when specified coordinates are occupied - vertical", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 5, "horizontal");
        expect(gameBoard.placeShip([4, 0], 5, "vertical")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are occupied - horizontal", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 5, "vertical");
        expect(gameBoard.placeShip([0, 1], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - vertical top", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, -1], 5, "vertical")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - horizontal top", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, -1], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - vertical right", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([10, 0], 5, "vertical")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - horizontal right", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([10, 0], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - vertical bottom", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 10], 5, "vertical")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - horizontal bottom", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 10], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - vertical left", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([-1, 0], 5, "vertical")).toBeFalsy();
    });

    test("ship is not placed when specified coordinates are out of bounds - horizontal left", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([-1, 0], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when placement is out of bounds - horizontal right", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([9, 0], 5, "horizontal")).toBeFalsy();
    });

    test("ship is not placed when placement is out of bounds - vertical bottom", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.placeShip([0, 9], 5, "vertical")).toBeFalsy();
    });
});

describe("game board - receive attacks", () => {
    test("attack is recorded", () => {
        let gameBoard = new GameBoard();
        gameBoard.receiveAttack([0, 0]);
        expect(gameBoard.areCoordinatesAttacked([0, 0])).toBeTruthy();
    });

    test("not attacked location is not marked as attacked", () => {
        let gameBoard = new GameBoard();
        gameBoard.receiveAttack([0, 0]);
        expect(gameBoard.areCoordinatesAttacked([1, 0])).toBeFalsy();
    });

    // TODO: Add tests for attacking invalid coordinates and ship sinking
});