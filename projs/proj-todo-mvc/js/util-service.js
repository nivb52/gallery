function makeId(length=5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function sortByBigNum(value) {   
    gTodos.sort(function (a, b) { return b[value] -  a[value] })

}

function sortByAb() {
    gTodos.sort(function (a, b) {
        var nameA = a.txt.toUpperCase()
        var nameB = b.txt.toUpperCase()

        if (nameA > nameB) return 1
        if (nameA < nameB) return -1
        return 0 // equals
    })

}