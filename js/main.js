var gameBoard = new Game(1200, 800);
var aMonkey = new Monkey(0, 1);
gameBoard.addMonkey(aMonkey);

// var aBanana = new Banana(0, -50);
// gameBoard.addBananas(aBanana);

//all DOM manipulation
let gameContainer = document.getElementById("game-container");
let intro = document.getElementById("intro");
let monkey = document.getElementById("monkey-boy");
let monkeyGirl = document.getElementById("monkey-girl");
let bananas = document.getElementsByClassName("bananas");
let coconuts = document.getElementsByClassName("coconuts");
let scoreboard = document.getElementById("scoreboard");

// Set game width and height
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";