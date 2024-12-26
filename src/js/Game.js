import Player from "./Player.js";

export default class Game {
    
    player1;
    player2;

    constructor() {
        this.player1 = new Player("Player 1", true);
        this.player2 = new Player("Computer", false);

        this.player1.gameBoard.placeShip([0, 0], 5, "vertical");
        this.player1.gameBoard.placeShip([5, 5], 3, "horizontal");

        this.player2.gameBoard.placeShip([0, 0], 5, "horizontal");
        this.player2.gameBoard.placeShip([5, 5], 3, "vertical");
    }
}