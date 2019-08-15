function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt.toUpperCase();
}
// makeId short : 
// Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N)
// OR 
//  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function genBookName() {
    var BookStartName = ['In 30 days learn to ','The Kid of the ','The ', 'A ', 'NightMare in ', ' Never Say ', 'The Summer in ', 'Sunday in ', 'The story of ']
    var possible = 'bdfgklmnprstyz'
    var letter = possible.charAt(Math.floor(Math.random() * possible.length))

    var len = BookStartName.length
    var randNum = Math.floor(Math.random() * len)

    var txt = BookStartName[randNum]
    txt += letter
    txt += 'u'
    txt += letter //possible.charAt(Math.floor(Math.random() * possible.length))
    // txt += 'i'
    return txt;
}


function randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date
}

function randomName() {
    var namesFirst = ['Michael', 'Paula', 'Antonio', 'Mary', 'Martin', 'Amos', 'Oren', 'Maor']
    var namesLast = ['Holz', 'Wilson', 'Moreno', 'Saveley', 'Sommer', 'Oz' , 'Ram' , 'Alon']

    var len = namesFirst.length
    var numA = Math.floor(Math.random() * len)
    var numB = Math.floor(Math.random() * len)
    return namesFirst[numA] + ' ' + namesLast[numB]
}


function genRandomStatus() {
    var randNum = Math.random()*10
    if (randNum < 2) return { css: 'danger', text: 'Ruined' }
    if (randNum < 4) return { css: 'warning', text: 'Rented' }
    return { css: 'success', text: 'Active' }
}

