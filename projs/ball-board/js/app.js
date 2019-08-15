'use strict'
var WALL = 'WALL';
var FLOOR = 'FLOOR';
var PASSAGE = 'PASSAGE';
var BALL = 'BALL';
var GAMER = 'GAMER';
var GLUE = 'GLUE';

var GAMER_IMG = '<img src="img/gamer.png">';
var BALL_IMG = '<img src="img/ball.png">';
var GLUE_IMG = '<img src="img/glue.png">'

var gBoard;
var gGamerPos;
var gScore = 0;
var gBallCounter
var gIsStuck

var gRows = 10, gCols = 12
var gIntervalBalls
var gIntervalGlue

function initGame() {
	gScore = 0
	gGamerPos = { i: 2, j: 9 };
	gBoard = buildBoard();
	renderBoard(gBoard);
	gIntervalBalls = setInterval(newBalls, 2000)
	gIntervalGlue = setInterval(newGlue, 5000)
}


function createElement(element, elImg) {
	var randNum1 = getRndInteger(gRows - 3) // 2 for walls && 1 for length
	var randNum2 = getRndInteger(gCols - 3)

	while (gBoard[randNum1][randNum2].gameElement) {
		var randNum1 = getRndInteger(gRows - 3)
		var randNum2 = getRndInteger(gCols - 3)
	}
	var pos = { i: randNum1, j: randNum2 }

	// Modal
	// VERIFYING EMPTY CELL AFTER MOVEMENT 
	if (gGamerPos.i !== randNum1 && gGamerPos.j !== randNum2) {
		gBoard[randNum1][randNum2].gameElement = element
	} else gBoard[Math.abs(gRows - randNum1)][Math.abs(gCols - randNum2)].gameElement = element

	// DOM
	renderCell(pos, elImg)
	// if(element === BALL) gBallCounter++
	// if(element === GLUE) setTimeout(function() {

	// }, 3000)
}


function newBalls() {
	createElement(BALL, BALL_IMG)
	gBallCounter++
}

function newGlue() {
	createElement(GLUE, GLUE_IMG)
}


function buildBoard() {
	// Create the Matrix
	var board = new Array(gRows);
	for (var i = 0; i < board.length; i++) {
		board[i] = new Array(gCols);
	}

	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			var cell = { type: FLOOR, gameElement: null };
			// Place Walls at edges
			if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
				cell.type = WALL;
			}
			if (i === gRows / 2 && (j === 0 || j === gCols - 1) || (j === gCols / 2 && (i === 0 || i === gRows - 1))) {
				cell.type = PASSAGE
			}
			//all others :
			board[i][j] = cell;
		}
	}
	// Place the gamer
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

	// Place the Balls
	board[3][8].gameElement = BALL;
	board[7][4].gameElement = BALL;
	gBallCounter = 2;

	// console.log(board);
	return board;
}

function renderScore() {
	var elScore = document.querySelector('#score span');
	elScore.textContent = +gScore;
}


// Render the board to an HTML table
function renderBoard(board) {
	renderScore()
	var elBoard = document.querySelector('.board');
	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];

			var cellClass = getClassName({ i: i, j: j })
			//## 
			if (currCell.type === FLOOR || currCell.type === PASSAGE) cellClass += ' floor';
			else if (currCell.type === WALL) cellClass += ' wall';

			strHTML += '\t<td class="cell ' + cellClass +
				'"  onclick="moveTo(' + i + ',' + j + ')" >\n';

			if (currCell.gameElement === GAMER) {
				strHTML += GAMER_IMG;
			} else if (currCell.gameElement === BALL) {
				strHTML += BALL_IMG;
			}

			strHTML += '\t</td>\n';
		}
		strHTML += '</tr>\n';
	}
	elBoard.innerHTML = strHTML;
}

function restartGame() {
	// console.log('restarting');	
	var elBtn = document.querySelector('#restart');
	if (elBtn.classList.contains('.hide')) return;
	setTimeout(initGame, 750)
	restartBtn()
}

function restartBtn() {
	var elBtn = document.querySelector('#restart');

	elBtn.classList.toggle('hide');
	// elBtn.classList.toggle('btn');
}

function renderWon() {
	var elTds = document.querySelectorAll('td')
	
	for (var i = 0; i < elTds.length; i++) {
		elTds[i].classList.add('won')
	}
}

function isGameEnd() {
	if (gBallCounter === gScore) {
		clearInterval(gIntervalBalls);
		clearInterval(gIntervalGlue);
		restartBtn();
		renderWon();
		// console.log('Victory   -   Game End');
	}

}

// Move the player to a specific location
function moveTo(i, j) {
	if (gIsStuck) return

	var targetCell = gBoard[i][j];
	if (targetCell.type === WALL) return;

	// Calculate distance to ake sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i);
	var jAbsDiff = Math.abs(j - gGamerPos.j);

	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0)) {

		if (targetCell.gameElement === BALL) {
			// COLLECTING BALLS -- console.log('Collecting!');
			gScore++
			renderScore()
			isGameEnd()
		}

		if (targetCell.gameElement === GLUE) {
			gIsStuck = true;
			setTimeout(function () { gIsStuck = false }, 3000);
		}

		// MOVING
		// Model:
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		// Dom:
		renderCell(gGamerPos, '');

		if (targetCell.type === PASSAGE) {
			if(i === gRows / 2) { j = j === 0? gCols -1 : 0		}
			else if(j === gCols / 2) {	i = i === 0? gRows -1 : 0	}
			// i = i === (gRows / 2) ? Math.abs(i - gRows) : i;
			// j = j === (gCols / 2) ? Math.abs(j - gCols) : j;
		}

		
		// Model:
		gGamerPos.i = i;
		gGamerPos.j = j;
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		// DOM:
		renderCell(gGamerPos, GAMER_IMG);



	} // else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}



// Move the player by keyboard arrows
function handleKey(event) {
	if ((!gGamerPos.i && gGamerPos.i !==0) || (!gGamerPos.j && gGamerPos.j !==0) ) return
	var i = gGamerPos.i;
	var j = gGamerPos.j;
	
	switch (event.code) {
		case 'ArrowLeft':
			moveTo(i, j - 1);
			break;
		case 'ArrowRight':
			moveTo(i, j + 1);
			break;
		case 'ArrowUp':
			moveTo(i - 1, j);
			break;
		case 'ArrowDown':
			moveTo(i + 1, j);
			break;

		case 'KeyA':
			moveTo(i, j - 1);
			break;
		case 'KeyD':
			moveTo(i, j + 1);
			break;
		case 'KeyW':
			moveTo(i - 1, j);
			break;
		case 'KeyS':
			moveTo(i + 1, j);
			break;
	}

}

// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}

function getRndInteger(max, min = 1) {
	return Math.floor(Math.random() * (max - min)) + min;
}