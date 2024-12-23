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

    test("ship found if ship exists at coordinates", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 3, "vertical");
        expect(gameBoard.doesShipExist([0, 0])).toBeTruthy();
        expect(gameBoard.doesShipExist([0, 1])).toBeTruthy();
        expect(gameBoard.doesShipExist([0, 2])).toBeTruthy();
    });

    test("ship not found if ship doesn't exist at coordinates", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.doesShipExist([0, 0])).toBeFalsy();
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

    test("out of bounds attack is not recorded - top", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack([0, -1])).toBeFalsy();
    });

    test("out of bounds attack is not recorded - right", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack([10, 0])).toBeFalsy();
    });

    test("out of bounds attack is not recorded - bottom", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack([0, 10])).toBeFalsy();
    });

    test("out of bounds attack is not recorded - left", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack([-1, 0])).toBeFalsy();
    });

    test("already attacked coordinate can't be attacked again", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack([0, 0])).toBeTruthy();
        expect(gameBoard.receiveAttack([0, 0])).toBeFalsy();
    });

    test("ship is sunk if attacked on all coordinates", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 3, "vertical");
        gameBoard.receiveAttack([0, 0]);
        gameBoard.receiveAttack([0, 1]);
        gameBoard.receiveAttack([0, 2]);
        expect(gameBoard.isShipSunk([0, 0])).toBeTruthy();
        expect(gameBoard.isShipSunk([0, 1])).toBeTruthy();
        expect(gameBoard.isShipSunk([0, 2])).toBeTruthy();
    });

    test("ship is not sunk if only attacked on single coordinate multiple times", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 3, "vertical");
        gameBoard.receiveAttack([0, 0]);
        gameBoard.receiveAttack([0, 0]);
        gameBoard.receiveAttack([0, 0]);
        expect(gameBoard.isShipSunk([0, 0])).toBeFalsy();
        expect(gameBoard.isShipSunk([0, 1])).toBeFalsy();
        expect(gameBoard.isShipSunk([0, 2])).toBeFalsy();
    });

    test("ship is not sunk if queried coordinates don't contain a ship", () => {
        let gameBoard = new GameBoard();
        expect(gameBoard.isShipSunk([0, 0])).toBeFalsy();
    });
});