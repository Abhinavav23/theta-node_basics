const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProduct,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/filter", getFilteredProduct);
router.get("/:productId", getOneProduct);


module.exports = router;
