import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('timeout', (secondsQty) => {
    console.log(`Timeout event! in ${secondsQty} seconds`);
});

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
    console.log('Single event occirred');
});

setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 1500);
