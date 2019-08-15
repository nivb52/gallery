import { todoService } from './service/todo.service.js'
//run the query
todoService.query()
const Todos_DB = todoService.todo
    // console.log(Todos_DB);

const store = new Vuex.Store({
    strict: true,
    state: {
        todos: Todos_DB || [],
        filterByTxt: '',
        filterByStatus: 'all',
        id: null

    },
    mutations: {

        setFilter(state, filter) {
            state.filterByTxt = filter.prashe.toLowerCase()

            switch (filter.status.toLowerCase()) {
                case "active":
                    state.filterByStatus = true
                    break;
                case "done":
                    state.filterByStatus = false
                    break;
                default:
                    state.filterByStatus = 'all'
                    break;

            }
        },

        idToShow(state, idx) {
            state.id = idx
        },

        editTodo(state, updatedTodo) {
            updatedTodo = (JSON.parse(JSON.stringify(updatedTodo.todo)))
            const editIdx = state.todos.findIndex(todo => todo._id === updatedTodo._id);
            state.todos.splice(editIdx, 1, updatedTodo)
            todoService.saveTodo(Todos_DB)
        },

        toggleDone(state, idx) {
            const editTodo = state.todos.find(todo => todo._id === idx);
            editTodo.isActive = !editTodo.isActive
        }

        //:::EXAMPLE:::
        //     updatePet(state, payload) {
        //         console.log('PET IS STILL:', payload.pet);
        //:::EXAMPLE:::
        //         const idx = state.pets.findIndex(pet => pet._id === payload.pet._id)
        //         state.pets.splice(idx, 1, payload.pet)
        //             // state.pets[idx] = payload.pet
        //     },
    },
    getters: {

        todosToShow(state) {
            var filteredTodos
                // console.log(state.filterByStatus, 'by status');

            if (state.filterByStatus === 'all') {
                filteredTodos = state.todos.filter(todo => todo.name.toLowerCase().includes(state.filterByTxt))
            } else {
                filteredTodos = state.todos.filter(todo => todo.name.toLowerCase().includes(state.filterByTxt) &&
                    todo.isActive === state.filterByStatus)
            }
            return filteredTodos
        },
        getTodoById(state) {
            const id = state.id
            if (!id) return
            const todo = state.todos.find(todo => todo._id === id)
            return todo
                // THERE IS A BETTER WAY TO GET THE ID,
                //  THERE IS AN EXAMPLE IN VUEX DOCUMENTAION
                // NO NEED TO DO 4 STEPS, OF MIUTATION => GETTERS

        },
        getUserName(state) {
            return state.todos[0].owner
        },
        getProgressBar(state, getters) {
            const DoneTodos = state.todos.filter(todo => !todo.isActive)
            return (DoneTodos.length / state.todos.length)
        }
        //     :::EXAMPLE::: 
        //      awakePets(state, getters) {
        //         return getters.petsToShow.filter(pet => pet.isAwake)
        //     }
    },
})

export default store;