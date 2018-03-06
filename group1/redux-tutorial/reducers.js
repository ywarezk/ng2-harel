

const initialState = {
    isLoadingFromServer: false,
    todoItems: []
}


/**
 * needs to return the next state
 * @param currentState
 * @param action
 */
function todoReducer(currentState = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {...currentState, isLoadingFromServer: action.payload};
        case 'SET_TASKS':
            return {...currentState, todoItems: action.payload};
        default:
            return currentState;
    }
}