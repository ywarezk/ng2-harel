

// {
//      isLoadingFromServer: false,
//      todoItems: []
// }

// --->

// {
//      isLoadingFromServer: true,
//      todoItems: []
// }

// --->

// {
//      isLoadingFromServer: false,
//      todoItems: [ {title: sfa, description: sfsdf} ...]
// }

function setIsLoading(isLoading) {
    return {
        type: 'SET_LOADING',
        payload: isLoading
    }
}

function setTasks(tasks) {
    return {
        type: 'SET_TASKS',
        payload: tasks
    }
}






