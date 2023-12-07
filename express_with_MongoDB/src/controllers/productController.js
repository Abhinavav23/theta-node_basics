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
  // create
  // save
  // insertOne
  // insertMany --> creates multiple records at a time
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

const getFilteredProduct = async (req, res) => {
  const { brand } = req.query;
  console.log("brand", brand);
  try {
    // const productList = await Product.find({ brand }).select(['name', 'price', 'brand', 'quantity', 'inStock']);

    // const productList = await Product.find({ brand }).select({
    //     name: 1,
    //     price: 1,
    // });

    const productList = await Product.find({
      price: { $gt: 40000, $lte: 150000 },
    });
    res.status(200).json({ total: productList.length, records: productList });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }

  //   < --> $lt
  //   > --> $gt
  //   >= --> $gte
  //   <= --> $lte
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  // find the element to update
  // updating that
  try {
    const updatedData = await Product.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      }
      //   { new: true, upsert: true }
    );
    console.log("updatedData", updatedData);
    res.status(200).json({ msg: "successfully updated" });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
  //  updateOne
  // updateMany
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ msg: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
  // delete based on condition
  // findOneAndDelete()
  // deleteOne()
  // deleteMany()
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProduct,
  updateProduct,
  deleteProduct,
};
