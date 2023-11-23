const express = require("express");

const app = express();
const products = [
  { id: 1, name: "shirt", price: 2000 },
  { id: 1, name: "mobile", price: 12000 },
  { id: 1, name: "ipad", price: 20000 },
  { id: 1, name: "laptop", price: 50000 },
];

// 1. method, 2. path/ route
app.get("/", (req, res) => {
  res.send("My first response");
});

app.get("/profile", (req, res) => {
  res.send("This is user profile");
});

app.post("/", (req, res) => {
  res.send("My first response for post req");
});

app.get("/products", (req, res) => {
  // res.send({total: 3, records: products});
  res.json({ total: products.length, records: products });
  //   res.send("<h1>Data</h1>")
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
