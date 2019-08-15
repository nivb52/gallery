export default {
    name: 'todo-filter',
    template: `
<div>
       
    <input type="text" v-model="filterInput.prashe" @input="emitFilter" />
    <!-- <br/>    <br/> -->
       
    <!-- switch button -->
  <div class="switch-toggle switch-3 switch-candy" @change="getSwitchBtnVal">
      <input id="all" name="state-d" type="radio"  checked="checked" value="all" v-model=filterInput.status />
      <label for="all" onclick="">All</label>
      
      <input id="active" name="state-d" type="radio" value="active" v-model=filterInput.status />
      <label for="active" onclick="">Active</label>
      
      <input id="done" name="state-d" type="radio" value="done" v-model=filterInput.status />
      <label for="done" onclick="">Done</label>
      <a></a>
    </div>

</div>
   `,
    data() {
        return {
            filterInput: {
                prashe: '',
                status: 'all'
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('todo-filter', this.filterInput)
        },
        getSwitchBtnVal() {
            this.$emit('todo-filter', this.filterInput)
        }
    },
}

// v-bind:checked="checked"
// v-on:change="$emit('change', $event.target.checked)"