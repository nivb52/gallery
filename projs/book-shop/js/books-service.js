'use strict'

var gBooks = []
const MAX_PAGE_SIZE = 5
var currPageIdx = 0

function getBooks(){
    var fromIdx = currPageIdx * MAX_PAGE_SIZE
    var books = gBooks.slice(fromIdx , fromIdx + MAX_PAGE_SIZE)
    return books
}


function createBooks(n = 25) {
    for (let i = 0; i < n; i++) {
        gBooks.push(createBook())
    }
    return gBooks
}


function createBook(title = genBookName(), price = getRandomIntInclusive(1, 90), status = genRandomStatus()) {
    var image = getRandomIntInclusive(1,9)
    return {
        id: makeId(),
        title: title,
        price: price,
        author: randomName(),
        // details: '', //we creating Lorem on HTML
        status: status,
        img: 'img/'+image+'.jpg'
        // date: randomDate(new Date(1999, 4, 5), new Date(2019,21,1) )
    }
}



function getBookIdxById(bookId) {
    return gBooks.findIndex(function (book) {
        return bookId === book.id
    })
}

function deleteBook(bookId) {
    var bookIdx = getBookIdxById(bookId)
    gBooks.splice(bookIdx, 1)
}


function updateBook(bookId, newPrice) {
    var bookIdx = getBookIdxById(bookId)
    gBooks[bookIdx].price = newPrice;
    console.log('new price added to book ',gBooks[bookIdx].id);
}


function readBook(bookId) {
    var bookIdx = getBookIdxById(bookId)
    var currBook = gBooks[bookIdx]
    return {
        title: currBook.title,
        details: currBook.details,
        img: currBook.img
    }
}


function readAndAddNewBook(isSampleData) {
    if (isSampleData) {
        gBooks.push(createBook('sample book'))
    } else {
        var newName, newPrice
        while (!newName) {
            newName = prompt('Enter book name')
        }
        while (!newPrice) {
            newPrice = +prompt('Enter Price ')
        }

        gBooks.push(createBook(newName, newPrice))
    } // else
    console.log('Adding new book')
}


function changePage(page) {
    if ((page === -2 && currPageIdx === MAX_PAGE_SIZE - 1) ||
         (page === -1 && currPageIdx === 0)) return
// -2 = 'next'
    if (page === -2) {return currPageIdx++}
    if (page === -1) {return currPageIdx--}
    return currPageIdx = page
}