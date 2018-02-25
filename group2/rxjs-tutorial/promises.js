"use strict";
// promises
var helloWorldPromise = new Promise(function (resolve, reject) {
    console.log('Is the async login run even though there are no listeners?');
    setTimeout(function () {
        resolve('hello world from promise');
        console.log('2');
        resolve('message2');
        // reject(new Error('stam error'));
    }, 1000);
});
// promises - they are not lazy
helloWorldPromise.then(function (msg) {
    console.log(msg);
}, function (err) {
});
// promise can return a single value
var secondPromise = helloWorldPromise.then(function (msg) {
    console.log("second listener: " + msg);
    return msg.length;
});
// one screamer many listeners
// promise chaining
// are promises cancelable? promises are not cancelable
