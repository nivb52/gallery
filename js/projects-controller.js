'use strict';

function initPage(){
    createDefaultProjects();
    renderProjectsList();
}

function onSendMail(){
    sendMessage('mail');
}

function onSendWhatsapp(){
    sendMessage('whatsapp');
}

