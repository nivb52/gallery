'use strict'

var gLastRes = null

$(document).ready(init)

function init() {
    getQuest()
    // addEventListener()
}

function onStartGuessing() {
    $('.game-start').hide()
    renderQuest()

    $('.quest').show()
}

function renderQuest() {
    if (gCurrQuest.txt) $('.quest > h2').text(gCurrQuest.txt)
    $('.quest > h2').text(gCurrQuest.txt)
}

/* if we want to use jQuery for the clicks : 
function addEventListener() {
    $('.quest  .btn-info').click(function (ev) { console.log(ev) })
    $('.quest  .btn-danger').click(function (ev) { console.log(ev) })
}
*/

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            renderQuestImg('yes') // type - yes
            iWin()

        } else {
            console.log('you can teach me!')
            $('.quest').hide()
            $('.new-quest').show()

        }
    } else {
        gLastRes = res
        moveToNextQuest(res)
        renderQuestImg('no')
        renderQuest()
    }
}

function onAddGuess() {
    var newGuess = $('#newGuess').val()
    var newQuest = $('#newQuest').val()

    addGuess(newQuest, newGuess, gLastRes)
    onRestartGame();
}

function renderQuestImg(imgType) {
    if (gPhotoCount > 9) gPhotoCount = 1 //STAY ON MAX GIF WE HAVE
    if (imgType === 'yes') { gPhotoCount = Math.floor(Math.random() * 5 + 1) } //WE HAVE 5 GIF
    $('header > img').attr('src', `img/gif/${imgType}${gPhotoCount}.gif`)
}

function onRestartGame() {
    $('.quest').hide()
    $('.new-quest').hide()
    $('.game-start').show()
    gLastRes = null
    gCurrQuest = gQuestsTree
    gPrevQuest = null
    saveQuest()
    gCount = 1
    gPhotoCount = 0

}

function iWin() {
    setTimeout(renderWinModal, 700)
    // onStartGuessing()
    onRestartGame()
}

function renderWinModal() {
    $('.modal-body > span').text(`It took me only ${gCount} Question`)
    $('#modal').show()
    // $('#modal  .btn-primary').click(function (ev) { $.url('google.com')  })
    $('#modal  button').click(function (ev) {
        $('#modal').hide()
    })
}