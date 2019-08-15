'use strict'
var glevel = 'Easy'

var gNums = []
var gCurrNum = 0
var gStartTime

function init() {
    createBoard()
    printBoard()

}


function restartGame() {
    createBoard()
    gCurrNum = 0
    printBoard()
}

function cellClicked(clickedCell) {
    var clickedNum = +clickedCell.dataset.num
    if (gCurrNum === 0) {
        gStartTime = (Date.now());
        gCurrNum++
    }

    if (clickedNum === gCurrNum) {
        clickedCell.classList.add('hide')
        gCurrNum++

        // WIN CHECK
        if (gNums.length === gCurrNum - 1){
            const elH2Win = document.querySelector('h2.win')
            elH2Win.style.visibility = 'visible'

            // GET TIME IN SEC
            var wonTime = ((Date.now()) -  gStartTime) / 1000
            elH2Win.innerHTML = 'You Won In '+ wonTime+' Sec'
        }
    }
}


function onChangeLevel(level) {
    glevel = level;
    const elLevelButtons = document.querySelectorAll('.levels .button')
    elLevelButtons.forEach(el => {
        el.dataset.level !== glevel ?
            el.classList.remove('selected') : el.classList.add('selected')
    })
    restartGame()
}

function printBoard() {
    var sHTML = '<tr>'
    var rowLength = Math.sqrt(gNums.length)
    for (let i = 0; i < gNums.length; i++) {
        if (i % rowLength === 0 && i !== 0) sHTML += '</tr><tr>'
        sHTML += '<td class="cell" onclick="cellClicked(this)"  data-loc="' + i + '" data-num="' + gNums[i] + '">' + gNums[i] + '</td>'
    }
    var elTable = document.querySelector('tbody')
    elTable.innerHTML = sHTML

}


function createBoard() {
    var boardSize;
    switch (glevel.toLocaleLowerCase()) {
        case ('easy'):
            boardSize = 16
            break;
        case ('medium'):
            boardSize = 36
            break;
        case ('hard'):
            boardSize = 64
            break;
        default:
            boardSize = 16
            break;
    }
    const board = []
    for (let i = 0; i < boardSize; i++) {
        board[i] = i+1;
    }
    gNums = _shuffle(board)
}

function _shuffle(array) {
    array.sort(() => {
        var rand = Math.random().toFixed(1) - 0.5
        return (rand)
    });
    return array
}