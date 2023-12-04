const mongoose = require("mongoose");
// console.log("inside DB connect");
mongoose.connect(process.env.DB_Connection_URL)
.then(() => {
   console.log("database connected successfully"); 
})
.catch((err) => {
    console.log(`Error: ${err}`);
})