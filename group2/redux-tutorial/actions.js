

function setLoading(isLoading) {
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