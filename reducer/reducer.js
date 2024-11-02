export function myToDoReducer  (myInitialState, action){
    switch (action.type){
        case "ADD" :
            return {
                ...myInitialState,
                todos: [...myInitialState.todos, {id: Date.now(), text:action.payload}]
            }
        case "REMOVE":{
            return{
                ...myInitialState,
                todos: myInitialState.todos.filter((todo)=> todo.id !== action.payload)
            }
        }
        default : return myInitialState

    }
}
