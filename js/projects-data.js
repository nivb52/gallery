'use strict';

function createProjects() {
    // ID IS ALSO IMG NAME AS JPG 
    // TIME STAMP CONVERTOR :  https://www.epochconverter.com/
    return [
        //1 
        {
            id: 'YachtAway',
            name: 'AirBNB of Yachts',
            subtitle: 'Airbnb marketplace in VueX & VueJs',
            desc: 'An Airbnb market place, Publish of Yachts and Rent them, with PayPal intefration, booking option for later payment.',
            url: 'https://yachtaway.herokuapp.com/',
            isLocal: false,

            publishedAt: 1564568859000,  // 31 July 2019
            labels: ['VueX', 'VueJs', 'Vue Cli', 'Framework', 'sprint-3 weeks'],
            imgFromOtherSource: 'https://res.cloudinary.com/nivb/image/upload/w_400,h_210/hero/motor_yachts_lil9cp.jpg'
        },
        //2 
        {
            id: 'hva',
            name: 'Book your Travel',
            subtitle: 'One page Bootstrap 3 & JS, Single Page App',
            desc: 'This single page website, with the amazing desgin and SEO inmind, using css html and lazy loading',
            url: 'https://haifa-vacation-apartments.com/',
            isLocal: false,

            publishedAt: 1362157865000,  // 1 March 2013 
            labels: ['Vanilla JS', 'CSS', 'HTML', 'BOOTSTRAP 3'],
            imgFromOtherSource: false
        },
        //3

        {
            id: 'haifavacation',
            name: 'Rent an Apartment',
            subtitle: 'Rent apartment in Israel, using CSS , HTML and JS, website',
            desc: 'Javascript website with translation, SEO in mind, rendering data with JavaScript',
            url: 'https://haifavacation.co.il/',
            isLocal: false,

            publishedAt: 1452013865000,  // 1 May 2016
            labels: ['Vanilla JS', 'CSS', 'JavaScript', 'HTML'],
            imgFromOtherSource: false
        },

        {
            id: 'misterbitcoin-react',
            name: 'Mister Bitcoin',
            subtitle: 'React single page application',
            desc: 'Using React routing, animations state managment with Redux hundling data like a pro!',
            url: 'https://nivb52.github.io/react-bitcoin/',
            isLocal: false,

            publishedAt: 1566507654000, // 22 Aug 2019
            labels: ['React', 'ReactJs'],
            imgFromOtherSource: false
        },


        {
            id: 'ball-board',
            name: 'Catch The Ball',
            subtitle: 'Catch Them All',
            desc: 'Board games in Vanilla JS can show you the possiblities to create a fast play game with the no need of jQuery or any framework!, jst 8kb !',
            url: 'projs/ball-board',
            isLocal: true,

            publishedAt: 1557829659000, // 14 May 19
            labels: ['Game', 'Vanilla JS'],
            imgFromOtherSource: false
        },


        {
            id: 'canvas-meme-generator',
            name: 'Meme Generator',
            subtitle: 'with Cnavas',
            desc: 'canvas meme generator. Drag, Edit and play it',
            url: 'https://nivb52.github.io/meme-generator/',
            isLocal: false,

            publishedAt: 1560421659000,  // 13 Jun 2019
            labels: ['Canvas', 'git', 'sprint'],
            imgFromOtherSource: false
        },


        {
            id: 'mines',
            name: 'Mine Sweeper',
            subtitle: 'Clean Desgin Sweeper',
            desc: 'The Famouse Windows Minesweeper Free Online in JavaScript. Play the classic game in Beginner level, Intermediate, Expert or in Test modes.',
            url: 'projs/mines',
            isLocal: true,

            publishedAt: 1348693940000,
            labels: ['Game', 'Vanilla JS', 'matrix', '2D'],
            imgFromOtherSource: false
        },

        {
            id: 'book-shop',
            name: 'book shop',
            subtitle: 'CRUDL with jQuery',
            desc: 'des',
            url: 'projs/book-shop',
            isLocal: true,

            publishedAt: 1559557659000, //  3 Jun 2019
            labels: ['jQuery', 'i18n'],
            imgFromOtherSource: false
        },

        {
            id: 'todosvuex',
            name: 'Todos',
            subtitle: 'with VueX',
            desc: 'Vue.js is a Progressive JavaScript Framework, with the ability to "building things in no time" - as said in there website. At the moment (8/2019) VueJs is more popular than Angular',
            url: 'projs/todo-vuex-localstorage',
            isLocal: true,

            publishedAt: 1564568859000, // 31 Jul 2019
            labels: ['VueX', 'VueJs', 'Vue Cli', 'Framework', 'sprint'],
            imgFromOtherSource: false
        },

        {
            id: 'touch-in-nums',
            name: 'touch the numes',
            subtitle: 'with Vanilla JS',
            desc: 'Games That Matter. Touch Press provides high-quality games that are also opportunities to engage with key academic subjects and skills',
            url: 'projs/touch-in-nums',
            isLocal: true,
            publishedAt: 1557656859000, // 12 May 2019
            labels: ['Game', 'Vanilla JS', 'JavaScript'],
            imgFromOtherSource: false
        },

        {
            id: 'mth',
            name: 'Haifa technology center',
            subtitle: 'Wordpress website',
            desc: 'The Haifa technology center is a project in WP with several admins and opinions about styleing a website :)',
            url: 'https://mth.org.il',
            isLocal: false,

            publishedAt: 1488647465000, // 04 March 2017
            labels: ['Wordpress'],
            imgFromOtherSource: 'https://mth.org.il/assets/media/2019/06/IMG_20171211_081142-1024x578.jpg'
        },


        // Bank Dash Controller', 'On this page you will find several links to several of our online Bitcoin services. These weblink online services include demo\'s for consumer online banking,


    ]
}



