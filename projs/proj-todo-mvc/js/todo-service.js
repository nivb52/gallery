
var gTodos;
var gFilterBy = 'All';
var gSortBy

function createTodos() {
    var todos = loadFromStorage('todos')
    if (!todos || !todos.length) {
        todos = [
            createTodo('Learn JS', 2),
            createTodo('Master CSS', 1),
            createTodo('Live good', 3),
        ]
    }
    gTodos = todos;
    saveTodos();
}

function createTodo(txt, importance = 1) {
    return {
        id: makeId(),
        txt: txt,
        isDone: false,
        createdAt: Date.now(),
        importance: importance  //1-3
    }
}

function getTodosForDisplay() {
    // connected to : filterBy
    if (gFilterBy === 'All') return gTodos;
    return gTodos.filter(function (todo) {
        return (todo.isDone && gFilterBy === 'Done') ||
            (!todo.isDone && gFilterBy === 'Active')
    })
}


function addTodo(txt, importance) {
    var todo = createTodo(txt, importance);
    gTodos.unshift(todo);
    saveTodos();
}

function deleteTodo(todoId) {
    var todoIdx = gTodos.findIndex(function (todo) { return todo.id === todoId });
    gTodos.splice(todoIdx, 1);
    saveTodos();
}

function changeImportanceTodo(todoId, change) {
    var todo = gTodos.find(function (todo) { return todo.id === todoId });
    var currImp = todo.importance;
    if (currImp === 3 & change === 1 || currImp === 1 && change === -1) return
    currImp >= 1 && currImp <= 3 ? todo.importance += change : currImp
    setSort(gSortBy);
    saveTodos();
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function (todo) { return todo.id === todoId });
    todo.isDone = !todo.isDone;
    saveTodos();
}

function setFilter(txt) {
    gFilterBy = txt;
}

function setSort(txt) {
    if (!gTodos || !txt) return
    gSortBy = txt.toLowerCase()

    switch (gSortBy) {
        case 'importance':
            var key = 'importance'
            sortByBigNum(key)
            break;

        case 'created':
            var key = 'createdAt'
            sortByBigNum(key)
            break;

        case 'a-b':
            sortByAb()
            break;
    }

}

function getTotalCount() {
    // we use  isArray for next gen app    // TODO : display No TODO some where else 
    return Array.isArray(gTodos) && gTodos.length > 0 ? gTodos.length : 'No Todos'
}

function getActiveCount() {
    var activeTodos = gTodos.filter(function (todo) { return !todo.isDone })
    return activeTodos.length > 0 ? activeTodos.length : 'No Active Todos'
}

function saveTodos() {      
    saveToStorage('todos', gTodos)
}



