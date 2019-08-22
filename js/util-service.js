'use strict';

function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function loadFromStorage(key) {
    // return JSON.parse(localStorage.getItem(key))
    var str = localStorage[key] || 'null'
    if (str === 'undefined') return false
    else return JSON.parse(str);
}

// FETCH ONCE A DAY 
function is24hrFromLastStore() {
    var lastVisit = storageService.load('lastvisit') || -Infinity
    var currDate = Date.now()

    // 86400000 = 24 HOURS
    if (currDate >= lastVisit + 86400000) return true
    else return false
}


function createDateFromStamp(stp) {
    var userLang = window.navigator.language
    var dateFormat = new Date(stp).toLocaleDateString(userLang);
    return dateFormat;
}

function createEmailUrl(mail, subject, body) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}&bcc= `
}
function createWhatsApp(mail, subject, body) {
    const api = "https://api.whatsapp.com/send?l=en";
    const txt = `Hi Niv! I am contacting you about ${subject}  ,after seeing your portfolio. ${body}, my email is ${mail}`;
    const phone = "972548082717"
    const whatsappLink = encodeURI(`${api}&phone=${phone}&text=${txt}`);
    return whatsappLink;
}

function redirectTo(url) {
    window.location.href = url;
}