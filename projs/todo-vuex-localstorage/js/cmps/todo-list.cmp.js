import todoPreview from '../cmps/todo-preview.cmp.js'


export default {
    name: 'todo-list',
    template: `
   <section>
   <h3>TODO List</h3>
   <ul>
      <todo-preview v-for="currTodo in todos" 
                    :todo="currTodo" 
                    :key="currTodo._id" >
      </todo-preview>
   </ul>
   </section>

   `,
    props: ['todos'],
    components: {
        todoPreview
    }
}