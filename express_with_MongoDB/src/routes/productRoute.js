const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  getFilteredProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/filter", getFilteredProduct);
router.get("/:productId", getOneProduct);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
