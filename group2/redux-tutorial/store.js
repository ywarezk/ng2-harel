

var store = Redux.createStore(todoReducer);

// {
//     isLoadingFromServer: false,
//     todoItems: []
// }

// -->

// {
//     isLoadingFromServer: true,
//     todoItems: []
// }

// -->

// {
//     isLoadingFromServer: false,
//     todoItems: [{title: ...}...]
// }

console.log('initial state');

store.dispatch(setLoading(true));

console.log('sending request to server');

fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(
    (res) => {
        console.log('getting response from server set isLoadingFromSErver false');
        store.dispatch(setLoading(false));
        res.json().then((tasks) => {
            console.log('setting the tasks');
            store.dispatch(setTasks(tasks));
        });
    }
);