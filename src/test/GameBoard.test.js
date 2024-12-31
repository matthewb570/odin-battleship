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

    test("all ships reported sunk if all ships are sunk", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 3, "vertical");
        gameBoard.placeShip([1, 0], 3, "vertical");
        gameBoard.receiveAttack([0, 0]);
        gameBoard.receiveAttack([0, 1]);
        gameBoard.receiveAttack([0, 2]);
        gameBoard.receiveAttack([1, 0]);
        gameBoard.receiveAttack([1, 1]);
        gameBoard.receiveAttack([1, 2]);
        expect(gameBoard.areAllShipsSunk()).toBeTruthy();
    });

    test("all ships not reported sunk if not all ships are sunk", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([0, 0], 3, "vertical");
        gameBoard.placeShip([1, 0], 3, "vertical");
        gameBoard.receiveAttack([0, 0]);
        gameBoard.receiveAttack([0, 1]);
        gameBoard.receiveAttack([0, 2]);
        expect(gameBoard.areAllShipsSunk()).toBeFalsy();
    });
});

describe("game board - adjacency", () => {
    test("adjacent coordinates returned when all adjacent coordinates are valid", () => {
        let gameBoard = new GameBoard();
        let adjacentCoordinates = gameBoard.getAdjacentCoordinates([5, 5]);
        
        let top = adjacentCoordinates[0];
        let right = adjacentCoordinates[1];
        let bottom = adjacentCoordinates[2];
        let left = adjacentCoordinates[3];

        expect(top[0]).toBe(5);
        expect(top[1]).toBe(4);
        expect(right[0]).toBe(6);
        expect(right[1]).toBe(5);
        expect(bottom[0]).toBe(5);
        expect(bottom[1]).toBe(6);
        expect(left[0]).toBe(4);
        expect(left[1]).toBe(5);
    });

    test("top adjacent coordinates are null when top adjacent coordinates are invalid", () => {
        let gameBoard = new GameBoard();
        let adjacentCoordinates = gameBoard.getAdjacentCoordinates([5, 0]);
        
        let top = adjacentCoordinates[0];

        expect(top).toBe(null);
    });

    test("right adjacent coordinates are null when right adjacent coordinates are invalid", () => {
        let gameBoard = new GameBoard();
        let adjacentCoordinates = gameBoard.getAdjacentCoordinates([9, 5]);
        
        let right = adjacentCoordinates[1];

        expect(right).toBe(null);
    });

    test("bottom adjacent coordinates are null when bottom adjacent coordinates are invalid", () => {
        let gameBoard = new GameBoard();
        let adjacentCoordinates = gameBoard.getAdjacentCoordinates([5, 9]);
        
        let bottom = adjacentCoordinates[2];

        expect(bottom).toBe(null);
    });

    test("left adjacent coordinates are null when left adjacent coordinates are invalid", () => {
        let gameBoard = new GameBoard();
        let adjacentCoordinates = gameBoard.getAdjacentCoordinates([0, 5]);
        
        let left = adjacentCoordinates[3];

        expect(left).toBe(null);
    });

    test("adjacent hits returned when all adjacent coordinates are hits", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([5, 3], 2, "vertical");
        gameBoard.placeShip([6, 5], 2, "horizontal");
        gameBoard.placeShip([5, 6], 2, "vertical");
        gameBoard.placeShip([3, 5], 2, "horizontal");

        gameBoard.receiveAttack([5, 4]);
        gameBoard.receiveAttack([6, 5]);
        gameBoard.receiveAttack([5, 6]);
        gameBoard.receiveAttack([4, 5]);

        let adjacentHits = gameBoard.getAdjacentHits([5, 5]);
        
        let top = adjacentHits[0];
        let right = adjacentHits[1];
        let bottom = adjacentHits[2];
        let left = adjacentHits[3];

        expect(top[0]).toBe(5);
        expect(top[1]).toBe(4);
        expect(right[0]).toBe(6);
        expect(right[1]).toBe(5);
        expect(bottom[0]).toBe(5);
        expect(bottom[1]).toBe(6);
        expect(left[0]).toBe(4);
        expect(left[1]).toBe(5);
    });

    test("top adjacent hit is null when top adjacent coordinate is not a hit", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([5, 3], 2, "vertical");
        gameBoard.placeShip([6, 5], 2, "horizontal");
        gameBoard.placeShip([5, 6], 2, "vertical");
        gameBoard.placeShip([3, 5], 2, "horizontal");

        gameBoard.receiveAttack([6, 5]);
        gameBoard.receiveAttack([5, 6]);
        gameBoard.receiveAttack([4, 5]);

        let adjacentHits = gameBoard.getAdjacentHits([5, 5]);
        
        let top = adjacentHits[0];
        
        expect(top).toBe(null);
    });

    test("right adjacent hit is null when right adjacent coordinate is not a hit", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([5, 3], 2, "vertical");
        gameBoard.placeShip([6, 5], 2, "horizontal");
        gameBoard.placeShip([5, 6], 2, "vertical");
        gameBoard.placeShip([3, 5], 2, "horizontal");

        gameBoard.receiveAttack([5, 4]);
        gameBoard.receiveAttack([5, 6]);
        gameBoard.receiveAttack([4, 5]);

        let adjacentHits = gameBoard.getAdjacentHits([5, 5]);
        
        let right = adjacentHits[1];

        expect(right).toBe(null);
    });

    test("bottom adjacent hit is null when bottom adjacent coordinate is not a hit", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([5, 3], 2, "vertical");
        gameBoard.placeShip([6, 5], 2, "horizontal");
        gameBoard.placeShip([5, 6], 2, "vertical");
        gameBoard.placeShip([3, 5], 2, "horizontal");

        gameBoard.receiveAttack([5, 4]);
        gameBoard.receiveAttack([6, 5]);
        gameBoard.receiveAttack([4, 5]);

        let adjacentHits = gameBoard.getAdjacentHits([5, 5]);
        
        let bottom = adjacentHits[2];

        expect(bottom).toBe(null);
    });

    test("left adjacent hit is null when left adjacent coordinate is not a hit", () => {
        let gameBoard = new GameBoard();
        gameBoard.placeShip([5, 3], 2, "vertical");
        gameBoard.placeShip([6, 5], 2, "horizontal");
        gameBoard.placeShip([5, 6], 2, "vertical");
        gameBoard.placeShip([3, 5], 2, "horizontal");

        gameBoard.receiveAttack([5, 4]);
        gameBoard.receiveAttack([6, 5]);
        gameBoard.receiveAttack([5, 6]);

        let adjacentHits = gameBoard.getAdjacentHits([5, 5]);
        
        let left = adjacentHits[3];

        expect(left).toBe(null);
    });
});