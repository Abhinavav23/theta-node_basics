const express = require("express");
const app = express();
const { genericMiddleware, checkLoginStatus } = require("./midlewares");
app.use(express.json());

// it is a way to define a middleware that needs to be used
// app.use(genericMiddleware);

let products = [
  { id: "1001", name: "shirt", price: 2000, color: "white" },
  { id: "1002", name: "saree", price: 3000, color: "black" },
];

/*
app.get("/home", (req, res) => {
  console.log("inside home");
  res.send("home page");
});

// app.use(checkLoginStatus);

// app.use(genericMiddleware);
app.get("/profile", genericMiddleware, checkLoginStatus, (req, res) => {
  console.log("inside profile handler");
  const user = {
    name: "abhinav",
    role: "Instructor",
  };
  res.json(user);
});

app.get("/orders", (req, res) => {
  console.log("order handler");
  res.json("my orders");
});
*/

// ----------------------
// CRUD operations
// Read
app.get("/all", (req, res) => {
  res.json({ total: products.length, records: products });
});

// get a product using id
app.get("/product/:id", (req, res) => {
  // to do---
  const { id } = req.params;
  const searchedProduct = products.find((el) => {
    return el.id === id
  })
  console.log("searchedProduct", searchedProduct);
  if(searchedProduct){
    res.json(searchedProduct);
  }else{
    res.json({error: "product not found"});
  }
  
});

// create
app.post("/product", (req, res) => {
  // data using which you will create a product
  console.log("body", req.body);
  const id = Math.floor(Math.random() * 10000);
  const newProduct = { id, ...req.body };
  products.push(newProduct);
  res.send({ total: products.length, message: "created successfully" });
});

// update
app.patch("/product/:id", (req, res) => {
  console.log("body", req.body);
  console.log("id", req.params.id);
  products.forEach((product) => {
    if (product.id === req.params.id) {
      product.price = req.body.price;
      // product.name =  req.body.name
      // product = {...product, ...req.body}
    }
  });
  res.send("updated");
});

// put
// is used to update the data but also creates the data if it is not already there
// to do task
app.put("/product/:id", (req, res) => {
  const {id} = req.params;
  const productData = req.body;

  const searchedProduct = products.find((el) => {
    return el.id === id
  })
  if(searchedProduct){
    // update 
    products.forEach((product, i) => {
      if(product.id === id){
        console.log("id", id);
        products[i] = {id,...productData}
      }
    })
    res.json({message: "updated successfully"});
  }else{
    // create
    products.push({id,...productData})
    res.json({message: "created successfully"})
  }
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => {
    return product.id !== id;
  });
  res.send("deleted");
});

module.exports = { app };

const req = {
  name: "abhinav",
  address: "india",
};

const { role } = req;

let a = undefined

let b = null
