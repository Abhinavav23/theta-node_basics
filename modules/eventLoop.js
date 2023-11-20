console.log("start");

setTimeout(() => {
    console.log("from timer 1");
}, 1000);

setImmediate(() => {
    console.log("immidiate called");
})

console.log("end");


// start
// move to EL
// move to EL
// end
