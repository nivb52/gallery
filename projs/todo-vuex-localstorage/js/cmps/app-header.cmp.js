export default {
    name: 'top-cmp',
    template: ` 
   <header>
   <span> Logged in as: {{userName}} </span> 
   <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
   <span> Completed: {{progressBar}} % </span>

   <h1>Your Todos</h1>
 
   
   </header>
   `,
    computed: {
        userName() {
            return this.$store.getters.getUserName
        },
        progressBar() {
            return (this.$store.getters.getProgressBar * 100).toFixed(0)
        },
    },

}