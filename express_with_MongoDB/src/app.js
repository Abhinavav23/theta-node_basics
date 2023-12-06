const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
module.exports = app;

/*
services
1. user management
    a. /user/create
    b. /user/login
    c. /user/profile

2. Product
    a. /product/create -- POST
    b. /product/:id -- GET
    c. /product/:id -- PUT
    d. /product/:id -- DELETE
    e. /product/:id -- PATCH
    f. /product/all -- GET 

3. Cart
*/
