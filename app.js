/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

window.onload = init;
document.getElementsByClassName("btn-new")[0].onclick = init;

var rollBtn = document.getElementsByClassName("btn-roll")[0];
rollBtn.onclick = rollDice;

var holdBtn = document.getElementsByClassName("btn-hold")[0];
holdBtn.onclick = hold;


function rollDice() {
  var num = Math.ceil(6 * Math.random());
  var dice = document.getElementsByClassName("dice")[0];
  dice.src = "dice-" + num + ".png";
  if (num === 1) {
    roundScore = 0;
  } else {
    roundScore += num;
  }
  var activePlayerCurrent = document.getElementById("current-" + activePlayer);
  activePlayerCurrent.innerHTML = roundScore;
}

function hold() {
  scores[activePlayer] += roundScore;
  var activePlayerScore = document.getElementById("score-" + activePlayer);
  activePlayerScore.innerHTML = parseInt(activePlayerScore.innerHTML) + scores[activePlayer];
  if (activePlayerScore.innerHTML > 20) {
    end();
  }
  activePlayer = 1 - activePlayer;
}

function init() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  document.getElementById("current-0").innerHTML = 0;
  document.getElementById("current-1").innerHTML = 0;
  document.getElementById("score-0").innerHTML = 0;
  document.getElementById("score-1").innerHTML = 0;
  document.getElementsByClassName("dice")[0].src = "dice-1.png";
}

function end() {
  window.alert("player " + activePlayer + " wins! New game will start!");
  init();
}