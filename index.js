import {createStore} from "./store/store.js";
import {initialState} from "./state/state.js";
import {myToDoReducer} from "./reducer/reducer.js";
import {ADD, REMOVE} from "./constants/constants.js";

const myInitialState =  initialState
const mystore = createStore(myToDoReducer, myInitialState)


// renderum  buttonneri onclick i vra dnum enq mer mystore.dispatch() funckian talov hamapatasxan action y ev payloady

function render(){
    const todolist = document.getElementById("todo-list")
    todolist.innerHTML = ""
    const todos = mystore.getState().todos

    todos.forEach((todo)=> {
        const li = document.createElement("li");
        const  p = document.createElement("p");
        p.textContent = todo.text
        const button = document.createElement("button");
        button.className = "rbn"
        button.textContent = REMOVE
        button.onclick = ()=>mystore.dispatch({type: REMOVE, payload: todo.id})
        li.appendChild(p)
        li.appendChild(button)
        todolist.appendChild(li)
    })

}

// kapum enq redux y u viewn

mystore.subscribe(render)

function addTodo (){
    const input = document.getElementById("todo-input")
    const errorMessage = document.getElementById("error-message")
    const text = input.value.trim()


    if(text){
        mystore.dispatch({type: ADD, payload: text})
        input.value = ""
        errorMessage.textContent = ""
    }else{
        errorMessage.textContent = "Please enter a valid todo item name"
    }
}

document.getElementById("add-button").addEventListener("click", addTodo);


// rener enq anum componnety
render()