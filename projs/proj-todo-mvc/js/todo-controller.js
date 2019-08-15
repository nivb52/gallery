function onInit() {
    createTodos();
    renderTodos();
}

function renderTodos() {
    var todos = getTodosForDisplay();

    var strHtmls = todos.map(function (todo) {
        var className = (todo.isDone) ? 'done' : '';
        var classNameTxt = 'todo-txt'   
        if (todo.importance === 3) var classNameImp = 'high-imp'  // SET CLASS STYLE

        return `<li class="${className}" onclick="onToggleTodo('${todo.id}')">
            <button onclick="onDeleteTodo(event, '${todo.id}')">x</button>
           <span class="${classNameTxt}" > ${todo.txt} </span>
           <span class="todo-imp ${classNameImp}" > ${todo.importance} </span>
           

            <button onclick="onUpgradeTodo(event, '${todo.id}')">+</button>
            <button onclick="onDowngradeTodo(event, '${todo.id}')">-</button>
        </li>`
    })

    document.querySelector('.todo-list').innerHTML = strHtmls.join('');

    renderStats();

    // console.table(gTodos)
}

function renderStats() {
    document.querySelector('.total-count').innerText = getTotalCount();
    document.querySelector('.active-count').innerText = getActiveCount()
}

function onAddTodo() {
    var txt = prompt('What todo?')
    if (!txt || txt.trim() === '') return
    addTodo(txt);
    renderTodos();
}

function onDeleteTodo(ev, todoId) {
    ev.stopPropagation();
    // var isConfirm = confirm('are you sure?')
    // if (!isConfirm) return
    deleteTodo(todoId);
    renderTodos();
}

function onUpgradeTodo(ev, todoId) {
    ev.stopPropagation();
    changeImportanceTodo(todoId, 1);
    renderTodos();
}
function onDowngradeTodo(ev, todoId) {
    ev.stopPropagation();
    changeImportanceTodo(todoId, -1);
    renderTodos();
}

function onToggleTodo(todoId) {
    toggleTodo(todoId);
    renderTodos();
}

function onSetFilter(txt) {
    console.log('Filtering by', txt);
    setFilter(txt);
    renderTodos();
}

function onSetSort(txt) {
    setSort(txt)
    console.log('Sorting by', txt);
    renderTodos();
}





