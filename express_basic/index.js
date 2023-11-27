const express = require("express");
const app = express();
const dotENV = require('dotenv');
dotENV.config();

const products = [
  { id: "1001", name: "shirt", price: 2000, color: "white" },
  { id: "1002", name: "mobile", price: 12000, color: "black" },
  { id: "1003", name: "ipad", price: 20000, color: "green" },
  { id: "1004", name: "laptop", price: 50000, color: "green" },
  { id: "1005", name: "TV", price: 8000, color: "black" },
  { id: "1006", name: "Samsung", price: 15000, color: "black" },
  { id: "1008", name: "fan", price: 3000, color: "white" },
];

// 1. method, 2. path/ route
app.get("/", (req, res) => {
  res.send("My first response");
});

app.get("/profile", (req, res) => {
  res.send("<h1>Profile</h1>");
});

app.post("/", (req, res) => {
  res.send("My first response for post req");
});

app.get("/products", (req, res) => {
  // res.send({total: 3, records: products});
  res.json({ total: products.length, records: products });
});

app.get("/product/:productId/get/:price", (req, res) => {
  const { productId } = req.params;
  console.log("params", req.params);
  // finding the element
  const foundProduct = products.find((product) => {
    return product.id === productId;
  });
  if (foundProduct) {
    res.send(foundProduct);
  } else {
    res.send({ error: "product not found !!" });
  }
});

app.get("/product", (req, res) => {
  const { maxPrice, color } = req.query;
    console.log("query",req.query)

  const filteredByMaxPrice = products.filter((product) => {
    return product.price < maxPrice;
  });

  const filterByColor = filteredByMaxPrice.filter((product) => {
    return product.color === color
  })

  res.send({ total: filterByColor.length, records: filterByColor });
});

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// maxPrice = 5000
// color=green


/* fetch("http://localhost:5500/product?maxPrice=20000&color=black&minPrice=10000")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
}) */

const username = "testuser" | "devuser" | "uatuser"
const password = "12345"