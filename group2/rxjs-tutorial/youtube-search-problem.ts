/**
 * solving the youtube search problem
 */

// import {Observable} from "rxjs/Observable";


declare var Rx: any;

// const eventObservable: Observable<Event> = Rx.Observable.fromEvent(document.getElementById('search'), 'input');
Rx.Observable.fromEvent(document.getElementById('search'), 'input')
    // .map((event: Event) => {
    //     return (event.target as HTMLInputElement).value
    // })
    .pluck('target', 'value')
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((searchString: string) => {
        return Rx.Observable.ajax({
            url: `https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`
        })
    })
    .pluck('response')
    .subscribe((json: any) => {
        console.log(json);
    });