// solving the youtube search


// import {Observable} from "rxjs/Observable";
// import 'rxjs/add/observable/fromEvent';


// import {Observable} from "rxjs/Observable";

// import {AjaxResponse} from "rxjs/Rx";

declare var Rx: any;

Rx.Observable
    .fromEvent(document.getElementById('search') as any, 'input')
    .map((event: Event) => (event.target as HTMLInputElement).value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((searchString: string) => {
        return Rx.Observable.ajax({
            url: `https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`
        })
    })
    // .map((res: any) => {
    //     return new Task()...
    // })
    .subscribe((searchString: any) => {
        console.log(searchString.response);
    });

// myEventObservable.subscribe((event: Event) => {
//     console.log('this will jump everytime the user types');
// })