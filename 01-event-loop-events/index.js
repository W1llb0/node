const fs = require('fs')
const dns = require('dns')
const { nextTick } = require('process')

function info(text) {
    console.log(text, performance.now().toFixed(2))
}

console.log('Program start')

// Timeouts
setTimeout(() => info('TimeOut 1'), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('TimeOut 2')
}, 100)

// Close events
fs.writeFile('./test.txt', 'Hello Node.js', () => info('file written'))

// Promises
Promise.resolve().then(() => info('Promise 1'))

// Next tick
process.nextTick(() => info('next Tick 1'))

// SetImmediate (check событие)
setImmediate(() => info('Immediate 1'))

// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`)
    if(intervalCount === 2) clearInterval(intervalId)
}, 50)

// I/O events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost')
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Program end')