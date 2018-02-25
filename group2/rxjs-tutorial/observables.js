"use strict";
// observer - listener to data stream
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var myNumberObserver = {
    next: function (arg) {
        console.log(arg);
    },
    error: function (err) {
        console.log('will run when data stream sends error');
    },
    complete: function () {
        console.log('will run when data stream ends');
    }
};
var myTimerObservable = Observable_1.Observable.create(function (observer) {
    console.log('will this run even if there are no listeners?');
    var counter = 0;
    var myIntervalId = setInterval(function () {
        console.log('set interval');
        if (counter < 5) {
            observer.next(counter);
            counter++;
        }
        else {
            observer.complete();
        }
    }, 1000);
    // observer.complete();
    return function tearDownLogic() {
        console.log('cleanup set interval');
        clearInterval(myIntervalId);
    };
});
// they are lazy
var myFirstSubscription = myTimerObservable.subscribe(function next(currentCount) {
    console.log("first listener: " + currentCount);
}, function error() {
}, function complete() {
    console.log('this will run when the observable is complete');
});
var mySecondSubscription = myTimerObservable.subscribe(function next(currentCount) {
    console.log("second listener: " + currentCount);
});
// how many times does the data stream run?  we now have two data streams
// is observables cancelable? yes
// setTimeout(() => {
//     myFirstSubscription.unsubscribe();
//     mySecondSubscription.unsubscribe();
// }, 3000);
myTimerObservable.map(function (counter) {
    return 'a';
});
// subject
var myStringSubject = new Subject_1.Subject();
myStringSubject.subscribe(function (msg) {
    console.log(msg);
});
myStringSubject.subscribe(function (msg) {
    console.log(msg);
});
myStringSubject.next('hello world');
myStringSubject.next('dfgdfg');
myStringSubject.next('foo bar');
// myStringSubject.error(new Error('stam error'));
myStringSubject.complete();
