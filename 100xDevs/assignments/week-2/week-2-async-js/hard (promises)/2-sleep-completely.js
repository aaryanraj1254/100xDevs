/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function busyWait(ms) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < ms) {
           
        }
        resolve();
    });
}
busyWait(1000).then(() => {
    console.log('1 second has passed');
});
