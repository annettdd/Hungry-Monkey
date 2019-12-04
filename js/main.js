var gameBoard = new Game(1200, 800);
var aMonkey = new Monkey(0, 1);
gameBoard.addMonkey(aMonkey);

//all DOM manipulation
let intro = document.getElementById("intro");
let monkey = document.getElementById("monkey-boy");
let bananas = document.getElementsByClassName("bananas");
let coconuts = document.getElementsByClassName("coconuts");
let scoreboard = document.getElementById("scoreboard");
let score = document.getElementById("score");
let message = document.getElementById("message");