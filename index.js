import {createStore} from "./store/store";
import {initialState} from "./state/state.js";
import {myToDoReducer} from "./reducer/reducer.js";
import {ADD, REMOVE} from "./constants/constants.js";

const myInitialState =  initialState
const mystore = createStore(myToDoReducer, myInitialState)


function render(){
    const todolist = document.getElementById("todo-list")
    todolist.innerHTML = ""
    const todos = mystore.getState().todos

    todos.forEach((todo)=> {
        const li = document.createElement("li");
        li.textContent = todo.text
        const button = document.createElement("button");
        button.textContent = REMOVE
        button.onclick = ()=>mystore.dispatch({type: REMOVE, payload: todo.id})
        li.appendChild(button)
        todolist.appendChild(li)
    })

}

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

render()