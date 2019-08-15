var GHOST = '&#9781;';

var gIntervalGhosts;
var gGhosts;
var GHOST_HOME = 3
var GHOST_BACK_FREQ = 1000

function createGhost(board) {

    var ghost = {
        color: getRandomColor(),
        location: {
            i: GHOST_HOME,
            j: GHOST_HOME
        },
        currCellContent: FOOD,
        diffColor : "blue"

    };
    gGhosts.push(ghost);
    board[ghost.location.i][ghost.location.j] = GHOST;
}


function createGhosts(board) {
    gGhosts = [];
    createGhost(board);
    createGhost(board);
    createGhost(board);
    gIntervalGhosts = setInterval(moveGhosts, 1000);
}

function moveGhosts() {
    // TODO, if there are less than 3 ghosts, create one
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];

        var nextLocation = {
                i: ghost.location.i + getRandomIntInclusive(-1, 1),
                j: ghost.location.j + getRandomIntInclusive(-1, 1)
            }
            // console.log('nextLocation', nextLocation);

        if (gBoard[nextLocation.i][nextLocation.j] === WALL) return;
        if (gBoard[nextLocation.i][nextLocation.j] === GHOST) return;

        var isGameOver = checkEngage(gBoard[nextLocation.i][nextLocation.j], PACMAN);
        if (isGameOver) {}

        // set back what we stepped on
        gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent;
        renderCell(ghost.location, ghost.currCellContent);

        // move the ghost
        ghost.location = nextLocation;

        // keep the contnet of the cell we are going to
        ghost.currCellContent = gBoard[ghost.location.i][ghost.location.j];

        // move the ghost model and update dom
        if (gPacman.isSuper) var currGhost = ghost.diffColor
        var currGhost = ghost.color
        renderCell(ghost.location, getGhostHTML(ghost,currGhost));
        gBoard[ghost.location.i][ghost.location.j] = GHOST;
    }
}


function getGhostHTML(ghost, color) {
    return `<span style="color: ${color};">${GHOST}</span>`
}