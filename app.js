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

window.addEventListener('load', init);;
document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', hold);

function rollDice() {
  var num = Math.ceil(6 * Math.random());
  var dice = document.querySelector('.dice');
  dice.src = 'dice-' + num + '.png';
  if (num === 1) {
    roundScore = 0;
  } else {
    roundScore += num;
  }
  var activePlayerCurrent = document.getElementById('current-' + activePlayer);
  activePlayerCurrent.textContent = roundScore;
}

function hold() {
  scores[activePlayer] += roundScore;
  var testOne = document.querySelector('#score-' + activePlayer);
  var activePlayerScore = document.getElementById('score-' + activePlayer);
  activePlayerScore.innerHTML = parseInt(activePlayerScore.textContent) + scores[activePlayer];
  if (activePlayerScore.innerHTML > 20) {
    end();
  }
  activePlayer = 1 - activePlayer;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active'); 
}

function init() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.querySelector('.dice').src = 'dice-1.png';
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active'); 
}

function end() {
  window.alert('player ' + activePlayer + ' wins! New game will start!');
  init();
}