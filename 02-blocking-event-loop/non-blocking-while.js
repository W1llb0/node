const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    });
}

async function whyleLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whyleLoop().then(() => console.log('While loop ended'));
