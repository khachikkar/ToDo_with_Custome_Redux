
//stexcum enq createStore funckian  talov argument reducer ev initial state
// vori mej stexcum enq state veragrum initial state y
// stexcum enq cb zangvac
// stexcum enq getState methody  vory return e anum state y
//s texcum enq dispatch methody vory stanum e action
// statin veragrum e kanchum e reducer y statov u action ov
// stexcum enq subscribe methody vory kapum e reduxcy UI in
//return enq anum stexcvac methodnery





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

