'use strict';
var gIsDev = window.location.origin === "file://" ? true : false
var gProjects;
// var LAST_VISIT_KEY = 'lastvisit';
// var PRROJECTS_KEY = 'projects'

function createDefaultProjects() {
    var projects = loadFromStorage();
    if (!projects || !projects.length || is24hrFromLastStore() || gIsDev) {
        projects = createProjects();
        var lastVisit = Date.now()
        saveToStorage('lastvisit', lastVisit)

    }
    gProjects = projects;
    saveUsers();
}

function saveUsers() {
    saveToStorage('projects', gProjects)
}



function sendMail() {
    var mail = document.querySelector('.input-mail');
    var sub = document.querySelector('.input-sub');
    var msg = document.querySelector('.input-msg');
    var url = createEmailUrl(mail.value, sub.value, msg.value)
    redirectTo(url);
}

