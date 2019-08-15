export default {
    name: 'top-cmp',
    template: ` 
   <header>
   <div> {{userName}} </div>
   <span> Completed: {{progressBar}} % </span>
   
   </header>
   `,
    computed: {
        userName() {
            return this.$store.getters.getUserName
        },
        progressBar() {
            return (this.$store.getters.getProgressBar * 100).toFixed(2)
        },
    },

}