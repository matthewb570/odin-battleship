import Ship from "../js/Ship";

describe("ship - case 1", () => {
    test("ship is not sunk when hit count is 0", () => {
        let ship = new Ship(3);
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is not sunk when hit count is less than length", () => {
        let ship = new Ship(3);
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is sunk when hit count is equal to length", () => {
        let ship = new Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });

    test("ship is sunk when hit count is greater than length", () => {
        let ship = new Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe("ship - case 2", () => {
    test("ship is not sunk when hit count is 0", () => {
        let ship = new Ship(5);
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is not sunk when hit count is less than length", () => {
        let ship = new Ship(5);
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is sunk when hit count is equal to length", () => {
        let ship = new Ship(5);
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });

    test("ship is sunk when hit count is greater than length", () => {
        let ship = new Ship(5);
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe("ship - case 3", () => {
    test("ship is not sunk when hit count is 0", () => {
        let ship = new Ship(2);
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is not sunk when hit count is less than length", () => {
        let ship = new Ship(2);
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
    });

    test("ship is sunk when hit count is equal to length", () => {
        let ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });

    test("ship is sunk when hit count is greater than length", () => {
        let ship = new Ship(2);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});