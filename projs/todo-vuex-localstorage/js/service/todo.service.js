import { storageService } from './storage.service.js'
// import { utilService } from './util.service.js'
const TODO_KEY = 'mytodo'
const TIME_KEY = 'time'
const accessTime = Date.now()

const Todos_DB = [
    { _id: 'a10', name: 'wash the dishes', type: 'private', isActive: true, owner: 'Eli' },
    { _id: 'a11', name: 'walk the dog', type: 'private', isActive: true, owner: 'Eli' },
    { _id: 'a12', name: 'finish work', type: 'work', isActive: true, owner: 'Eli' },
    { _id: 'a13', name: 'swim', type: 'fun', isActive: false, owner: 'Eli' },
    { _id: 'a14', name: 'play football', type: 'fun', isActive: true, owner: 'Eli' },
    { _id: 'a15', name: 'do homework', type: 'work', isActive: true, owner: 'Eli' },
    { _id: 'a16', name: 'do a walk', type: 'sport', isActive: false, owner: 'Eli' },
];

const todo = query()

function query() {
    let checkDBVersion = storageService.load(accessTime)
        // deleting your LOCAL every 20 min
        // 1000 = 1 sec, 60,000 = 1 min, 600,000 = 10 min 
    if ((checkDBVersion + 1200000) < accessTime) localStorage.clear()

    var todos = storageService.load(TODO_KEY) || Todos_DB
    storageService.store(TODO_KEY, todos)
    storageService.store(TIME_KEY, accessTime)
    return todos
}

function saveTodo(todosToSave) {
    storageService.store(TODO_KEY, todosToSave)
    storageService.store(TIME_KEY, Date.now())
}

export const todoService = {
    query,
    todo,
    saveTodo
}