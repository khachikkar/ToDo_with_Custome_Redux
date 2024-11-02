import {ADD, REMOVE} from "../constants/constants.js";


// stexcum enq reducer funkcian talov initial state u action
// yst action.ttype i u payloady  poxum enq state y

export function myToDoReducer  (myInitialState, action){
    switch (action.type){
        case ADD :
            return {
                ...myInitialState,
                todos: [...myInitialState.todos, {id: Date.now(), text:action.payload}]
            }
        case REMOVE:{
            return{
                ...myInitialState,
                todos: myInitialState.todos.filter((todo)=> todo.id !== action.payload)
            }
        }
        default : return myInitialState

    }
}
