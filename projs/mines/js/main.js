'use strict'
console.log('Niv B : Ex 1st Sprinter Solution')
// var FLAG = '🚩'
var MINE = '  '
var EMPTY = ' '
var FLAG_SYMBOL = '🚩'
var MINE_SYMBOL = '&#128163' //'☢'

// var EMPTY_SYMBOL = ' '
var PLAY = '&#9658;'
var PAUSE = '&#10074;&#10074;'
var gTESTER = true


// The Model 
var gBoardModal
var gBoard // OBJ 
var gLevelSize
var gMineCount // FOR WINNING CHECKS
var gFirstClick = false
var gTimer
var gStartTime
var gLife, gStartLife

var gIsGameOn = false
var gLevel = [
    { SIZE: 4, MINES: 2 },
    { SIZE: 8, MINES: 12 },
    { SIZE: 12, MINES: 30 }
]


function stopAndClearClock(deleteTime) {
    clearInterval(gTimer)
    gTimer = undefined
    if (deleteTime) {
        document.querySelector('.timer').innerText = 0 + ':' + 0 + 0
    }
}


function createBoard(levelIdx = null, n = 6, mineCount = 3) {
    var board = [];
    stopAndClearClock(true)

    // USE FOR CALLS FROM BUTTONS :
    if (levelIdx || levelIdx === 0) {
        n = gLevel[levelIdx].SIZE
        mineCount = gLevel[levelIdx].MINES
    } else levelIdx = n // DEFAULT

    gLevelSize = n // NEEDED IN OTHER FUNC
    gMineCount = mineCount // NEEDED IN OTHER FUNC

    // BUILDING MAT RANDOM MINES + MIN MINES

    for (var i = 0; i < n; i++) {
        if (!board[i]) board.push([])

        for (var j = 0; j < n; j++) {

            var FREQ = mineCount / (n * (n - i) - j) // GET MINES IN NICE ORDER

            if (Math.random() <= FREQ) {
                board[i].push(MINE)
                mineCount--

            } else board[i].push(EMPTY)
        }
    }
    
    return board
}


function countNeighbors(cellI, cellJ, mat) {
    var neighborsSum = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j] === MINE) neighborsSum++
        }
    }
    return neighborsSum
}



function createCell([i, j], isMine = false, minesAroundCount = null, isShown = false, isFlagged = false) {
    return {
        loc: [i, j],
        isMine: isMine,
        minesAroundCount: minesAroundCount,
        isShown: isShown,
        isFlagged: isFlagged,
    }
}

function createCells() {
    var board = []
    var len = gBoardModal.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            var tempIsMine = false
            if (gBoardModal[i][j] === MINE) tempIsMine = true
            var TempCountNeighbors = countNeighbors(i, j, gBoardModal)
            board.push(createCell([i, j], tempIsMine, TempCountNeighbors))
        }
    }
    return board
}

function checkGameWin(counter, flags) {
    var currLifeLost = gStartLife - gLife

    if (gLife < 1) return

    if (flags + currLifeLost === gMineCount &&
        counter == (gLevelSize ** 2) - gMineCount) {
        gameOver('win')

    }
}


function checkLifes() {
    gLife--
    renderLife()
    if (gLife < 1) return gameOver('LOSE')
}

function renderLife() {
    var elHeart = document.querySelector('.hearts')
    var sHTML = ''
    for (var i = 0; i < gLife; i++) {
        sHTML += '<img src="css/img/heart.png" /> '
    }
    elHeart.innerHTML = sHTML
}
