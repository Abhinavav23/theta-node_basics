const Product = require("../model/productModel");

const createProduct = async (req, res) => {
  const newProduct = {
    ...req.body,
    inStock: req.body.quantity > 0,
  };

  try {
    const data = await Product.create(newProduct);
    res.status(201).json({ status: "successful", message: "product created" });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(200).json({ total: productList.length, records: productList });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

const getOneProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

const getFilteredProduct = async(req, res) => {
    const {brand} = req.query;
    console.log("brand", brand);
    
    const productList  = await Product.find({brand});
    console.log("productList", productList);
    res.send("filtered");
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProduct,
};
