const mongoose = require("mongoose");
// console.log("inside DB connect");
mongoose.connect(process.env.DB_Connection_URL)
.then(() => {
   console.log("database connected successfully"); 
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

// using mongoose to create models
// also offers
// 1. data modeling 
// 2. database schema
// 3. validation
// 4. middlewares


// {
//     name: 100,
//     email: false,
//     Phone: werttyyuui
// }