"use strict";
/**
 * solving the youtube search problem
 */
// const eventObservable: Observable<Event> = Rx.Observable.fromEvent(document.getElementById('search'), 'input');
Rx.Observable.fromEvent(document.getElementById('search'), 'input')
    .pluck('target', 'value')
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap(function (searchString) {
    return Rx.Observable.ajax({
        url: "https://nztodo.herokuapp.com/api/task/?format=json&search=" + searchString
    });
})
    .pluck('response')
    .subscribe(function (json) {
    console.log(json);
});
