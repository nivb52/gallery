// import homepage from './pages/homepage.cmp.js';
import todoApp from './pages/todo-app.cmp.js';
import todoEdit from './pages/todo-edit.cmp.js'
// import toodDetails from './pages/todo-details.cmp.js';


export default [
    // { path: '/', component: homepage },
    { path: '/', component: todoApp },
    { path: '/todo/edit/:id', component: todoEdit }
    // { path: '/todo/:theCarId', component: carDetails },
]