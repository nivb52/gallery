function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = [];
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}

function getRndInteger(max, min = 1) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//finds and returns a  object by an id.
function getObjByValueSmarter(row,col) {
    return gBoard[row * gLevelSize + col]
}



// run function inside ~userRevel function
function expandShownRecur(row, col) {
    var size = gLevelSize-1

    for(var i = Math.max(row - 1, 0); i <= Math.min(row + 1, size); i++) {
            for(var j = Math.max(col - 1, 0); j <= Math.min(col + 1, size) ; j++ ) {
                userRevel(i, j, false) 
                // if an near by cell is also empty, 
                // it will repeat the process since this function 
                // is nested inside userRevel 
        }
    }
}


// Rec for 1st click SET TO EMPTY CELL (NON MINE)
// i & j by ONE DIMENSIONAL (1 DIM) so it will be easier to go up by 1
function replaceMineLocRecur(i, j) {
    if (gBoardModal[i][j] === MINE) {
        var oneDim = i * gLevelSize + j
        oneDim === 0 ? oneDim = (gLevelSize ** 2) -1  : oneDim--
        j === oneDim % gLevelSize
        i === (oneDim - j) / gLevelSize
        replaceMineLocRecur(i, j)
    }
    gBoardModal[i][j] = MINE    
}

/* NOT USING YET */ 
function toggleGameOn(elBtn) {
    // TODO set TIMER 
    console.log('elBtn.innerText', elBtn.innerText, 'SET TIMER')
    var elBtnVal = elBtn.innerText
    
    if (gIsGameOn) {
        elBtnVal = '&#9658;';
        elBtn.innerHTML = '&#9658;' // PLAY SIGN

    } else {
        elBtn.innerHTML = '&#10074;&#10074;' // STOP SIGN
        elBtnVal = '&#10074;&#10074;';
    }
    
    gIsGameOn = !gIsGameOn;
}