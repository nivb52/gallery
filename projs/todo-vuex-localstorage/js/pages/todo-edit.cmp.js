export default {
    name: 'todo-edit',
    template: `
   <section>

       <h2> Edit Todo</h2>
       <input type="text" v-model="todo.name"
       @keyup.enter="editTodo"
       />
       <input type="text" v-model="todo.type" @keyup.enter="editTodo"/>
       <button @click="editTodo">Commit</button>
</br>
</br>
</br>
   </section>
   `,
    data() {
        return {
            getId: '',
            todo: {}
        }
    },
    created() {
        this.getId = this.$route.params.id
        this.$store.commit("idToShow", this.getId)
        this.todo = (JSON.parse(JSON.stringify(this.$store.getters.getTodoById)))
    },
    methods: {
        editTodo() {
            this.$store.commit({ type: 'editTodo', todo: this.todo })
            setTimeout(this.$router.go(-1), 1000)

        } //this.todo
    },

}