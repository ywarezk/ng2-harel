
// observer is our listener

import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";

import 'rxjs/add/operator/map';

const myStringListener: Observer<string> = {
    next: (msg: string) => {
        console.log(`next: ${msg}`)
    },
    error: (err: any) => {
        console.log('this is error');
    },
    complete: () => {
        console.log('when the data stream closes');
    }
}

// observable is the guy that shouts

const myTimerObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('is this running even though there are no listeners? ');
    let counter: number = 0;
    const idOfInterval: number = setInterval(() => {
        console.log('async resolved');
        if (counter < 5) {
            observer.next(counter);
            counter++;
        } else {
            observer.complete();
        }

    }, 1000);

    return function tearDownLogic() {
        console.log('this function is for cleanup');
        clearInterval(idOfInterval);
    }
});

// observables are lazy


const mySubscription: Subscription = myTimerObservable.subscribe(function next(currentCount: number) {
    console.log(`first listener: ${currentCount}`);
});

const mySubscription2: Subscription = myTimerObservable.subscribe(function next(currentCount: number) {
    console.log(`second listener: ${currentCount}`);
});

const mySubscription3 = myTimerObservable.subscribe({
    complete: () => {
        console.log('when the data stream closes');
    }
});

// observable will run for each listener

setTimeout(() => {
    mySubscription.unsubscribe();
    mySubscription2.unsubscribe();
    // mySubscription3.unsubscribe();
}, 3000);

// observables are cancelable

// Subject

const myStringSubject: Subject<string> = new Subject();


myStringSubject.subscribe((msg: string) => {
    console.log(msg);
}, () => {
    console.log('error');
});

myStringSubject.next('hello world');
myStringSubject.next('foo bar');

myStringSubject.map((msg: string) => {
    return msg.length;
}).subscribe()



