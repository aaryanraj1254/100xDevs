Assignment #3 - Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Hello Baccho...");
})
