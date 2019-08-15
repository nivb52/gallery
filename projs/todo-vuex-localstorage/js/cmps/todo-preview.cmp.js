export default {
    name: 'todo-preview',
    template: `
      <li @click="doToggleDone" 
          :class="!todo.isActive? 'done' : '' ">
          {{todo.name}} |
          {{todo.type}} |
          <router-link :to="todoUrl" >Edit</router-link>
      </li>
    `,
    props: ['todo'],
    computed: {
        todoUrl() {
            return '/todo/edit/' + this.todo._id
        }
    },
    methods: {
        doToggleDone() {
            this.$store.commit('toggleDone', this.todo._id)
        }
    },
}