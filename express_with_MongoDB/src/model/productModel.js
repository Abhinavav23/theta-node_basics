const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    category: String,
    brand: String,
    description: String,
    inStock: Boolean,
  },
  { versionKey: false }
);

const Product = model("product", ProductSchema);

module.exports = Product;
