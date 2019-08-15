var gTrans = {
    'title': {
        en: 'The book shop',
        he: 'חנות הספרים'
    },
    'sub-title': {
        en: 'Books list',
        he: 'רשימת הספרים',
    },
    'filter-add-new-book': {
        en: 'Add New Book',
        he: 'הוסף ספר חדש',
    },
    'filter-id': {
        en: 'ID',
        he: 'מק"ט',
    },
    'filter-title': {
        en: 'Title',
        he: 'כותר',
    },
    'filter-price': {
        en: 'Price (ILS)',
        he: 'מחיר (ש"ח)',
    },
    'filter-author': {
        en: 'Author',
        he: 'מחבר',
    },
    'filter-cover': {
        en: 'Cover',
        he: 'עטיפה',
    },
    'filter-status': {
        en: 'Status',
        he: 'זמינות',
        // he: { title: 'זמינות' , available: 'זמין', rented: 'מושכר'}
    },
    'filter-action': {
        en: 'Actions',
        he: 'פעולות',
    },
    'filter-close': {
        en: 'Close',
        he: 'סגור',
    },
    'filter-order': {
        en: 'Order',
        he: 'הזמן',
    },
    'filter-export-to-excel': {
        en: 'Export to excel',
        he: 'ייצא לאקסל',
    },
    'filter-showing': {
        en: ' ',
        he: '  ',
    },
    'filter-previous': {
        en: 'previous',
        he: 'הקודם',
    },
    'filter-next': {
        en: 'next',
        he: 'הבא',
    }
}

var gCurrLang = 'en';

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');

    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var transKey = el.dataset.trans; // OR var transKey = el.getAttribute('data-trans');
        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}

function setLang(lang) {
    gCurrLang = lang;
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}



function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    var currency
    gCurrLang === 'en' ? currency = 'USD' : currency = 'ILS'
    return new Intl.NumberFormat( gCurrLang, { style: 'currency', currency: currency }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}


function kmToMiles(km) {
    return km / 1.609;
}