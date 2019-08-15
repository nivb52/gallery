var DATA_ACTION_READ = 'read'
var DATA_ACTION_DELETE = 'delete'
var DATA_ACTION_UPDATE = 'update'

function init() {
    createBooks()
    renderBooks()
}

function renderBooks() {
    // var books = getBooks()
    var books = getBooks()
    var sHTML = books.map(function (book) {
        return `
    <tr>
    <td>${book.id}</td>
    <td><a href="#"><span id="title-td">
    ${book.title}
    </span> </a></td>
    <td><span id="date-td">
    ${book.price}
     </span> </td>                        
    <td><span id="role=td">
    ${book.author} 
    </span></td>

<td>
<span id="status-td" class="status text-${book.status.css} 
alt="${book.status.text}">&bull;</span> 
</td>

<td>
    <a href="#myModal" class="read" title="read" data-toggle="modal" >
        <i class="material-icons" data-action="${DATA_ACTION_READ}" data-bookid="${book.id}">&#xE86D;</i></a>

    <a href="#" class="settings" title="update" data-toggle="tooltip">
        <i class="material-icons" data-action="${DATA_ACTION_UPDATE}" data-bookid="${book.id}">&#xE8B8;</i></a>

    <a href="#" class="delete" title="delete" data-toggle="tooltip">
        <i class="material-icons"  data-action="${DATA_ACTION_DELETE}" data-bookid="${book.id}">&#xE5C9;</i></a>
  </td>
</tr>
    `
    })
    // console.log(sHTML);

    $('#books-table-container').html(sHTML.join(''))
    addEventListeners()

}

function onChangePage(page) {
    $('.page-item').removeClass('active')
    changePage(page)
    renderBooks()
    $(`.page-item:nth(${currPageIdx + 1})`).addClass('active');
}


function addEventListeners() {
    $(document).ready(function () {
        console.log("store loaded!");

        $('a > i.material-icons').click(function (ev) {
            // ev.stopImmediatePropagation()
            var bookIdx = $(this).data()['bookid']
            console.log('Got your click: ', $(this).data().action, 'book id:', bookIdx)
            if ($(this).data().action === DATA_ACTION_READ) onReadBooks(bookIdx)// console.log('read');
            if ($(this).data().action === DATA_ACTION_DELETE) {
                onDeleteBook(bookIdx)
            }
            if ($(this).data().action === DATA_ACTION_UPDATE) onUpdatedBook(bookIdx)
            //vanilla:  console.log(this.dataset.bookid);
        })
    })
}

function onSetLang(lang) {
    setLang(lang);
    var elTable = document.querySelector('table')
    if (lang === 'he') {
        document.body.classList.add('rtl');
        elTable.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
        elTable.classList.remove('rtl');
    }

    doTrans();
}

function onReadBooks(bookIdx) {
    var book = readBook(bookIdx)
    //book Obj: {// name: , details,  img  }


    $('.modal-title>#book-name').text(book.title)
    // $('.modal-body .card-img ').text(book.img)
    $('.modal-body .card-img ').html(
        `
    <img src="${book.img}"  width="250" height="250">
    `   )
}

function onDeleteBook(bookIdx) {
    deleteBook(bookIdx)
    renderBooks()
}

function onAddBook() {
    var isSampleData = confirm('Use our sample data ?')
    readAndAddNewBook(isSampleData)
    // console.log('adding book...Done ! ')
    renderBooks()
}

function onUpdatedBook(bookIdx) {
    var newPrice = +prompt('Enter Price ')
    while (!newPrice) newPrice = +prompt('Please enter Price ')
    updateBook(bookIdx, newPrice)
    renderBooks()
}


