const EventEmitter = require("events");

// on user Login i will write something in my file

// for Login Scenario
// start --> 10
// check for user validation --> yes OR No --> failure --> 3
// check for password ---> YES Or NO ---> failure --> 2
// success --> 5
const Login = new EventEmitter();

// step - 1
// Event name --> start_Login, Success, Failure

// step -2 -- attaching listeners on events
Login.addListener("start_Login", (username) => {
    // write it in a txt file
    console.log(`Login Started for ${username}`);
});

Login.addListener("success", (username) => {
    console.log("login successful", username);
})

Login.on("failure", (username) => {
    console.log("login failed", username);
})


// triggering the event
Login.emit("start_Login", "Abhinav");
Login.emit("success", "Abhinav");

Login.emit("start_Login", "Abhishek");
Login.emit("failure", "Abhishek");




