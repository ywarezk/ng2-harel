
const initialState = new Immutable.Map({
    isLoadingFromServer: true,
    todoItems: []
})


function todoReducer(currentState=initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return currentState.set('isLoadingFromServer', action.payload);
        case 'SET_TASKS':
            return currentState.set('todoItems', action.payload);
        default:
            return currentState;
    }
}