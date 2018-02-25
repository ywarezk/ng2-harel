"use strict";
/**
 * promises example
 */
var myTimerPromise = new Promise(function (resolve, reject) {
    console.log('is this running even though there are no listeners?');
    setTimeout(function () {
        console.log('the async is now resolved');
        resolve('hello world from timer promise');
    }, 1000);
});
// promises - they are not lazy
var whatDataisInThisPromise = myTimerPromise.then(function onfullfilled(msg) {
    console.log("this will run when the promise is resolved the result is: " + msg);
    return msg.length;
}, function onrejected() {
    console.log('this will run when the promise is rejected');
    return 0;
});
myTimerPromise.then(function onfullfilled(msg) {
    console.log("second listener");
}, function onrejected() {
    console.log('this will run when the promise is rejected');
});
// promise will run once for all listeners
// promise chaining
// promise.then().then().then()...
// promises only call resolve or reject once
// are promises cancelable? are not cancelable
