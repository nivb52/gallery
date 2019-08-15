// RENDER 

function init(levelIdx) {
    gLife = 3
    gStartLife = gLife
    gFirstClick = false
    gBoardModal = createBoard(levelIdx)
    RestartAndRender()
    gIsGameOn = true
}


function renderBoard(board, isRevelMines = false) {
    var sHTML = ''
    var elBoard = document.querySelector('.gameBoard')
    var counter = 0
    var flagCounter = 0

    for (var i = 0; i < board.length; i++) {
        sHTML += '<tr>'

        for (var j = 0; j < board[i].length; j++) {
            var cell = board[i][j]

            if (isRevelMines && cell === MINE) {
                board[i][j] = MINE_SYMBOL  // CHANGE IN CASE OVER RENDER BY REVEAL-FUNC
                cell = MINE_SYMBOL  // CHANGE IN CASE OVER RENDER BY REVEAL-FUNC
            }

            sHTML += '<td onclick="userRevelExcute(' + i + ',' + j
            sHTML += ')" oncontextmenu="userFlag(event,' + i + ',' + j + ')">' + cell + '</td>'


            if (cell === FLAG_SYMBOL) flagCounter++  // WE WIll ALSO USE THIS LOOP SAVING SOME COMPUTE TIME
            if (cell > 0 || cell === 0) counter++   // FOR CHECKING IF THERE ARE CELLs TO REVEAL BY COUNTING

        }
        sHTML += '</tr>'
    }

    // console.log(flagCounter, '   countr ', counter);

    if (!isRevelMines) checkGameWin(counter, flagCounter)
    elBoard.innerHTML = sHTML
}






function RestartAndRender() {
    //model
    gBoardRender = copyMat(gBoardModal)
    //DOM
    removeWinMsg()
    renderLife()
    renderBoard(gBoardRender)
    //model
    gBoard = createCells()
}


function renderFirstClick(i, j) {
    gFirstClick = true

    if (gBoardModal[i][j] === MINE) {
        var randNum1 = getRndInteger(gLevelSize - 1, 0)
        var randNum2 = getRndInteger(gLevelSize - 1, 0)
        gBoardModal[i][j] = EMPTY
        replaceMineLocRecur(randNum1, randNum2)
    }
    RestartAndRender()
    return
}


function gameOver(reason) {
    stopAndClearClock(false)

    if (reason === 'LOSE') {
        gIsGameOn = false
        toggleEmojis()
        returnEmojis()
        renderBoard(gBoardRender, true)
    }

    if (reason === 'win') {
        console.log('you won')
        elWin = document.querySelector('h2')
        elWin.classList.remove('hide')
    }

    return
}


//::::::::::::::::::::::::::::::::::::::::
//:::::::::: CLICKING FUNC :::::::::::
//::::::::::::::::::::::::::::::::::::::::

function userFlag(e, row, col) {
    e.preventDefault();
    if (!gFirstClick) return // PREVENT FLAG IN 1ST CLICK
    renderClock()
    var currObj = getObjByValueSmarter(row, col)

    if (currObj.isFlagged) {
        currObj.isFlagged = false
        gBoardRender[row][col] = gBoardModal[row][col]

    } else {
        currObj.isFlagged = true
        gBoardRender[row][col] = FLAG_SYMBOL
    }

    renderBoard(gBoardRender)
}




function userRevel(row, col, clickByUser = true) {
    if (!gIsGameOn) return //NO MORE CLICKS FOR USER

    if (!gFirstClick) renderFirstClick(row, col)
    //WE HAVE FEATURE WHICH PREVENT 1ST FLAG IN CASE IT WAS 1ST CLICK BECAUSE OF THIS LINE ABOVE WHICH RE RENDER ALL

    renderClock()

    var currObj = getObjByValueSmarter(row, col)
    var currMinesCount = getObjByValueSmarter(row, col).minesAroundCount

    // CLICKED BY MISTAKE    
    if (currObj.isFlagged) return

    if (gBoardModal[row][col] === MINE && clickByUser) {
        gBoardRender[row][col] = MINE_SYMBOL
        gMineCount
        toggleEmojis()
        returnEmojis()
        checkLifes()
    }

    // if (gBoardModal[row][col] === MINE) return

    else if (gBoardModal[row][col] === EMPTY) {
        gBoardRender[row][col] = currMinesCount //EMPTY_SYMBOL

        if (currMinesCount === 0 && !currObj.isShown) {
            currObj.isShown = true
            expandShownRecur(row, col)
        }
        currObj.isShown = true
    }

    // renderBoard(gBoardRender)
}


function userRevelExcute(row, col) {
    userRevel(row, col)
    renderBoard(gBoardRender)
}


//::::::::::::::::::::::::::::::::::::::::
//:::::::::: SMALL RENDER FUNC :::::::::::
//::::::::::::::::::::::::::::::::::::::::


function startClock() {
    var elTimer = document.querySelector('.timer')
    var time = (Date.now() - gStartTime) / 1000
    elTimer.innerText = time.toFixed(2)
}

function renderClock() {
    if (!gTimer) {
        gStartTime = Date.now()
        gTimer = setInterval(startClock, 100)
    }
    startClock()
}

function testing() {
    var elTest = document.querySelector('#test')
    if (gTESTER) {
        gTESTER = !gTESTER
        MINE = 'M'
        elTest.innerText = 'REGULAR MODE'
        init(null)
    } else {
        gTESTER = !gTESTER
        elTest.innerText = 'TESTING MODE'
        MINE = '  '
        init(null)
    }
}

function toggleEmojis() {
    var elSmily = document.querySelector('#face')
    elSmily.classList.toggle('hide')
    var elSmilyDead = document.querySelector('#face-dead')
    elSmilyDead.classList.toggle('hide')
}

function returnEmojis() {
    setTimeout(toggleEmojis, 1000)
}

function removeWinMsg() {
    setTimeout(function () {
        elWin = document.querySelector('h2')
        elWin.classList.add('hide')
    }, 10);
}
