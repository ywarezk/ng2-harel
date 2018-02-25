"use strict";
// observer is our listener
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
var myStringListener = {
    next: function (msg) {
        console.log("next: " + msg);
    },
    error: function (err) {
        console.log('this is error');
    },
    complete: function () {
        console.log('when the data stream closes');
    }
};
// observable is the guy that shouts
var myTimerObservable = Observable_1.Observable.create(function (observer) {
    console.log('is this running even though there are no listeners? ');
    var counter = 0;
    var idOfInterval = setInterval(function () {
        console.log('async resolved');
        if (counter < 5) {
            observer.next(counter);
            counter++;
        }
        else {
            observer.complete();
        }
    }, 1000);
    return function tearDownLogic() {
        console.log('this function is for cleanup');
        clearInterval(idOfInterval);
    };
});
// observables are lazy
var mySubscription = myTimerObservable.subscribe(function next(currentCount) {
    console.log("first listener: " + currentCount);
});
var mySubscription2 = myTimerObservable.subscribe(function next(currentCount) {
    console.log("second listener: " + currentCount);
});
var mySubscription3 = myTimerObservable.subscribe({
    complete: function () {
        console.log('when the data stream closes');
    }
});
// observable will run for each listener
setTimeout(function () {
    mySubscription.unsubscribe();
    mySubscription2.unsubscribe();
    // mySubscription3.unsubscribe();
}, 3000);
// observables are cancelable
// Subject
var myStringSubject = new Subject_1.Subject();
myStringSubject.subscribe(function (msg) {
    console.log(msg);
}, function () {
    console.log('error');
});
myStringSubject.next('hello world');
myStringSubject.next('foo bar');
myStringSubject.map(function (msg) {
    return msg.length;
}).subscribe();
