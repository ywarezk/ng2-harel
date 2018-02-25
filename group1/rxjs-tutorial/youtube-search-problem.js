"use strict";
// solving the youtube search
Rx.Observable
    .fromEvent(document.getElementById('search'), 'input')
    .map(function (event) { return event.target.value; })
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap(function (searchString) {
    return Rx.Observable.ajax({
        url: "https://nztodo.herokuapp.com/api/task/?format=json&search=" + searchString
    });
})
    .subscribe(function (searchString) {
    console.log(searchString.response);
});
// myEventObservable.subscribe((event: Event) => {
//     console.log('this will jump everytime the user types');
// })
