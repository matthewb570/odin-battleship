import "../css/styles.css";
import Game from "./Game.js";
import GameDisplay from "./GameDisplay.js";

const divGame = document.querySelector(".content");

let game = new Game();
GameDisplay.draw(game, divGame);