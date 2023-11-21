const fs = require('fs');
console.log("start");

// immidiate push to cb queue 
// node adds some amount of delay by default to 0 sec timers
setTimeout(() => {
    console.log("from timer 1");
}, 0);

// immidiate push to cb queue
setImmediate(() => {
    console.log("immidiate called");
});

// this will take some time ~ 100ms
fs.readFile('failure_log.txt', (err, content) => {
    if(err){
        console.log("err occured");
    }else{
        console.log('read file successful');
    }
})

process.nextTick(() => {
    console.log("inside next tick - 1");
})


Promise.resolve()
.then(() => {
    console.log("inside promise");
    process.nextTick(() => {
        console.log("inside next tick - 2");
    })
})

console.log("end");
console.log("---------------");


// start
// move to EL
// move to EL
// end

// JS code------>
// start
// 1. setTimeout will be finished t timer cb queue
// 2. setImmidiate will be pished t immidiate cb queue
// 3. will wait for event loop to notify and put cb in the async queue
// 4. will put the cb in next tick queue
// 5. promise will put cb in promise queue(microtask queue)
// end 
// ------


// cb queue
// timer queue --> 0
// async - 0
// immidiate - 0
// cleanup - 0

// Wild cards
// next tick - 0
// promise - 0



// output
// start
// end
// ----
// inside next tick - 1
// inside promise
// inside next tick - 2
// from timer 1
// immidiate called
// read file successful