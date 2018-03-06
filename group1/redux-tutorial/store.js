

var store = Redux.createStore(todoReducer);


console.log('settings the loading state')
store.dispatch(setIsLoading(true));

fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((res) => {
    console.log('turning of the loading state');
    store.dispatch(setIsLoading(false));
    res.json().then((tasks) => {
        console.log('setting the tasks in the state');
        store.dispatch(setTasks(tasks));
    })
});