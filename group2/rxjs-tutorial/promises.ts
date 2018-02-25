// promises

const helloWorldPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    console.log('Is the async login run even though there are no listeners?');
    setTimeout(() => {
        resolve('hello world from promise');
        console.log('2');
        resolve('message2');
        // reject(new Error('stam error'));
    }, 1000);
});

// promises - they are not lazy

helloWorldPromise.then(function (msg: string) {
    console.log(msg);
}, function(err: Error) {

});

// promise can return a single value

const secondPromise: Promise<number> = helloWorldPromise.then(function (msg: string) {
    console.log(`second listener: ${msg}`);
    return msg.length;
});

// one screamer many listeners


// promise chaining

// are promises cancelable? promises are not cancelable






