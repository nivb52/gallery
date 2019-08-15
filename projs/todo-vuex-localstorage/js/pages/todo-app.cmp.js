import todoFilter from '../cmps/todo-filter.cmp.js'
import todoList from '../cmps/todo-list.cmp.js'
import appHeaderCmp from '../cmps/app-header.cmp.js';

export default {
    name: 'app-header',
    template: `
    <section class="todo-app">    
        <app-header-cmp></app-header-cmp>
        </br>
        <todo-filter @todo-filter="setFilter"></todo-filter>
        <todo-list :todos="todosQuery"></todo-list>
    </section>
    `,
    data() {
        return {}
    },
    components: {
        todoFilter,
        todoList,
        appHeaderCmp
    },
    computed: {
        todosQuery() {
            return this.$store.getters.todosToShow
        },
        //     return this.$store.state.pets.length

    },
    methods: {
        //         this.$store.commit('addPet', {name: 'Chipi', type: 'Parrot'})
        //         this.$store.commit('deletePet', petId)
        //         this.$store.commit('awakePet', petId)
        setFilter(filterBy) {
            this.$store.commit('setFilter', filterBy)
        },
    }
}