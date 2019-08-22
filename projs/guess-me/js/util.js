
function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

/*
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function sortByBigNum(arr, value) {
    arr.sort(function (a, b) { return b[value] - a[value] })
    saveUsers(arr)
    console.log('by last login');
}

function sortByAb(arr,key) {
    arr.sort(function (a, b) {
        var nameA = a[key].toUpperCase()
        var nameB = b[key].toUpperCase()

        if (nameA > nameB) return 1
        if (nameA < nameB) return -1
        return 0 // equals
    })
    console.log('by ab');
    
    saveUsers(arr)
}

function getCurrPage() {
    var currPageUrl = window.location.href.split('/')
    currPageUrl = currPageUrl[currPageUrl.length - 1]
    return currPageUrl

}


function generatePukiName(length = 4) {
    var txt = ''
    var possible = 'bdfgklmnprstyz'
    var letter = possible.charAt(Math.floor(Math.random() * possible.length))
    txt += letter
    txt += 'u'
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
    txt += 'i'
    return txt;
}

function addDemoUsers(arr) {
    arr.push(createUser('sss', '1'))
    arr.push(createUser('user', 'user'))
    arr.push(createUser('User', 'user'))
}


function addDemoAdmin(arr) {
    var defaultPass = '1234'
    var adminNames = ['admin', 'Admin', 'ADMIN']
    var adminList = []

    for (var i = 0; i < adminNames.length; i++) {
        adminList.push(createUser(adminNames[i], defaultPass))
        adminList[i].isAdmin = true
    }

    arr.push(...adminList)
}

function randomDate(start, end) {
    var date =  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date
}


// the html page you in, 2nd method:
// location.pathname.substring(location.pathname.lastIndexOf("/") + 1); 
*/