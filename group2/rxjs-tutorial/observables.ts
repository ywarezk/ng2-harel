



// observer - listener to data stream


import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";


const myNumberObserver: Observer<number> = {
    next: (arg: number) => {
        console.log(arg);
    },
    error: (err: any) => {
        console.log('will run when data stream sends error')
    },
    complete: () => {
        console.log('will run when data stream ends')
    }
}


const myTimerObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('will this run even if there are no listeners?');

    let counter: number = 0;
    const myIntervalId: number = setInterval(() => {
        console.log('set interval');
        if (counter < 5) {
            observer.next(counter);
            counter++;
        } else {
            observer.complete();
        }

    }, 1000)

    // observer.complete();

    return function tearDownLogic() {
        console.log('cleanup set interval');
        clearInterval(myIntervalId);
    }
});

// they are lazy

const myFirstSubscription: Subscription = myTimerObservable.subscribe(function next(currentCount: number) {
    console.log(`first listener: ${currentCount}`);
}, function error(){

}, function complete() {
    console.log('this will run when the observable is complete');
})

const mySecondSubscription: Subscription = myTimerObservable.subscribe(function next(currentCount: number) {
    console.log(`second listener: ${currentCount}`);
});


// how many times does the data stream run?  we now have two data streams

// is observables cancelable? yes


// setTimeout(() => {
//     myFirstSubscription.unsubscribe();
//     mySecondSubscription.unsubscribe();
// }, 3000);


myTimerObservable.map((counter: number) => {
    return 'a';
});

// subject

const myStringSubject: Subject<string> = new Subject<string>();

myStringSubject.subscribe((msg: string) => {
    console.log(msg);
});

myStringSubject.subscribe((msg: string) => {
    console.log(msg);
});

myStringSubject.next('hello world');
myStringSubject.next('dfgdfg');
myStringSubject.next('foo bar');
// myStringSubject.error(new Error('stam error'));
myStringSubject.complete();


