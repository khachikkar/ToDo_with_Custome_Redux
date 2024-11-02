
//stexcum enq c


export const createStore = (reducer, initialState)=>{
    let state = initialState
    const callbacks =  []
    let getState = ()=> state
    let dispatch = (action)=>{
        state = reducer(state, action)
        callbacks.forEach(cb=>cb())
    }
    const subscribe =  callback=>{
        callbacks.push(callback)
        return ()=> callbacks.filter(cb => cb !== callback)
    }
    return{
        getState: getState,
        subscribe:subscribe,
        dispatch: dispatch
    }
}

