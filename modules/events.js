const EventEmitter = require("events");
const {appendFile} = require("fs/promises")

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
const logIntoFile = async(username) => {
    await appendFile("./Login_log.txt", `\n Login Started for ${username}`)
    console.log(`Login Started for ${username}`);
}

Login.addListener("start_Login", logIntoFile);

Login.addListener("success", async(username) => {
    await appendFile("./success_log.txt", `\n Login success for ${username}`)
    console.log("login successful", username);
})

// Login.on("failure", async(username) => {
//     await appendFile("./failure_log.txt", `\n Login failed for ${username}`);
//     console.log("failure handler -- 1");
// })


const handler1 = (username) => {
    console.log("failure handler -- 1", username);
}

const handler2 = (username) => {
    console.log("failure handler -- 2", username);
}

Login.on("failure", handler1);

Login.on("failure", handler2);

// triggers the handler only once 
// Login.once("failure", () => {
//     console.log("running only once");
//     console.log("------------------");
// })

// Login.once("failure", () => {
//     console.log("running only once - 2");
//     console.log("------------------");
// })

// triggering the event
// Login.emit("start_Login", "Alok");
// Login.emit("success", "Alok");

// Login.emit("start_Login", "Arundhuti");
// console.log("listener Count before: ", Login.listenerCount("failure"));

Login.emit("failure", "Arundhuti");

Login.off("failure", handler1);
// Login.removeListener("failure", handler1);

Login.emit("failure", "Prashant");

Login.removeAllListeners('failure');

Login.emit("failure", "Moin");

// console.log("listener Count after: ", Login.listenerCount("failure"));
// console.log("Event names ", Login.eventNames());

// removeAllListeners --> all listeners will get removed





