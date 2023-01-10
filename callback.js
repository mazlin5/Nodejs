// pass function as parameter to other functions and call them inside outer functions
// js runs code top-down or run after something else has occured FIRST (asynchronous programming)
// function print(callback) {
//     callback();
// }

const msg = function () {
    console.log('this will show after 2 seconds');
}

setTimeout(msg, 2000);

// cleaner callback

setTimeout(function() {
    console.log('this will show after 3 seconds');
}, 4000);

// callback as an arrow function

setTimeout(() => {
    console.log('This message is shown after 4 seconds');
}, 4000);

