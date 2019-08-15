'use strict';
var WALL = '&#9744';
var FOOD = '.';
var EMPTY = ' ';
var SUPER_FOOD = '2'

var gBoard;
var gState = {
  score: 0,
  foodOnBoard: -1, //-1 for pacman
  isGameDone: false
};

function init() {
  gBoard = buildBoard();

  createPacman(gBoard);
  createGhosts(gBoard);

  printMat(gBoard, '.board-container');
  console.table(gBoard);
}

function buildBoard() {
  var SIZE = 10;
  var superFoodLocs = [[SIZE-2,SIZE-2],[1,1],[SIZE-2,1],[1,SIZE-2]]
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;
      gState.foodOnBoard ++

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j == 3 && i > 4 && i < SIZE - 2)) {

          board[i][j] = WALL;
          gState.foodOnBoard--
      }
    }
  }
  for(var k = 0; k < superFoodLocs.length; k++){
     var iIdx = superFoodLocs[k][0] 
     var jIdx = superFoodLocs[k][1]
     board[iIdx][jIdx] = SUPER_FOOD
     gState.foodOnBoard--
  }
  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent) {
  if (cell === opponent) {
    // TODO: basic support for eating power-ball (which is not in the game yet)
    if (gPacman.isSuper) {
      console.log('Ghost is dead');
      // clearInterval(gIntervalGhosts);
      for (var i = 0; i < gGhosts.length; i++){
        var iGhost = gGhosts[i].location.i
        var jGhost = gGhosts[i].location.j
        if ( iGhost === gPacman.location.i && jGhost === gPacman.location.j){
          gGhosts.splice(i,1)
          // setTimeout(createGhost(gBoard),3000);// create new ghost
          //TODO : currCellContent: should not change
          
        }
        
      }
      
      //??? setTimeout(function(){gIntervalGhosts = setInterval(moveGhosts, 1000);},3000)
      
    } else {
      clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      // TODO: GameOver popup with a play again button
      // alert('Game Over!');
      console.log('Game Over!');
      return true;
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  gState.foodOnBoard--
  document.querySelector('header > h3 > span').innerText = gState.score;
  if (gState.foodOnBoard < 1 ) console.log('WIN all food gone');
  
}


