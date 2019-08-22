'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null
var gStorageKeys = { QUEST_DB: 'QUEST-DB' }

var gCount = 1
var gPhotoCount = 0

function getQuest() {
    if (localStorage.getItem(gStorageKeys.QUEST_DB)) {
        gQuestsTree = loadFromStorage(gStorageKeys.QUEST_DB)
        gCurrQuest = gQuestsTree
    } else { createQuestsTree() }
    saveQuest()
}

function saveQuest() {
    saveToStorage(gStorageKeys.QUEST_DB, gQuestsTree)
}


function createQuestsTree() {
    gQuestsTree = createQuest('Male?')

    gQuestsTree.yes = createQuest('Ozi Hitman ?')
    gQuestsTree.no = createQuest('Rita ?')

    loadComplexData(true)

    gCurrQuest = gQuestsTree
    gPrevQuest = null
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]
    gCount++
    gPhotoCount++
}

function addGuess(newQuestTxt, newGuessTxt, res) {

    //gPrevQuest = Is Male  ||     // gCurrQuest = Rita 
    // var temp = gCurrQuest // we can use a temp to make it easier

    var newQuest = createQuest(newQuestTxt)
    gPrevQuest[res] = newQuest
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest
    // newQuest.no = createQuest(temp.txt)

}

function loadComplexData(isTrue) {
    if (!isTrue) return

    gQuestsTree.yes = createQuest('Is your character is famous?')
    gQuestsTree.yes.yes = createQuest('Does your character really exist?')
    gQuestsTree.yes.yes.yes = createQuest('Eliran grey T-Shirt ?')
    gQuestsTree.yes.yes.no = createQuest('Does your character appear in a musical ?')
    gQuestsTree.yes.yes.no.yes = createQuest('Alladin ?')
    gQuestsTree.yes.yes.no.no = createQuest('The Bamba Baby ? ')

    gQuestsTree.no = createQuest('Is your character from your family?')
    gQuestsTree.no.yes = createQuest('Your Mom ? ')
    gQuestsTree.no.yes.no = createQuest('Your Sister ? ')

    gQuestsTree.no.no = createQuest('Is it a friend of yours ?')
    gQuestsTree.no.no.yes = createQuest('Eliran grey T-Shirt ?')
    gQuestsTree.no.no.no = createQuest('Is it a cat ?')
    gQuestsTree.no.yes.yes = createQuest('Does your character appear in a musical ?')
    gQuestsTree.no.yes.yes.yes = createQuest('Is it you ?')
    gQuestsTree.no.yes.yes.no = createQuest('Eliran grey T-Shirt ?')
    gQuestsTree.no.yes.no = createQuest('Is it an animal ?')
    gQuestsTree.no.yes.no.yes = createQuest('Is it your dog ?')
    gQuestsTree.no.yes.no.no = createQuest('Eliran grey T-Shirt ?')

}