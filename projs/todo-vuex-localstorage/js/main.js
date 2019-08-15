
'use strict'


import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })

import myStore from './store.js'



// import appHeader from './cmps/app-header.cmp.js'

var app = new Vue({
    el: '#app',
    created() {
        // console.log('App Created!');
    },
    template: `
        <div>
            <!-- <app-header></app-header> -->
            <router-view></router-view>
            <span hidden> ♂ÑÈ </span>
            <footer> ToDo ║┴„┴╢ 2019 </footer>
        </div>
    `,
    components: {
        // appHeader
    },
    methods: {
        foo() {
            console.log('Got Foo');
        }
    },
    router: myRouter,
    store: myStore
})